const express = require('express')
const router = express.Router();

router
    .route('/')
    .get(getAllTours)   
    .post(postTour);

router
    .route('/:id')
    .get(getTour)
    .patch(patchTour)
    .delete(deleteTour);

app.use('/api/v1/tours', tourRouter);
