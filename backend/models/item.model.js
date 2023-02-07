const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let itemSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
}, {
    collection: 'item'
  })
module.exports = mongoose.model('item', itemSchema)