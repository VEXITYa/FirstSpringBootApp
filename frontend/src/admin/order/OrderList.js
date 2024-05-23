import React, { Component } from 'react';
import {Button, ButtonGroup, Col, Container, Row, Table} from 'reactstrap';
import AdminNavbar from '../../AdminNavbar';
import AdminSideBar from '../../AdminSideBar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

class OrderList extends Component {

    constructor(props) {
        super(props);
        this.state = {orders: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/api/orders')
            .then(response => response.json())
            .then(data => this.setState({orders: data}));
    }

    async remove(id) {
        await fetch(`/api/orders/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedOrders = [...this.state.orders].filter(i => i.id !== id);
            this.setState({orders: updatedOrders});
        });
    }

    render() {
        const {orders} = this.state;

        const orderList = orders.map(order => {
            return <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.clientId}</td>
                <td>{order.carId}</td>
                <td>{order.dateOfOrder}</td>
                <td>{order.workStart}</td>
                <td>{order.workEnd}</td>
                <td>{order.cost}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/admin/orders/" + order.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(order.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AdminNavbar/>
                <Container fluid>
                    <Row>
                        <Col xs={2}>
                            <AdminSideBar/>
                        </Col>
                        <Col xs={10}>
                            <Row>
                                <Col>
                                    <h3>Orders</h3>
                                </Col>
                                <Col>
                                    <div className="d-flex justify-content-end">
                                        <Button color="success" tag={Link} to="/admin/orders/new">Add Order</Button>
                                    </div>
                                </Col>
                            </Row>


                            <Table className="mt-4 table-hover">
                                <thead>
                                <tr>
                                    <th width="5%">id</th>
                                    <th width="10%">ClientId</th>
                                    <th width="10%">CarId</th>
                                    <th width="20%">DateOfOrder</th>
                                    <th width="20%">WorkStart</th>
                                    <th width="20%">WorkEnd</th>
                                    <th width="5%">Cost</th>
                                    <th width="10%">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {orderList}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default OrderList;