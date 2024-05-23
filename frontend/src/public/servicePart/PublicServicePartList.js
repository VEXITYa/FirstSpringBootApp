import React, { Component } from 'react';
import {Col, Container, Row, Table} from 'reactstrap';
import AppNavbar from '../../AppNavbar';
import AppSideBar from '../../AppSideBar';
import 'bootstrap/dist/css/bootstrap.min.css'

class PublicServicePartList extends Component {

    constructor(props) {
        super(props);
        this.state = {servicePart: []};
    }

    componentDidMount() {
        fetch('/api/servicePart')
            .then(response => response.json())
            .then(data => this.setState({servicePart: data}));
    }

    render() {
        const {servicePart} = this.state;

        const servicePartList = servicePart.map(servicePart => {
            return <tr key={servicePart.id}>
                <td>{servicePart.id}</td>
                <td>{servicePart.serviceId}</td>
                <td>{servicePart.partId}</td>
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
                                    <h3>ServicePart</h3>
                                </Col>
                            </Row>


                            <Table className="mt-4 table-hover">
                                <thead>
                                <tr>
                                    <th width="5%">id</th>
                                    <th width="15%">ServiceId</th>
                                    <th width="15%">PartId</th>
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

export default PublicServicePartList;