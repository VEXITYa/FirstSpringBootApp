import React, { Component } from 'react';
import {Button, ButtonGroup, Col, Container, Row, Table} from 'reactstrap';
import AppNavbar from '../AppNavbar';
import AppSideBar from '../AppSideBar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

class CarList extends Component {

    constructor(props) {
        super(props);
        this.state = {cars: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/cars')
            .then(response => response.json())
            .then(data => this.setState({cars: data}));
    }

    async remove(id) {
        await fetch(`/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedCars = [...this.state.cars].filter(i => i.id !== id);
            this.setState({cars: updatedCars});
        });
    }

    render() {
        const {cars} = this.state;

        const carList = cars.map(car => {
            return <tr key={car.id}>
                <td>{car.id}</td>
                <td style={{whiteSpace: 'nowrap'}}>{car.vin}</td>
                <td>{car.clientId}</td>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/cars/" + car.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(car.id)}>Delete</Button>
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
                                    <h3>Cars</h3>
                                </Col>
                                <Col>
                                    <div className="d-flex justify-content-end">
                                        <Button color="success" tag={Link} to="/cars/new">Add Car</Button>
                                    </div>
                                </Col>
                            </Row>


                            <Table className="mt-4 table-hover">
                                <thead>
                                <tr>
                                    <th width="5%">id</th>
                                    <th width="25%">VIN</th>
                                    <th width="10%">ClientId</th>
                                    <th width="20%">Brand</th>
                                    <th width="30%">Model</th>
                                    <th width="10%">Year</th>
                                </tr>
                                </thead>
                                <tbody>
                                {carList}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default CarList;