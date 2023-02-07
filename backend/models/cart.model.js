const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let cartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    weight:{
      type:Number,
      required:true
    },
    quantity: {
        type: Number,
        required: true
    },
    total: {
      type: Number,
      required: true
    },
    id:{
      type:String,
      required: true
    },
  updated_date: {
    type: Date,
    default: Date.now
  }
}, {
    collection: 'cart'
  })
module.exports = mongoose.model('cart', cartSchema)