const express = require('express');
const station_masterRoutes = express.Router();

// Require Business model in our routes module
let Station = require('../models/servicestation.model');

// Defined store route
station_masterRoutes.route('/add').post(function (req, res) {
  let station_master = new Station(req.body);
  station_master.save()
    .then(station_master => {
      res.status(200).json({ 'station_master': 'station is added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
station_masterRoutes.route('/').get(function (req, res) {

  Station.find(function (err, stations) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(stations);
    }
  });
});
// Defined edit route
station_masterRoutes.route('/edit_servicestation/:id').get(function (req, res) {
  let id = req.params.id;
  Station.findById(id, function (err, station_master) {
    res.json(station_master);
  });
});

//  Defined update route
station_masterRoutes.route('/update_servicestation/:id').post(function (req, res) {
  Station.findById(req.params.id, function (err, station_master) {
    if (!station_master)
      res.status(404).send("data is not found");
    else {
      station_master.unit_name = req.body.unit_name;
      station_master.address1 = req.body.address1;
      station_master.address2 = req.body.address2;
      station_master.state = req.body.state;
      station_master.zip = req.body.zip;
      station_master.contact_number = req.body.contact_number;
      station_master.email_id = req.body.email_id;
      station_master.remarks = req.body.remarks;

      station_master.save().then(station_master => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
station_masterRoutes.route('/delete/:id').get(function (req, res) {
  Station.findByIdAndRemove({ _id: req.params.id }, function (err, station_master) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = station_masterRoutes;