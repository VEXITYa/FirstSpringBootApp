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
        return  <nav class="navbar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand " href="/">
                                CarService
                        </a>
                    </div>
                </nav>
    }
}