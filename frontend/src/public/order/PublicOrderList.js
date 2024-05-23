import React, { Component } from 'react';
import {Button, Col, Container, Row, Table} from 'reactstrap';
import AppNavbar from '../../AppNavbar';
import AppSideBar from '../../AppSideBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom";

class PublicOrderList extends Component {

    constructor(props) {
        super(props);
        this.state = {orders: []};
    }

    componentDidMount() {
        fetch('/api/orders')
            .then(response => response.json())
            .then(data => this.setState({orders: data}));
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
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Row>
                        <Col xs={2}>
                            <AppSideBar/>
                        </Col>
                        <Col xs={10}>
                            <Row>
                                <Col>
                                    <h3>Orders</h3>
                                </Col>
                                <Col>
                                    <div className="d-flex justify-content-end">
                                        <Button color="success" tag={Link} to="/orders/new">Add Order</Button>
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

export default PublicOrderList;