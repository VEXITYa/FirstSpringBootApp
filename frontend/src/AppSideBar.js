import React, {Component} from 'react';
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
                <li className={'nav-item text-black fs-4'}>
                    <a href="/competence" className={'nav-link text-black fs-5'} aria-current='page'>
                        <span className={'ms-2'}>
                            Competence
                        </span>
                    </a>
                </li>
                <li className={'nav-item text-black fs-4'}>
                    <a href="/employee" className={'nav-link text-black fs-5'} aria-current='page'>
                        <span className={'ms-2'}>
                            Employee
                        </span>
                    </a>
                </li>
                <li className={'nav-item text-black fs-4'}>
                    <a href="/orderPart" className={'nav-link text-black fs-5'} aria-current='page'>
                        <span className={'ms-2'}>
                            OrderPart
                        </span>
                    </a>
                </li>
                <li className={'nav-item text-black fs-4'}>
                    <a href="/orderService" className={'nav-link text-black fs-5'} aria-current='page'>
                        <span className={'ms-2'}>
                            OrderService
                        </span>
                    </a>
                </li>
                <li className={'nav-item text-black fs-4'}>
                    <a href="/service" className={'nav-link text-black fs-5'} aria-current='page'>
                        <span className={'ms-2'}>
                            Service
                        </span>
                    </a>
                </li>
                <li className={'nav-item text-black fs-4'}>
                    <a href="/parts" className={'nav-link text-black fs-5'} aria-current='page'>
                        <span className={'ms-2'}>
                            Part
                        </span>
                    </a>
                </li>
                <li className={'nav-item text-black fs-4'}>
                    <a href="/servicePart" className={'nav-link text-black fs-5'} aria-current='page'>
                        <span className={'ms-2'}>
                            ServicePart
                        </span>
                    </a>
                </li>
            </ul>
        </div>;
    }
}