let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

  // Customer Model
let customerSchema = require('../models/customer.model');

// READ customer
router.route('/').get((req, res, next) => {
    customerSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

//Create account
router.route('/create').post((req, res, next) => {
    customerSchema.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });

  // Update profile
router.route('/update/:id').put((req, res, next) => {
    itemSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        console.log(error)
        return next(error);
      } else {
        res.json(data)
        console.log('item updated successfully !')
      }
    })
  })
  module.exports = router;