import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

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
        return <div>
                    <ul className={'nav nav-pills flex-column'}>
                        <li className={'nav-item text-black fs-4'}>
                            <a href="/clients" className={'nav-link text-black fs-5'} aria-current='page'>
                                <span className={'ms-2'}>
                                    Clients
                                </span>
                            </a>
                        </li>
                        <li className={'nav-item text-black fs-4'}>
                            <a href="/cars" className={'nav-link text-black fs-5'} aria-current='page'>
                                <span className={'ms-2'}>
                                    Cars
                                </span>
                            </a>
                        </li>
                        <li className={'nav-item text-black fs-4'}>
                            <a href="/orders" className={'nav-link text-black fs-5'} aria-current='page'>
                                <span className={'ms-2'}>
                                    Orders
                                </span>
                            </a>
                        </li>
                    </ul>
            </div>;
    }
}