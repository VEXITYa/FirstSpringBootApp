import React, { Component } from 'react';
import {Col, Container, Row, Table} from 'reactstrap';
import AppNavbar from '../../AppNavbar';
import AppSideBar from '../../AppSideBar';
import 'bootstrap/dist/css/bootstrap.min.css'

class PublicEmployeeList extends Component {

    constructor(props) {
        super(props);
        this.state = {employee: []};
    }

    componentDidMount() {
        fetch('/api/employee')
            .then(response => response.json())
            .then(data => this.setState({employee: data}));
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
                                    <h3>Employee</h3>
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

export default PublicEmployeeList;