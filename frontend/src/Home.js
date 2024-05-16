import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import AppSideBar from './AppSideBar';
import {Container} from "reactstrap";

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <AppSideBar/>
                <Container fluid>

                </Container>
            </div>
        );
    }
}

export default Home;