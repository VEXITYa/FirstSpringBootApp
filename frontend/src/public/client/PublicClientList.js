import React, { Component } from 'react';
import {Col, Container, Row, Table} from 'reactstrap';
import AppNavbar from '../../AppNavbar';
import AppSideBar from '../../AppSideBar';
import 'bootstrap/dist/css/bootstrap.min.css'

class PublicClientList extends Component {

    constructor(props) {
        super(props);
        this.state = {clients: []};
    }

    componentDidMount() {
        fetch('/api/clients')
            .then(response => response.json())
            .then(data => this.setState({clients: data}));
    }

    render() {
        const {clients} = this.state;

        const clientList = clients.map(client => {
            return <tr key={client.id}>
                <td>{client.id}</td>
                <td style={{whiteSpace: 'nowrap'}}>{client.name}</td>
                <td>{client.phoneNumber}</td>
                <td>{client.discount}</td>
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
                                    <h3>Clients</h3>
                                </Col>
                            </Row>


                            <Table className="mt-4 table-hover">
                                <thead>
                                <tr>
                                    <th width="5%">id</th>
                                    <th width="25%">Name</th>
                                    <th width="30%">PhoneNumber</th>
                                    <th width="5%">Discount</th>
                                </tr>
                                </thead>
                                <tbody>
                                {clientList}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default PublicClientList;