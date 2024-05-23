import React, { Component } from 'react';
import {Col, Container, Row, Table} from 'reactstrap';
import AppNavbar from '../../AppNavbar';
import AppSideBar from '../../AppSideBar';
import 'bootstrap/dist/css/bootstrap.min.css'

class PublicPartList extends Component {

    constructor(props) {
        super(props);
        this.state = {parts: []};
    }

    componentDidMount() {
        fetch('/api/parts')
            .then(response => response.json())
            .then(data => this.setState({parts: data}));
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
                                    <h3>Parts</h3>
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

export default PublicPartList;