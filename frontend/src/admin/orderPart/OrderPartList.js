import React, { Component } from 'react';
import {Button, ButtonGroup, Col, Container, Row, Table} from 'reactstrap';
import AdminNavbar from '../../AdminNavbar';
import AdminSideBar from '../../AdminSideBar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

class OrderPartList extends Component {

    constructor(props) {
        super(props);
        this.state = {orderPart: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/api/orderPart')
            .then(response => response.json())
            .then(data => this.setState({orderPart: data}));
    }

    async remove(id) {
        await fetch(`/api/orderPart/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedOrderPart = [...this.state.orderPart].filter(i => i.id !== id);
            this.setState({orderPart: updatedOrderPart});
        });
    }

    render() {
        const {orderPart} = this.state;

        const orderPartList = orderPart.map(orderPart => {
            return <tr key={orderPart.id}>
                <td>{orderPart.id}</td>
                <td>{orderPart.orderId}</td>
                <td>{orderPart.partId}</td>
                <td>{orderPart.count}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/admin/orderPart/" + orderPart.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(orderPart.id)}>Delete</Button>
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
                                    <h3>OrderPart</h3>
                                </Col>
                                <Col>
                                    <div className="d-flex justify-content-end">
                                        <Button color="success" tag={Link} to="/admin/orderPart/new">Add OrderPart</Button>
                                    </div>
                                </Col>
                            </Row>


                            <Table className="mt-4 table-hover">
                                <thead>
                                <tr>
                                    <th width="5%">id</th>
                                    <th width="25%">OrderId</th>
                                    <th width="25%">PartId</th>
                                    <th width="25%">Count</th>
                                    <th width="20%">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {orderPartList}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default OrderPartList;