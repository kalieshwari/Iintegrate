/*const express = require('express');
const customerRoutes = express.Router();

// Require Business model in our routes module
//let Customer = require('./api/customer.model');
let Customer =require('../models/customer.model');
// Defined store route
customerRoutes.route('/add').post(function (req, res) {
  let customer = new Customer(req.body);
  customer.save()
    .then(customer => {
      res.status(200).json({'customer': 'customer in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
customerRoutes.route('/').get(function (req, res) {
    Customer.find(function(err, customer){
    if(err){
      console.log(err);
    }
    else {
      res.json(customer);
    }
  });
});

// Defined edit route
customerRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Customer.findById(id, function (err, customer){
      res.json(customer);
  });
});

//  Defined update route
customerRoutes.route('/update/:id').post(function (req, res) {
    Customer.findById(req.params.id, function(err, customer) {
    if (!customer)
      res.status(404).send("data is not found");
    else {
        customer.first_name = req.body.first_name;
        customer.last_name = req.body.last_name;
        customer.address_1 = req.body.address_1;
        customer.address_2 = req.body.address_2;
        customer.rstate=req.body.rstate;
        customer.zip=req.body.zip;
        customer.mobile_1=req.body.mobile_1;
        customer.mobile_2=req.body.mobile_2;
        customer.email=req.body.email;

        customer.save().then(customer => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
customerRoutes.route('/delete/:id').get(function (req, res) {
    Customer.findByIdAndRemove({_id: req.params.id}, function(err, customer){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = customerRoutes;
*/