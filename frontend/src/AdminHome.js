import React, { Component } from 'react';
import './App.css';
import AdminNavbar from './AdminNavbar';
import AdminSideBar from './AdminSideBar';
import {Col, Container, Row} from "reactstrap";

class Home extends Component {
    render() {
        return (
            <div>
                <AdminNavbar/>
                <Container fluid>
                    <Row>
                        <Col xs={2}>
                            <AdminSideBar/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;