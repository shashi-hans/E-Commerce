let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
  
// item Model
let itemSchema = require('../models/item.model');

// Add item
router.route('/add').post((req, res, next) => {
  itemSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});
// READ items
router.route('/').get((req, res, next) => {
  itemSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get Single item
router.route('/edit/:id').get((req, res, next) => {
  itemSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update item
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
// Delete item
router.route('/delete/:id').delete((req, res, next) => {
  itemSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        success: true
      })
    }
  })
})
module.exports = router;