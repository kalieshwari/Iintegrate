const express = require('express');
const service_masterRoutes = express.Router();

// Require Business model in our routes module
let Service = require('../models/servicetype.model');

// Defined store route
service_masterRoutes.route('/add').post(function (req, res) {
  let service_master = new Service(req.body);
  service_master.save()
    .then(service_master => {
      res.status(200).json({ 'service_master': 'service is added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

service_masterRoutes.route('/').get(function (req, res) {
      Service.find(function (err, services) {
      if (err) {
        console.log(err);
      }
      else {
        res.json(services);
      }
    });
});
//service_masterRoutes.post('/', function(req, res) {
//var regex = new RegExp(req.query["term"], 'i');

// Defined edit route
service_masterRoutes.route('/edit_service/:id').get(function (req, res) {
  let id = req.params.id;
  Service.findById(id, function (err, service_master) {
    res.json(service_master);
  });
});

//  Defined update route
service_masterRoutes.route('/update/:id').post(function (req, res) {
  Service.findById(req.params.id, function (err, service_master) {
    if (!service_master)
      res.status(404).send("data is not found");
    else {
      service_master.body_type = req.body.body_type;
      service_master.service_name = req.body.service_name;
      service_master.service_amount = req.body.service_amount;

      service_master.save().then(service_master => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
service_masterRoutes.route('/delete/:id').get(function (req, res) {
  Service.findByIdAndRemove({ _id: req.params.id }, function (err, service_master) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = service_masterRoutes;