const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController');
router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);
    
router
    .route('/api/v1/users/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports =  router;