import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import AppNavbar from '../../AppNavbar';
import AppSideBar from '../../AppSideBar';

class PublicOrderServiceEdit extends Component {

    emptyItem = {
        orderId: 0,
        serviceId: 0,
        employeeId: 0,
        dateStart: null,
        dateEnd: null,
        orders: [],
        services: [],
        employees: []
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
            const orderService = await (await fetch(`/api/orderService/${this.props.match.params.id}`)).json();
            this.setState({ item: orderService });
        }
        const orders = await (await fetch('/api/orders')).json();
        const services = await (await fetch('/api/service')).json();
        const employees = await (await fetch('/api/employee')).json();
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                orders: orders.map(order => order.id),
                services: services.map(service => service.id),
                employees: employees.map(employee => employee.id)
            }
        }));
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        await fetch('/api/orderService' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/orderService');
    }

    render() {
        const { item } = this.state;
        const title = <h2>{item.id ? 'Edit OrderService' : 'Add OrderService'}</h2>;

        return <div>
            <AppNavbar />
            <Container fluid>
                <Row>
                    <Col xs={2}>
                        <AppSideBar />
                    </Col>
                    <Col xs={10}>
                        {title}
                        <Form onSubmit={this.handleSubmit}>

                            <FormGroup>
                                <Label for="orderId">Order ID</Label>
                                <Input type="select" name="orderId" id="orderId" value={item.orderId || ''}
                                    onChange={this.handleChange}>
                                    <option value="">Select Order ID</option>
                                    {item.orders.map(orderId => (
                                        <option key={orderId} value={orderId}>{orderId}</option>
                                    ))}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="serviceId">Service ID</Label>
                                <Input type="select" name="serviceId" id="serviceId" value={item.serviceId || ''}
                                    onChange={this.handleChange}>
                                    <option value="">Select Service ID</option>
                                    {item.services.map(serviceId => (
                                        <option key={serviceId} value={serviceId}>{serviceId}</option>
                                    ))}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="employeeId">Employee ID</Label>
                                <Input type="select" name="employeeId" id="employeeId" value={item.employeeId || ''}
                                    onChange={this.handleChange}>
                                    <option value="">Select Employee ID</option>
                                    {item.employees.map(employeeId => (
                                        <option key={employeeId} value={employeeId}>{employeeId}</option>
                                    ))}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="dateStart">Date Start</Label>
                                <Input type="date" name="dateStart" id="dateStart" value={item.dateStart || ''}
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="dateEnd">Date End</Label>
                                <Input type="date" name="dateEnd" id="dateEnd" value={item.dateEnd || ''}
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" type="submit">Save</Button>{' '}
                                <Button color="secondary" tag={Link} to="/orderService">Cancel</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    }
}

export default withRouter(PublicOrderServiceEdit);