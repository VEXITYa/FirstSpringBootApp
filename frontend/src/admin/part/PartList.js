import React, { Component } from 'react';
import {Button, ButtonGroup, Col, Container, Row, Table} from 'reactstrap';
import AdminNavbar from '../../AdminNavbar';
import AdminSideBar from '../../AdminSideBar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

class PartList extends Component {

    constructor(props) {
        super(props);
        this.state = {parts: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/api/parts')
            .then(response => response.json())
            .then(data => this.setState({parts: data}));
    }

    async remove(id) {
        await fetch(`/api/parts/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedParts = [...this.state.parts].filter(i => i.id !== id);
            this.setState({parts: updatedParts});
        });
    }

    render() {
        const {parts} = this.state;

        const partList = parts.map(part => {
            return <tr key={part.id}>
                <td>{part.id}</td>
                <td style={{whiteSpace: 'nowrap'}}>{part.vendorCode}</td>
                <td>{part.name}</td>
                <td>{part.brand}</td>
                <td>{part.carBrand}</td>
                <td>{part.count}</td>
                <td>{part.price}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/admin/parts/" + part.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(part.id)}>Delete</Button>
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
                                    <h3>Parts</h3>
                                </Col>
                                <Col>
                                    <div className="d-flex justify-content-end">
                                        <Button color="success" tag={Link} to="/admin/parts/new">Add Part</Button>
                                    </div>
                                </Col>
                            </Row>


                            <Table className="mt-4 table-hover">
                                <thead>
                                <tr>
                                    <th width="5%">id</th>
                                    <th width="25%">VendorCode</th>
                                    <th width="10%">Name</th>
                                    <th width="20%">Brand</th>
                                    <th width="20%">CarBrand</th>
                                    <th width="5%">Count</th>
                                    <th width="10%">Price</th>
                                    <th width="10%">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {partList}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default PartList;