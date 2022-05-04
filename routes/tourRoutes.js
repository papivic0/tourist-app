const express = require('express')
const router = express.Router();
const tourController = require('../controllers/tourController');


router
    .route('/')
    .get(tourController.getAllTours)   
    .post(tourController.postTour);

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.patchTour)
    .delete(tourController.deleteTour);

module.exports = router