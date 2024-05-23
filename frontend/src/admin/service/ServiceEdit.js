import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import AdminNavbar from '../../AdminNavbar';
import AdminSideBar from '../../AdminSideBar';

class ServiceEdit extends Component {

    emptyItem = {
        name: '',
        price: ''
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
            const service = await (await fetch(`/api/service/${this.props.match.params.id}`)).json();
            this.setState({item: service});
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

        await fetch('/api/service' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/admin/service');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Service' : 'Add Service'}</h2>;

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
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" value={item.name || ''}
                                       onChange={this.handleChange} autoComplete="name"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="price">Price</Label>
                                <Input type="number" name="price" id="price" value={item.price || ''}
                                       onChange={this.handleChange} autoComplete="price"/>
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" type="submit">Save</Button>{' '}
                                <Button color="secondary" tag={Link} to="/service">Cancel</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    }
}

export default withRouter(ServiceEdit);