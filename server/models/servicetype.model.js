const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const NumberFormat = require('react-number-format');
//var NumberFormat = require('react-number-format');
// Define collection and schema for Business
let Service = new Schema({
  body_type: {
    type: String
  },
  service_name: {
    type: String
  },
  service_amount: {
    type: Number
  }
}, {
    collection: 'service_master'
  });

module.exports = mongoose.model('Service', Service);