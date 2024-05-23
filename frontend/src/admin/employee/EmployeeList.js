import React, { Component } from 'react';
import {Button, ButtonGroup, Col, Container, Row, Table} from 'reactstrap';
import AdminNavbar from '../../AdminNavbar';
import AdminSideBar from '../../AdminSideBar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

class EmployeeList extends Component {

    constructor(props) {
        super(props);
        this.state = {employee: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/api/employee')
            .then(response => response.json())
            .then(data => this.setState({employee: data}));
    }

    async remove(id) {
        await fetch(`/api/employee/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedEmployee = [...this.state.employee].filter(i => i.id !== id);
            this.setState({employee: updatedEmployee});
        });
    }

    render() {
        const {employee} = this.state;

        const employeeList = employee.map(employee => {
            return <tr key={employee.id}>
                <td>{employee.id}</td>
                <td style={{whiteSpace: 'nowrap'}}>{employee.name}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.birthday}</td>
                <td>{employee.jobTitle}</td>
                <td>{employee.experience}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/admin/employee/" + employee.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(employee.id)}>Delete</Button>
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
                                    <h3>Employee</h3>
                                </Col>
                                <Col>
                                    <div className="d-flex justify-content-end">
                                        <Button color="success" tag={Link} to="/admin/employee/new">Add Employee</Button>
                                    </div>
                                </Col>
                            </Row>


                            <Table className="mt-4 table-hover">
                                <thead>
                                <tr>
                                    <th width="5%">id</th>
                                    <th width="20%">Name</th>
                                    <th width="20%">PhoneNumber</th>
                                    <th width="20%">Birthday</th>
                                    <th width="10">JobTitle</th>
                                    <th width="15%">Experience</th>
                                    <th width="10%">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {employeeList}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default EmployeeList;