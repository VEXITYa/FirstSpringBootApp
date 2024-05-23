import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import AdminNavbar from '../../AdminNavbar';
import AdminSideBar from '../../AdminSideBar';

class PartEdit extends Component {

    emptyItem = {
        vendorCode: '',
        name: '',
        brand: '',
        partBrand: '',
        count: 0,
        price: 0
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
            const part = await (await fetch(`/api/parts/${this.props.match.params.id}`)).json();
            this.setState({item: part});
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

        await fetch('/api/parts' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/admin/parts');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Part' : 'Add Part'}</h2>;

        return <div>
            <AdminNavbar/>
            <Container fluid>
                <Row>
                    <Col xs={2}>
                        <AdminSideBar/>
                    </Col>
                    <Col xs={10}>
                        {title}
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="vendorCode">VendorCode</Label>
                                <Input type="text" name="vendorCode" id="vendorCode" value={item.vendorCode || ''}
                                       onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" value={item.name || ''}
                                       onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">Brand</Label>
                                <Input type="text" name="brand" id="brand" value={item.brand || ''}
                                       onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="carBrand">CarBrand</Label>
                                <Input type="text" name="carBrand" id="carBrand" value={item.carBrand || ''}
                                       onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="count">Count</Label>
                                <Input type="number" name="count" id="count" value={item.count || ''}
                                       onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="price">Price</Label>
                                <Input type="number" name="price" id="price" value={item.price || ''}
                                       onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" type="submit">Save</Button>{' '}
                                <Button color="secondary" tag={Link} to="/parts">Cancel</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    }
}

export default withRouter(PartEdit);