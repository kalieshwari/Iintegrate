import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import Pagei from '../components/Page';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const tableTypes = ['', 'bordered', 'striped', 'hover'];

export default class CustomerIndex extends React.Component {

  constructor(props) {
    super(props);
    //this.delete = this.delete.bind(this);
    
    this.state = {
      customers: [],
      redirect: false
    };
  }
  componentDidMount(){
    axios.get('/customer')
    .then(res => {
      const customers = res.data;
      this.setState({ customers });
    })
    
  }
  

    render() {
            const { redirect } = this.state;
            if (redirect) {
                return <Redirect to="/customers-list" />;
                
            }

      return (
        <Page title="Customer" breadcrumbs={[{name:'List',active: true }]}>
            <Row>
              <Col xl={12} lg={12} md={12}>
              <input className="search form-control" type="text" placeholder="Search.."/>
              </Col>
            </Row>
            <Row>
                <Col xl={12} lg={12} md={12}>
                <Card>
                    <CardHeader> Customer List</CardHeader>
                    <CardBody>
                    <Table id="userTbl">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Mobile 1</th>
                    <th scope="col">Mobile 2</th>
                    <th scope="col" colSpan="2">Action</th>
                  </tr>
                </thead>
                <tbody id="IndexCustomerTable">
              { this.state.customers.map(customer =>
              <tr>
                <td>
                {customer._id} 
                </td>
                <td>
                {customer.first_name} 
                </td>
                <td>
                {customer.last_name} 
                </td>
                <td>
                {customer.mobile_1} 
                </td>
                <td>
                {customer.mobile_2} 
                </td>
                <td>
                <Link to={"/editcustomer/"+customer._id} className="btn btn-primary">Edit</Link>                
                </td>
                <td>
                <button onClick={(e) => { if (window.confirm('Are you sure to delete this item?')) (axios.get('/customer/delete/'+customer._id)).then(() => this.setState({ redirect: true })); }} className="btn btn-danger">Delete</button>
                </td>
              </tr>
              )}
              </tbody>
              </Table>
                    </CardBody>
                 </Card>
                 </Col>
             </Row>
        </Page>
       
      );
    }
  }
