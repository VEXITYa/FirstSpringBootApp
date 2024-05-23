import React, { useState, Component } from 'react';
import { Button, Container, Form, FormGroup, Input, Label, Table, Col, Row } from 'reactstrap';
import AppNavbar from './AppNavbar';
import AppSideBar from './AppSideBar';
import 'bootstrap/dist/css/bootstrap.min.css'

const ClientCars = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleSearch = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/clients/cars?phoneNumber=${phoneNumber}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCars(data);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    };

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
                                <h3>Search Client Cars</h3>
                            </Col>
                        </Row>
                        <Form>
                            <FormGroup>
                                <Label for="phoneNumber">Phone Number</Label>
                                <Input
                                    type="text"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    value={phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </FormGroup>
                            <Button color="primary" onClick={handleSearch} disabled={loading}>
                                {loading ? 'Searching...' : 'Search'}
                            </Button>
                        </Form>
                        {error && <p className="text-danger">{error}</p>}
                        {cars.length > 0 && (
                            <Table className="mt-4">
                                <thead>
                                    <tr>
                                        <th>Brand</th>
                                        <th>Model</th>
                                        <th>Year</th>
                                        <th>VIN</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cars.map((car, index) => (
                                        <tr key={index}>
                                            <td>{car[0]}</td>
                                            <td>{car[1]}</td>
                                            <td>{car[2]}</td>
                                            <td>{car[3]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        )}
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default ClientCars;