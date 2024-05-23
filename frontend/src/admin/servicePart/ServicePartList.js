import React, { Component } from 'react';
import {Button, ButtonGroup, Col, Container, Row, Table} from 'reactstrap';
import AdminNavbar from '../../AdminNavbar';
import AdminSideBar from '../../AdminSideBar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

class ServicePartList extends Component {

    constructor(props) {
        super(props);
        this.state = {servicePart: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/api/servicePart')
            .then(response => response.json())
            .then(data => this.setState({servicePart: data}));
    }

    async remove(id) {
        await fetch(`/api/servicePart/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedServicePart = [...this.state.servicePart].filter(i => i.id !== id);
            this.setState({servicePart: updatedServicePart});
        });
    }

    render() {
        const {servicePart} = this.state;

        const servicePartList = servicePart.map(servicePart => {
            return <tr key={servicePart.id}>
                <td>{servicePart.id}</td>
                <td>{servicePart.serviceId}</td>
                <td>{servicePart.partId}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/admin/servicePart/" + servicePart.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(servicePart.id)}>Delete</Button>
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
                                    <h3>ServicePart</h3>
                                </Col>
                                <Col>
                                    <div className="d-flex justify-content-end">
                                        <Button color="success" tag={Link} to="/admin/servicePart/new">Add ServicePart</Button>
                                    </div>
                                </Col>
                            </Row>


                            <Table className="mt-4 table-hover">
                                <thead>
                                <tr>
                                    <th width="5%">id</th>
                                    <th width="15%">ServiceId</th>
                                    <th width="15%">PartId</th>
                                    <th width="20%">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {servicePartList}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default ServicePartList;