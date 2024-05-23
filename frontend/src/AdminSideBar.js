import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class AdminNavbar extends Component {
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
                    <a href="/admin/clients" className={'nav-link text-black fs-5'} aria-current='page'>
                        <span className={'ms-2'}>
                            Clients
                        </span>
                    </a>
                </li>
                <li className={'nav-item text-black fs-4'}>
                    <a href="/admin/cars" className={'nav-link text-black fs-5'} aria-current='page'>
                        <span className={'ms-2'}>
                            Cars
                        </span>
                    </a>
                </li>
                <li className={'nav-item text-black fs-4'}>
                    <a href="/admin/orders" className={'nav-link text-black fs-5'} aria-current='page'>
                        <span className={'ms-2'}>
                            Orders
                        </span>
                    </a>
                </li>
                <li className={'nav-item text-black fs-4'}>
                    <a href="/admin/competence" className={'nav-link text-black fs-5'} aria-current='page'>
                        <span className={'ms-2'}>
                            Competence
                        </span>
                    </a>
                </li>
                <li className={'nav-item text-black fs-4'}>
                    <a href="/admin/employee" className={'nav-link text-black fs-5'} aria-current='page'>
                        <span className={'ms-2'}>
                            Employee
                        </span>
                    </a>
                </li>
                <li className={'nav-item text-black fs-4'}>
                    <a href="/admin/orderPart" className={'nav-link text-black fs-5'} aria-current='page'>
                        <span className={'ms-2'}>
                            OrderPart
                        </span>
                    </a>
                </li>
                <li className={'nav-item text-black fs-4'}>
                    <a href="/admin/orderService" className={'nav-link text-black fs-5'} aria-current='page'>
                        <span className={'ms-2'}>
                            OrderService
                        </span>
                    </a>
                </li>
                <li className={'nav-item text-black fs-4'}>
                    <a href="/admin/service" className={'nav-link text-black fs-5'} aria-current='page'>
                        <span className={'ms-2'}>
                            Service
                        </span>
                    </a>
                </li>
                <li className={'nav-item text-black fs-4'}>
                    <a href="/admin/parts" className={'nav-link text-black fs-5'} aria-current='page'>
                        <span className={'ms-2'}>
                            Part
                        </span>
                    </a>
                </li>
                <li className={'nav-item text-black fs-4'}>
                    <a href="/admin/servicePart" className={'nav-link text-black fs-5'} aria-current='page'>
                        <span className={'ms-2'}>
                            ServicePart
                        </span>
                    </a>
                </li>
            </ul>
        </div>;
    }
}