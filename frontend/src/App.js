import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientList from "./admin/client/ClientList";
import ClientEdit from "./admin/client/ClientEdit";
import CarList from "./admin/car/CarList";
import CarEdit from "./admin/car/CarEdit";
import OrderList from "./admin/order/OrderList";
import OrderEdit from "./admin/order/OrderEdit";
import CompetenceList from "./admin/competence/CompetenceList";
import CompetenceEdit from "./admin/competence/CompetenceEdit";
import EmployeeList from "./admin/employee/EmployeeList";
import EmployeeEdit from "./admin/employee/EmployeeEdit";
import OrderPartList from "./admin/orderPart/OrderPartList";
import OrderPartEdit from "./admin/orderPart/OrderPartEdit";
import OrderServiceList from "./admin/orderService/OrderServiceList";
import OrderServiceEdit from "./admin/orderService/OrderServiceEdit";
import PartList from "./admin/part/PartList";
import PartEdit from "./admin/part/PartEdit";
import ServiceList from "./admin/service/ServiceList";
import ServiceEdit from "./admin/service/ServiceEdit";
import ServicePartList from "./admin/servicePart/ServicePartList";
import ServicePartEdit from "./admin/servicePart/ServicePartEdit";
import PublicClientList from "./public/client/PublicClientList";
import PublicCarList from "./public/car/PublicCarList";
import PublicOrderList from "./public/order/PublicOrderList";
import PublicCompetenceList from "./public/competence/PublicCompetenceList";
import PublicEmployeeList from "./public/employee/PublicEmployeeList";
import PublicOrderPartList from "./public/orderPart/PublicOrderPartList";
import PublicOrderServiceList from "./public/orderService/PublicOrderServiceList";
import PublicPartList from "./public/part/PublicPartList";
import PublicServiceList from "./public/service/PublicServiceList";
import PublicServicePartList from "./public/servicePart/PublicServicePartList";
import AdminHome from "./AdminHome";
import PublicOrderEdit from "./public/order/PublicOrderEdit";
import PublicOrderPartEdit from "./public/orderPart/PublicOrderPartEdit";
import PublicOrderServiceEdit from './public/orderService/PublicOrderServiceEdit';
import ClientCars from './ClientCars';
import ViewServiceTable from './ViewServiceTable';


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true} component={Home}/>
                    <Route path='/viewService' exact={true} component={ViewServiceTable}/>
                    <Route path='/clients/cars' exact={true} component={ClientCars}/>
                    <Route path='/clients' exact={true} component={PublicClientList}/>
                    <Route path='/cars' exact={true} component={PublicCarList}/>
                    <Route path='/orders' exact={true} component={PublicOrderList}/>
                    <Route path='/orders/:id' exact={true} component={PublicOrderEdit}/>
                    <Route path='/competence' exact={true} component={PublicCompetenceList}/>
                    <Route path='/employee' exact={true} component={PublicEmployeeList}/>
                    <Route path='/orderPart' exact={true} component={PublicOrderPartList}/>
                    <Route path='/orderPart/:id' exact={true} component={PublicOrderPartEdit}/>
                    <Route path='/orderService' exact={true} component={PublicOrderServiceList}/>
                    <Route path='/orderService/:id' exact={true} component={PublicOrderServiceEdit}/>
                    <Route path='/parts' exact={true} component={PublicPartList}/>
                    <Route path='/service' exact={true} component={PublicServiceList}/>
                    <Route path='/servicePart' exact={true} component={PublicServicePartList}/>

                    <Route path='/admin' exact={true} component={AdminHome}/>
                    <Route path='/admin/clients' exact={true} component={ClientList}/>
                    <Route path='/admin/clients/:id' component={ClientEdit}/>
                    <Route path='/admin/cars' exact={true} component={CarList}/>
                    <Route path='/admin/cars/:id' component={CarEdit}/>
                    <Route path='/admin/orders' exact={true} component={OrderList}/>
                    <Route path='/admin/orders/:id' component={OrderEdit}/>
                    <Route path='/admin/competence' exact={true} component={CompetenceList}/>
                    <Route path='/admin/competence/:id' component={CompetenceEdit}/>
                    <Route path='/admin/employee' exact={true} component={EmployeeList}/>
                    <Route path='/admin/employee/:id' component={EmployeeEdit}/>
                    <Route path='/admin/orderPart' exact={true} component={OrderPartList}/>
                    <Route path='/admin/orderPart/:id' component={OrderPartEdit}/>
                    <Route path='/admin/orderService' exact={true} component={OrderServiceList}/>
                    <Route path='/admin/orderService/:id' component={OrderServiceEdit}/>
                    <Route path='/admin/parts' exact={true} component={PartList}/>
                    <Route path='/admin/parts/:id' component={PartEdit}/>
                    <Route path='/admin/service' exact={true} component={ServiceList}/>
                    <Route path='/admin/service/:id' component={ServiceEdit}/>
                    <Route path='/admin/servicePart' exact={true} component={ServicePartList}/>
                    <Route path='/admin/servicePart/:id' component={ServicePartEdit}/>


                </Switch>
            </Router>
        )
    }
}

export default App;