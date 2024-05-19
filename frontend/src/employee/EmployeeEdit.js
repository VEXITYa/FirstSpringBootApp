import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import AppNavbar from '../AppNavbar';
import AppSideBar from '../AppSideBar';

class EmployeeEdit extends Component {

    emptyItem = {
        name: '',
        phoneNumber: '',
        birthday: null,
        jobTitle: '',
        experience: null
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const employee = await (await fetch(`/api/employee/${this.props.match.params.id}`)).json();
            this.setState({item: employee});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/api/employee' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/employee');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Employee' : 'Add Employee'}</h2>;

        return <div>
            <AppNavbar/>
            <Container fluid>
                <Row>
                    <Col xs={2}>
                        <AppSideBar/>
                    </Col>
                    <Col xs={10}>
                        {title}
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" value={item.name || ''}
                                       onChange={this.handleChange} autoComplete="name"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">PhoneNumber</Label>
                                <Input type="text" name="phoneNumber" id="phoneNumber" value={item.phoneNumber || ''}
                                       onChange={this.handleChange} autoComplete="phoneNumber"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">Birthday</Label>
                                <Input type="date" name="birthday" id="birthday" value={item.birthday || ''}
                                       onChange={this.handleChange} autoComplete="birthday"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">JobTitle</Label>
                                <Input type="text" name="jobTitle" id="jobTitle" value={item.jobTitle || ''}
                                       onChange={this.handleChange} autoComplete="jobTitle"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">Experience</Label>
                                <Input type="date" name="experience" id="experience" value={item.experience || ''}
                                       onChange={this.handleChange} autoComplete="experience"/>
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" type="submit">Save</Button>{' '}
                                <Button color="secondary" tag={Link} to="/employee">Cancel</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    }
}

export default withRouter(EmployeeEdit);