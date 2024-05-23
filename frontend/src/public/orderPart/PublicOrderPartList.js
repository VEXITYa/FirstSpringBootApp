import React, { Component } from 'react';
import {Button, Col, Container, Row, Table} from 'reactstrap';
import AppNavbar from '../../AppNavbar';
import AppSideBar from '../../AppSideBar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

class PublicOrderPartList extends Component {

    constructor(props) {
        super(props);
        this.state = {orderPart: []};
    }

    componentDidMount() {
        fetch('/api/orderPart')
            .then(response => response.json())
            .then(data => this.setState({orderPart: data}));
    }


    render() {
        const {orderPart} = this.state;

        const orderPartList = orderPart.map(orderPart => {
            return <tr key={orderPart.id}>
                <td>{orderPart.id}</td>
                <td>{orderPart.orderId}</td>
                <td>{orderPart.partId}</td>
                <td>{orderPart.count}</td>
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
                                    <h3>OrderPart</h3>
                                </Col>
                                <Col>
                                    <div className="d-flex justify-content-end">
                                        <Button color="success" tag={Link} to="/orderPart/new">Add OrderPart</Button>
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

export default PublicOrderPartList;