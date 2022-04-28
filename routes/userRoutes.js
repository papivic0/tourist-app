const express = require('express')

const router = express.Router();

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);
    
router
    .route('/api/v1/users/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser);

app.use('/api/v1/users', userRouter);