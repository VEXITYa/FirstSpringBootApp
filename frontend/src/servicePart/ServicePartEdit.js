import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import AppNavbar from '../AppNavbar';
import AppSideBar from '../AppSideBar';

class ServicePartEdit extends Component {

    emptyItem = {
        serviceId: 0,
        partId: 0
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const servicePart = await (await fetch(`/api/servicePart/${this.props.match.params.id}`)).json();
            this.setState({item: servicePart});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/api/servicePart' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/servicePart');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit ServicePart' : 'Add ServicePart'}</h2>;

        return <div>
            <AppNavbar/>
            <Container fluid>
                <Row>
                    <Col xs={2}>
                        <AppSideBar/>
                    </Col>
                    <Col xs={10}>
                        {title}
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="serviceId">ServiceId</Label>
                                <Input type="number" name="serviceId" id="serviceId" value={item.serviceId || ''}
                                       onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="partId">PartId</Label>
                                <Input type="number" name="partId" id="partId" value={item.partId || ''}
                                       onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" type="submit">Save</Button>{' '}
                                <Button color="secondary" tag={Link} to="/servicePart">Cancel</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    }
}

export default withRouter(ServicePartEdit);