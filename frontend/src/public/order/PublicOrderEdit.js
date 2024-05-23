import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import AppNavbar from '../../AppNavbar';
import AppSideBar from '../../AppSideBar';

class PublicOrderEdit extends Component {
    emptyItem = {
        clientId: 0,
        carId: 0,
        dateOfOrder: null,
        workStart: null,
        workEnd: null,
        cost: 0,
        clients: [],
        cars: []
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
            const order = await (await fetch(`/api/orders/${this.props.match.params.id}`)).json();
            this.setState({ item: order });
        }
        const clients = await (await fetch('/api/clients')).json();
        const cars = await (await fetch('/api/cars')).json();
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                clients: clients.map(client => client.id),
                cars: cars.map(car => car.id)
            }
        }));
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                [name]: value
            }
        }));
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        // Создаем копию объекта item без свойств clients и cars
        const data = Object.assign({}, item);
        delete data.clients;
        delete data.cars;

        await fetch('/api/orders' + (data.id ? '/' + data.id : ''), {
            method: (data.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        this.props.history.push('/orders');
    }

    render() {
        const { item } = this.state;
        const title = <h2>{item.id ? 'Edit Order' : 'Add Order'}</h2>;

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
                                <Label for="clientId">Client ID</Label>
                                <Input type="select" name="clientId" id="clientId" value={item.clientId || ''} onChange={this.handleChange}>
                                    <option value="">Select Client ID</option>
                                    {item.clients.map(clientId => (
                                        <option key={clientId} value={clientId}>{clientId}</option>
                                    ))}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="carId">Car ID</Label>
                                <Input type="select" name="carId" id="carId" value={item.carId || ''} onChange={this.handleChange}>
                                    <option value="">Select Car ID</option>
                                    {item.cars.map(carId => (
                                        <option key={carId} value={carId}>{carId}</option>
                                    ))}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="dateOfOrder">Date of Order</Label>
                                <Input type="datetime-local" name="dateOfOrder" id="dateOfOrder" value={item.dateOfOrder || ''} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="workStart">Work Start</Label>
                                <Input type="datetime-local" name="workStart" id="workStart" value={item.workStart || ''} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="workEnd">Work End</Label>
                                <Input type="datetime-local" name="workEnd" id="workEnd" value={item.workEnd || ''} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cost">Cost</Label>
                                <Input type="number" name="cost" id="cost" value={item.cost || ''} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" type="submit">Save</Button>{' '}
                                <Button color="secondary" tag={Link} to="/orders">Cancel</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    }
}

export default withRouter(PublicOrderEdit);