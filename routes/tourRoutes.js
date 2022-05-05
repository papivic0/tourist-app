const express = require('express')
const router = express.Router();
const tourController = require('../controllers/tourController');

router.param('id', tourController.checkID); 


router
    .route('/')
    .get(tourController.getAllTours)   
    .post(tourController.checkBody, tourController.postTour);

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.patchTour)
    .delete(tourController.deleteTour);

module.exports = router