import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AdminAppNavbar extends Component {
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
        return <Navbar color="dark" dark expand="md" className="d-flex justify-content-between">
            <NavbarBrand href="/admin" className="ms-3">CarService</NavbarBrand>
            <Nav className="d-flex align-items-center">
                <NavItem>
                    <NavLink href="/login">
                        <Button color="primary" className="me-1">Login</Button>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/logout">
                        <Button color="secondary" className="me-1">Logout</Button>
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>


    }
}