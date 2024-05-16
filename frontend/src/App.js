import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientList from './client/ClientList';
import ClientEdit from "./client/ClientEdit";
import CarList from "./car/CarList";
import CarEdit from "./car/CarEdit";
import OrderList from "./order/OrderList";
import OrderEdit from "./order/OrderEdit";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true} component={Home}/>
                    <Route path='/clients' exact={true} component={ClientList}/>
                    <Route path='/clients/:id' component={ClientEdit}/>
                    <Route path='/cars' exact={true} component={CarList}/>
                    <Route path='/cars/:id' component={CarEdit}/>
                    <Route path='/orders' exact={true} component={OrderList}/>
                    <Route path='/orders/:id' component={OrderEdit}/>
                </Switch>
            </Router>
        )
    }
}

export default App;