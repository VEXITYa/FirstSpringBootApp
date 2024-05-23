import React, { Component } from 'react';
import {Col, Container, Row, Table} from 'reactstrap';
import AppNavbar from '../../AppNavbar';
import AppSideBar from '../../AppSideBar';
import 'bootstrap/dist/css/bootstrap.min.css'

class PublicServiceList extends Component {

    constructor(props) {
        super(props);
        this.state = {service: []};
    }

    componentDidMount() {
        fetch('/api/service')
            .then(response => response.json())
            .then(data => this.setState({service: data}));
    }

    render() {
        const {service} = this.state;

        const serviceList = service.map(service => {
            return <tr key={service.id}>
                <td>{service.id}</td>
                <td style={{whiteSpace: 'nowrap'}}>{service.name}</td>
                <td>{service.price}</td>
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
                            </Row>


                            <Table className="mt-4 table-hover">
                                <thead>
                                <tr>
                                    <th width="5%">id</th>
                                    <th width="20%">Name</th>
                                    <th width="20%">Price</th>
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

export default PublicServiceList;