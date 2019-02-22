const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const NumberFormat = require('react-number-format');
//var NumberFormat = require('react-number-format');
// Define collection and schema for Business
let Station = new Schema({
  unit_name: {
    type: String
  },
  address1: {
    type: String
  },
  address2: {
    type: String
  },
  state: {
    type: String
  },
  zip: {
    type: Number
  },
  contact_number: {
    type: Number
  },
  email_id: {
    type: String
  },
  remarks: {
    type: String
  }

}, {
    collection: 'station_master'
  });

module.exports = mongoose.model('Station', Station);