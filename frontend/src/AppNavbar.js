import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, NavbarBrand} from "reactstrap";

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return  <Navbar color="dark" dark expand="md" className="d-flex justify-content-between">
            <NavbarBrand href="/" className="ms-3">CarService</NavbarBrand>
        </Navbar>
    }
}