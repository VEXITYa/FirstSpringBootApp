import React, { Component } from 'react';
import {Col, Container, Row, Table, Button} from 'reactstrap';
import AppNavbar from '../../AppNavbar';
import AppSideBar from '../../AppSideBar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

class PublicOrderServiceList extends Component {

    constructor(props) {
        super(props);
        this.state = {orderService: []};
    }

    componentDidMount() {
        fetch('/api/orderService')
            .then(response => response.json())
            .then(data => this.setState({orderService: data}));
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
                                    <h3>OrderService</h3>
                                </Col>
                                <Col>
                                    <div className="d-flex justify-content-end">
                                        <Button color="success" tag={Link} to="/orderService/new">Add OrderService</Button>
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

export default PublicOrderServiceList;