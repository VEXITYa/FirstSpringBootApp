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
import CompetenceList from "./competence/CompetenceList";
import CompetenceEdit from "./competence/CompetenceEdit";
import EmployeeList from "./employee/EmployeeList";
import EmployeeEdit from "./employee/EmployeeEdit";
import OrderPartEdit from "./orderPart/OrderPartEdit";
import OrderPartList from "./orderPart/OrderPartList";
import OrderServiceList from "./orderService/OrderServiceList";
import OrderServiceEdit from "./orderService/OrderServiceEdit";
import PartList from "./part/PartList";
import PartEdit from "./part/PartEdit";
import ServiceList from "./service/ServiceList";
import ServiceEdit from "./service/ServiceEdit";
import ServicePartList from "./servicePart/ServicePartList";
import ServicePartEdit from "./servicePart/ServicePartEdit";

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
                    <Route path='/competence' exact={true} component={CompetenceList}/>
                    <Route path='/competence/:id' component={CompetenceEdit}/>
                    <Route path='/employee' exact={true} component={EmployeeList}/>
                    <Route path='/employee/:id' component={EmployeeEdit}/>
                    <Route path='/orderPart' exact={true} component={OrderPartList}/>
                    <Route path='/orderPart/:id' component={OrderPartEdit}/>
                    <Route path='/orderService' exact={true} component={OrderServiceList}/>
                    <Route path='/orderService/:id' component={OrderServiceEdit}/>
                    <Route path='/parts' exact={true} component={PartList}/>
                    <Route path='/parts/:id' component={PartEdit}/>
                    <Route path='/service' exact={true} component={ServiceList}/>
                    <Route path='/service/:id' component={ServiceEdit}/>
                    <Route path='/servicePart' exact={true} component={ServicePartList}/>
                    <Route path='/servicePart/:id' component={ServicePartEdit}/>
                </Switch>
            </Router>
        )
    }
}

export default App;