import React, { Component } from 'react';
import {Button, ButtonGroup, Col, Container, Row, Table} from 'reactstrap';
import AdminNavbar from '../../AdminNavbar';
import AdminSideBar from '../../AdminSideBar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

class CompetenceList extends Component {

    constructor(props) {
        super(props);
        this.state = {competence: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/api/competence')
            .then(response => response.json())
            .then(data => this.setState({competence: data}));
    }

    async remove(id) {
        await fetch(`/api/competence/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedCompetence = [...this.state.competence].filter(i => i.id !== id);
            this.setState({competence: updatedCompetence});
        });
    }

    render() {
        const {competence} = this.state;

        const competenceList = competence.map(competence => {
            return <tr key={competence.id}>
                <td>{competence.id}</td>
                <td style={{whiteSpace: 'nowrap'}}>{competence.serviceId}</td>
                <td>{competence.employeeId}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/admin/competence/" + competence.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(competence.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AdminNavbar/>
                <Container fluid>
                    <Row>
                        <Col xs={2}>
                            <AdminSideBar/>
                        </Col>
                        <Col xs={10}>
                            <Row>
                                <Col>
                                    <h3>Competence</h3>
                                </Col>
                                <Col>
                                    <div className="d-flex justify-content-end">
                                        <Button color="success" tag={Link} to="/admin/competence/new">Add Competence</Button>
                                    </div>
                                </Col>
                            </Row>


                            <Table className="mt-4 table-hover">
                                <thead>
                                <tr>
                                    <th width="5%">id</th>
                                    <th width="25%">ServiceId</th>
                                    <th width="25%">EmployeeId</th>
                                    <th width="20%">Actions</th>
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

export default CompetenceList;