import React, { Component } from 'react';
import {Col, Container, Row, Table} from 'reactstrap';
import AppNavbar from '../../AppNavbar';
import AppSideBar from '../../AppSideBar';
import 'bootstrap/dist/css/bootstrap.min.css'

class PublicCarList extends Component {

    constructor(props) {
        super(props);
        this.state = {cars: []};
    }

    componentDidMount() {
        fetch('/api/cars')
            .then(response => response.json())
            .then(data => this.setState({cars: data}));
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

export default PublicCarList;