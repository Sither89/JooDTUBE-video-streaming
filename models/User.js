const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  Username: String,
  Email: String,
  password: String,
  Role: String
});

module.exports = mongoose.model('customers', customerSchema)
