import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
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
 
export default class Create extends Component {
  constructor(props) {
    super(props);
     this.state = {
      redirect: false
    };
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
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
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
   // console.log(`The values are ${this.state.body_type}, ${this.state.service_name},and ${this.state.service_amount}`)
    const obj = {
      body_type: this.state.body_type,
      service_name: this.state.service_name,
      service_amount: this.state.service_amount
    };


    axios.post('/service/add', obj)
     .then(res => console.log(res.data))
     .then(() => this.setState({ redirect: true }));
  
    this.setState({
      body_type: '',
      service_name: '',
      service_amount: ''
    })
  }
  
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/service-type-list" />
    }
    return (
      <Page title="Create" breadcrumbs={[{name:'Service',active: true }]}>
            <Row>
                <Col xl={6} lg={12} md={12}>
                <Card>
                    <CardHeader> Service</CardHeader>
                    <CardBody>
              <Form onSubmit={this.onSubmit}>
        <FormGroup>
        <label>Add Body Type:  </label>
            <input type="text" className="form-control" value={this.state.body_type} onChange={this.onChangeBodyType} />
        </FormGroup>
        <FormGroup><label>Add  Service Name: </label>
            <input type="text" className="form-control" value={this.state.service_name}
              onChange={this.onChangeServiceName} /></FormGroup>
        <FormGroup><label>Enter Price: </label>
            <input type="number" className="form-control" value={this.state.service_amount}
              onChange={this.onChangeServiceAmount} pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" data-type="currency" placeholder="$0.00" /></FormGroup>
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
    
    );
  }
}
