import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import AppNavbar from '../AppNavbar';
import AppSideBar from '../AppSideBar';

class OrderEdit extends Component {

    emptyItem = {
        clientId: 0,
        carId: 0,
        dateOfOrder: null,
        workStart: null,
        workEnd: null,
        cost: 0
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
            const order = await (await fetch(`/orders/${this.props.match.params.id}`)).json();
            this.setState({item: order});
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

        await fetch('/orders' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/orders');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Order' : 'Add Order'}</h2>;

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
                                <Label for="clientId">ClientId</Label>
                                <Input type="text" name="clientId" id="clientId" value={item.clientId || ''}
                                       onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="carId">CarId</Label>
                                <Input type="text" name="carId" id="carId" value={item.carId || ''}
                                       onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">DateOfOrder</Label>
                                <Input type="text" name="dateOfOrder" id="dateOfOrder" value={item.dateOfOrder || ''}
                                       onChange={this.handleChange} autoComplete="bday"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">WorkStart</Label>
                                <Input type="text" name="workStart" id="workStart" value={item.workStart || ''}
                                       onChange={this.handleChange} autoComplete="bday"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">WorkEnd</Label>
                                <Input type="text" name="workEnd" id="workEnd" value={item.workEnd || ''}
                                       onChange={this.handleChange} autoComplete="bday"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">Cost</Label>
                                <Input type="text" name="cost" id="cost" value={item.cost || ''}
                                       onChange={this.handleChange}/>
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

export default withRouter(OrderEdit);