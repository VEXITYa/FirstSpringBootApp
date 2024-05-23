import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import AdminNavbar from '../../AdminNavbar';
import AdminSideBar from '../../AdminSideBar';

class CompetenceEdit extends Component {

    emptyItem = {
        serviceId: 0,
        employeeId: 0,
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
        this.props.history.push('/admin/employee');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Employee' : 'Add Employee'}</h2>;

        return <div>
            <AdminNavbar/>
            <Container fluid>
                <Row>
                    <Col xs={2}>
                        <AdminSideBar/>
                    </Col>
                    <Col xs={10}>
                        {title}
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="name">ServiceId</Label>
                                <Input type="number" name="serviceId" id="serviceId" value={item.serviceId || ''}
                                       onChange={this.handleChange} autoComplete="serviceId"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">EmployeeId</Label>
                                <Input type="number" name="employeeId" id="employeeId" value={item.employeeId || ''}
                                       onChange={this.handleChange} autoComplete="employeeId"/>
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

export default withRouter(CompetenceEdit);