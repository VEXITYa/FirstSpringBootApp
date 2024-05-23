import React, {useState, useEffect} from 'react';
import {Table, Container, Row, Col, Button, Input} from 'reactstrap';
import AppNavbar from "./AppNavbar";
import AppSideBar from './AppSideBar';

const ViewServiceTable = () => {
    const [viewServices, setViewServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/viewService');
            const data = await response.json();
            setViewServices(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleUpdate = async (name, price) => {
        try {
            await fetch('/api/viewService', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, price: parseInt(price) }),
            });
            fetchData();
        } catch (error) {
            setError(error);
        }
    };
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading view services: {error.message}</p>;
    }
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
                                <h3>ViewService</h3>
                            </Col>
                        </Row>
                        <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {viewServices.map(service => (
                        <tr key={service.name}>
                            <td>{service.name}</td>
                            <td>
                                <Input
                                    type="number"
                                    value={service.price}
                                    onChange={e => {
                                        const newPrice = e.target.value;
                                        setViewServices(prevServices =>
                                            prevServices.map(s =>
                                                s.name === service.name
                                                    ? { ...s, price: newPrice }
                                                    : s
                                            )
                                        );
                                    }}
                                />
                            </td>
                            <td>
                                <Button color="primary" onClick={() => handleUpdate(service.name, service.price)}>
                                    Save
                                </Button>{' '}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default ViewServiceTable;