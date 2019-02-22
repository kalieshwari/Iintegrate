import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
//import Pagei from '../../components/Page';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class IndexStation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { station_master: [] ,
      redirect: false 
    };
  }
  componentDidMount() {
    axios.get('/station')    
    .then(res => {
      const station_master = res.data;
      this.setState({ station_master });
    })
  }
     
  render() {
    
     const { redirect } = this.state;
           if (redirect) {
                return <Redirect to="/service-station-list" />;                
            }

    return (
      <Page title="Service Station" breadcrumbs={[{name:'List',active: true }]}>
            <Row>
              <Col xl={12} lg={12} md={12}>
              <input className="search form-control" type="text" placeholder="Search.."/>
              </Col>
            </Row>
            <Row>
                <Col xl={12} lg={12} md={12}>
                <Card>
                    <CardHeader> Service Station List</CardHeader>
                    <CardBody>
                    <Table id="servicestationTbl">
                <thead>
                  <tr>
                    <th scope="col">Unit Name</th>
                    <th scope="col">Address 1</th>
                    <th scope="col"> Address2</th>
                    <th scope="col"> State</th>
                    <th scope="col"> Zip</th>
                    <th scope="col"> Contact Number</th>
                    <th scope="col"> Email Id</th>
                    <th scope="col"> Remarks</th>
                    <th scope="col" colSpan="2">Action</th>
                   <th>
                      <Link to={"/create_servicestation/"} className="btn btn-primary">ADD</Link>                
                  </th> 
                  </tr>
                </thead>
                <tbody id="IndexServicestationTable">
              { this.state.station_master.map(station =>
              <tr>
                <td>
                {station.unit_name} 
                </td>
                <td>
                {station.address1} 
                </td>
                <td>
                {station.address2} 
                </td>
                <td>
                {station.state} 
                </td>
                <td>
                {station.zip} 
                </td>
                <td>
                {station.contact_number} 
                </td>
                <td>
                {station.email_id} 
                </td>
                <td>
                {station.remarks} 
                </td>
               
                <td>
                   <Link to={"/edit_servicestation/"+station._id} className="btn btn-primary">Edit</Link>                
                </td>
                <td>
                <button onClick={(e) => { if (window.confirm('Are you sure to delete this item?')) (axios.get('/station/delete/'+station._id)).then(() => this.setState({ redirect: true })); }} className="btn btn-danger">Delete</button>
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