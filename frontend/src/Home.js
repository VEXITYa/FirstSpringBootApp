import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import AppSideBar from './AppSideBar';
import {Col, Container, Row} from "reactstrap";

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Row>
                        <Col xs={2}>
                            <AppSideBar/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;