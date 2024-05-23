import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import AppNavbar from '../../AppNavbar';
import AppSideBar from '../../AppSideBar';

class PublicOrderPartEdit extends Component {

    emptyItem = {
        orderId: 0,
        partId: 0,
        count: 0,
        orders: [],
        parts: []
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
            const orderPart = await (await fetch(`/api/orderPart/${this.props.match.params.id}`)).json();
            this.setState({ item: orderPart });
        }
        const orders = await (await fetch('/api/orders')).json();
        const parts = await (await fetch('/api/parts')).json();
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                orders: orders.map(order => order.id),
                parts: parts.map(part => part.id)
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

        await fetch('/api/orderPart' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/orderPart');
    }

    render() {
        const { item } = this.state;
        const title = <h2>{item.id ? 'Edit OrderPart' : 'Add OrderPart'}</h2>;

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
                                <Label for="partId">Part ID</Label>
                                <Input type="select" name="partId" id="partId" value={item.partId || ''}
                                    onChange={this.handleChange}>
                                    <option value="">Select Part ID</option>
                                    {item.parts.map(partId => (
                                        <option key={partId} value={partId}>{partId}</option>
                                    ))}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="count">Count</Label>
                                <Input type="number" name="count" id="count" value={item.count || ''}
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" type="submit">Save</Button>{' '}
                                <Button color="secondary" tag={Link} to="/orderPart">Cancel</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    }
}

export default withRouter(PublicOrderPartEdit);