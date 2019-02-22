import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import {
  Card,
  CardBody,
  CardHeader,
  //CardTitle,
  //CardGroup,
  //CardDeck,
  Row,
  Col,
  //ListGroup,
  //ListGroupItem,
  Form,
  FormGroup,
  //Badge,
  Button,
} from 'reactstrap';
import Page from 'components/Page';

export default class Edit extends Component {
  constructor(props) {
    super();
     this.state = {
     redirect: false
    };

    super(props);
    this.onChangeBodyType = this.onChangeBodyType.bind(this);
    this.onChangeServiceName = this.onChangeServiceName.bind(this);
    this.onChangeServiceAmount = this.onChangeServiceAmount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      body_type: '',
      service_name: '',
      service_amount: ''
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    axios.get('/service/edit_service/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          body_type: response.data.body_type,
          service_name: response.data.service_name,
          service_amount: response.data.service_amount
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  onChangeBodyType(e) {
    this.setState({
      body_type: e.target.value
    });
  }
  onChangeServiceName(e) {
    this.setState({
      service_name: e.target.value
    })
  }
  onChangeServiceAmount(e) {
    this.setState({
      service_amount: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      body_type: this.state.body_type,
      service_name: this.state.service_name,
      service_amount: this.state.service_amount
    };
    axios.post('/service/update/' + this.props.match.params.id, obj)
      .then(res => console.log(res.data))
      .then(() => this.setState({ redirect: true }));
  }
  render() {
    const { redirect } = this.state;
     if (redirect) {
     return <Redirect to="/service-type-list" />;
    }
    return (
      <Page title="Edit" breadcrumbs={[{name:'service',active: true }]}>
      <Row>
          <Col xl={6} lg={12} md={12}>
          <Card>
              <CardHeader> Update Sercice</CardHeader>
              <CardBody>
        <Form onSubmit={this.onSubmit}>
  <FormGroup><label>Body Type:  </label>
            <input
              type="text"
              className="form-control"
              value={this.state.body_type}
              onChange={this.onChangeBodyType}
            /></FormGroup>
       
          <FormGroup> <label>Service Name: </label>
            <input type="text"
              className="form-control"
              value={this.state.service_name}
              onChange={this.onChangeServiceName}
            /></FormGroup>
          <FormGroup><label>Price: </label>
            <input type="number" className="form-control" value={this.state.service_amount}
              onChange={this.onChangeServiceAmount}
            /></FormGroup>
           <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                            <Button>Submit</Button>
                            </Col>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
                </Col>
            </Row>
            </Page>            
    )
  }
}