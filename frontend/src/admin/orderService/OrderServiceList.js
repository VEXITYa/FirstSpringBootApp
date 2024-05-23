import React, { Component } from 'react';
import {Button, ButtonGroup, Col, Container, Row, Table} from 'reactstrap';
import AdminNavbar from '../../AdminNavbar';
import AdminSideBar from '../../AdminSideBar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

class OrderServiceList extends Component {

    constructor(props) {
        super(props);
        this.state = {orderService: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/api/orderService')
            .then(response => response.json())
            .then(data => this.setState({orderService: data}));
    }

    async remove(id) {
        await fetch(`/api/orderService/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedOrderService = [...this.state.orderService].filter(i => i.id !== id);
            this.setState({orderService: updatedOrderService});
        });
    }

    render() {
        const {orderService} = this.state;

        const orderServiceList = orderService.map(orderService => {
            return <tr key={orderService.id}>
                <td>{orderService.id}</td>
                <td>{orderService.orderId}</td>
                <td>{orderService.serviceId}</td>
                <td>{orderService.employeeId}</td>
                <td>{orderService.dateStart}</td>
                <td>{orderService.dateEnd}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/admin/orderService/" + orderService.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(orderService.id)}>Delete</Button>
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
                                    <h3>OrderService</h3>
                                </Col>
                                <Col>
                                    <div className="d-flex justify-content-end">
                                        <Button color="success" tag={Link} to="/admin/orderService/new">Add OrderService</Button>
                                    </div>
                                </Col>
                            </Row>


                            <Table className="mt-4 table-hover">
                                <thead>
                                <tr>
                                    <th width="5%">id</th>
                                    <th width="15%">OrderId</th>
                                    <th width="15%">ServiceId</th>
                                    <th width="15%">EmployeeId</th>
                                    <th width="15%">DateStart</th>
                                    <th width="15%">DateEnd</th>
                                    <th width="20%">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {orderServiceList}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default OrderServiceList;