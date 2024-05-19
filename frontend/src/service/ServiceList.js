import React, { Component } from 'react';
import {Button, ButtonGroup, Col, Container, Row, Table} from 'reactstrap';
import AppNavbar from '../AppNavbar';
import AppSideBar from '../AppSideBar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

class ServiceList extends Component {

    constructor(props) {
        super(props);
        this.state = {service: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/api/service')
            .then(response => response.json())
            .then(data => this.setState({service: data}));
    }

    async remove(id) {
        await fetch(`/api/service/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedService = [...this.state.service].filter(i => i.id !== id);
            this.setState({service: updatedService});
        });
    }

    render() {
        const {service} = this.state;

        const serviceList = service.map(service => {
            return <tr key={service.id}>
                <td>{service.id}</td>
                <td style={{whiteSpace: 'nowrap'}}>{service.name}</td>
                <td>{service.price}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/service/" + service.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(service.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
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
                                    <h3>Service</h3>
                                </Col>
                                <Col>
                                    <div className="d-flex justify-content-end">
                                        <Button color="success" tag={Link} to="/service/new">Add Service</Button>
                                    </div>
                                </Col>
                            </Row>


                            <Table className="mt-4 table-hover">
                                <thead>
                                <tr>
                                    <th width="5%">id</th>
                                    <th width="20%">Name</th>
                                    <th width="20%">Price</th>
                                    <th width="10%">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {serviceList}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default ServiceList;