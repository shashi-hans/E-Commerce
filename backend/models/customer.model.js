const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let customerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
  email: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
}, {
    collection: 'customer'
  })
module.exports = mongoose.model('customer', customerSchema)