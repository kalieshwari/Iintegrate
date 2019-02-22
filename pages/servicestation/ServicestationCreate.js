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

export default class CreateStation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.onChangeUnitName = this.onChangeUnitName.bind(this);
    this.onChangeAddress1 = this.onChangeAddress1.bind(this);
    this.onChangeAddress2 = this.onChangeAddress2.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeZip = this.onChangeZip.bind(this);
    this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
    this.onChangeEmailid = this.onChangeEmailid.bind(this);
    this.onChangeRemarks = this.onChangeRemarks.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      unit_name: '',
      address1: '',
      address2: '',
      state: '',
      zip: '',
      contact_number: '',
      email_id: '',
      remarks: ''
    }
  }
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }
  onChangeUnitName(e) {
    this.setState({
      unit_name: e.target.value
    });
  }
  onChangeAddress1(e) {
    this.setState({
      address1: e.target.value
    })
  }
  onChangeAddress2(e) {
    this.setState({
      address2: e.target.value
    })
  }
  onChangeState(e) {
    this.setState({
      state: e.target.value
    });
  }
  onChangeZip(e) {
    this.setState({
      zip: e.target.value
    })
  }
  onChangeContactNumber(e) {
    this.setState({
      contact_number: e.target.value
    });
  }
  onChangeEmailid(e) {
    this.setState({
      email_id: e.target.value
    });
  }
  onChangeRemarks(e) {
    this.setState({
      remarks: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
     console.log(`The values are ${this.state.unit_name}, ${this.state.address1}, ${this.state.address2},${this.state.state}, ${this.state.zip}, ${this.state.contact_number}, ${this.state.email_id}, and ${this.state.remarks}`)
    const obj = {
      unit_name: this.state.unit_name,
      address1: this.state.address1,
      address2: this.state.address2,
      state: this.state.state,
      zip: this.state.zip,
      contact_number: this.state.contact_number,
      email_id: this.state.email_id,
      remarks: this.state.remarks
    };
    axios.post('/station/add', obj)
      .then(res => console.log(res.data))
      .then(() => this.setState({ redirect: true }));

    this.setState({
      unit_name: '',
      address1: '',
      address2: '',
      state: '',
      zip: '',
      contact_number: '',
      email_id: '',
      remarks: ''
    })
  }
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/service-station-list" />;
    }
    return (
      <Page title="Create" breadcrumbs={[{name:'Service',active: true }]}>
            <Row>
                <Col xl={6} lg={12} md={12}>
                <Card>
                    <CardHeader> Service</CardHeader>
                    <CardBody>
              <Form onSubmit={this.onSubmit}>
        <FormGroup> <label>Service Unit Name:  </label>
            <input type="text" className="form-control" value={this.state.unit_name}
              onChange={this.onChangeUnitName} /></FormGroup>
        <FormGroup><label>Address 1: </label>
            <input type="text" className="form-control" value={this.state.address1}
              onChange={this.onChangeAddress1} /></FormGroup>
        <FormGroup> <label>Address 2: </label>
            <input type="text" className="form-control" value={this.state.address2}
              onChange={this.onChangeAddress2}
            /></FormGroup>
        <FormGroup><label>State:  </label>
            <input type="text" className="form-control" value={this.state.state}
              onChange={this.onChangeState} /></FormGroup>
        <FormGroup> <label>zip: </label>
            <input type="number" className="form-control" value={this.state.zip}
              onChange={this.onChangeZip} /></FormGroup>
        <FormGroup> <label>Contact Number: </label>
            <input type="number" className="form-control" value={this.state.contact_number}
              onChange={this.onChangeContactNumber}
            /></FormGroup>
        <FormGroup><label>Email Id:  </label>
            <input type="text" className="form-control" value={this.state.email_id}
              onChange={this.onChangeEmailid} /></FormGroup>
        <FormGroup><label>Remarks: </label>
            <input type="text" className="form-control" value={this.state.remarks}
              onChange={this.onChangeRemarks} /></FormGroup>
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