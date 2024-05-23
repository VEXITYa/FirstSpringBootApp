import React, {useState, useEffect} from 'react';
import {Table, Container, Row, Col} from 'reactstrap';
import AppNavbar from "./AppNavbar";
import AppSideBar from './AppSideBar';

const ViewServiceTable = () => {
    const [viewServices, setViewServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/viewService')
            .then(response => response.json())
            .then(data => {
                setViewServices(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

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
                            </tr>
                            </thead>
                            <tbody>
                            {viewServices.map(service => (
                                <tr key={service.name}>
                                    <td>{service.name}</td>
                                    <td>{service.price}</td>
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