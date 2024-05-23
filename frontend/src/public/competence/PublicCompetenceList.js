import React, { Component } from 'react';
import {Col, Container, Row, Table} from 'reactstrap';
import AppNavbar from '../../AppNavbar';
import AppSideBar from '../../AppSideBar';
import 'bootstrap/dist/css/bootstrap.min.css'

class PublicCompetenceList extends Component {

    constructor(props) {
        super(props);
        this.state = {competence: []};
    }

    componentDidMount() {
        fetch('/api/competence')
            .then(response => response.json())
            .then(data => this.setState({competence: data}));
    }


    render() {
        const {competence} = this.state;

        const competenceList = competence.map(competence => {
            return <tr key={competence.id}>
                <td>{competence.id}</td>
                <td style={{whiteSpace: 'nowrap'}}>{competence.serviceId}</td>
                <td>{competence.employeeId}</td>
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
                                    <h3>Competence</h3>
                                </Col>
                            </Row>


                            <Table className="mt-4 table-hover">
                                <thead>
                                <tr>
                                    <th width="5%">id</th>
                                    <th width="25%">ServiceId</th>
                                    <th width="25%">EmployeeId</th>
                                </tr>
                                </thead>
                                <tbody>
                                {competenceList}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default PublicCompetenceList;