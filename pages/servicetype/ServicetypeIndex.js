import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
//import Pagei from '../../components/Page';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

//const tableTypes = ['', 'bordered', 'striped', 'hover'];

export default class ServiceIndex extends React.Component {
  constructor(props) {
    super(props);
   this.state = { 
     service_master: [],
   redirect: false 
  };
  }
  
  componentDidMount() {
    axios.get('/service')
    .then(res => {
      const service_master = res.data;
      this.setState({ service_master });
    })
  }
     
  render() {
    const { redirect } = this.state;
            if (redirect) {
                return <Redirect to="/service-type-list" />;                
            }

    return (
      <Page title="Service Type" breadcrumbs={[{name:'List',active: true }]}>
            <Row>
              <Col xl={12} lg={12} md={12}>
              <input className="search form-control" type="text" placeholder="Search.."/>
              </Col>
            </Row>
            <Row>
                <Col xl={12} lg={12} md={12}>
                <Card>
                    <CardHeader> Service List</CardHeader>
                    <CardBody>
                    <Table id="serviceTbl">
                <thead>
                  <tr>
                    <th scope="col">Body Type</th>
                    <th scope="col">Service Name</th>
                    <th scope="col"> Price</th>
                    <th scope="col" colSpan="2">Action</th>
                   <th>
                      <Link to={"/create_service/"} className="btn btn-primary">ADD</Link>                
                  </th> 
                  </tr>
                </thead>
                <tbody id="IndexServicetypeTable">
              { this.state.service_master.map(service =>
              <tr>
                <td>
                {service.body_type} 
                </td>
                <td>
                {service.service_name} 
                </td>
                <td>
                {service.service_amount} 
                </td>
                <td>
                   <Link to={"/edit_service/"+service._id} className="btn btn-primary">Edit</Link>                
                </td>
                <td>
                <button onClick={(e) => { if (window.confirm('Are you sure to delete this item?')) (axios.get('/service/delete/'+service._id)).then(() => this.setState({ redirect: true })); }} className="btn btn-danger">Delete</button>
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
