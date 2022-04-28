const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
app.use((req, res, next) =>{
    console.log("This is the Middleware");
    next(); 
});

app.use((req, res, next) =>{
    req.requestTime = new Date().toISOString();
    next();
})

//Get all tours
const getAllTours = (req, res) =>{
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: tours.length,
        data: {
            tours
        }
    });
}
const getTour = (req, res) =>{
    
    const id = req.params.id * 1;
    if(id > tours.length){
        return res.status(404).json({
            status: 'fail',
            message: 'invalidID'
        })
    }
    const tour = tours.find(el => el.id === id);
    
    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    })
}
const postTour = (req, res) =>{
    //console.log(req.body);
    const newId = tours[tours.length -1].id + 1;
    const newTour = Object.assign({id: newId}, req.body);

    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours), err =>{
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        });
    })
}
const patchTour = (req, res) =>{
    if(req.params.id * 1> tours.length){
        return res.status(404).json({
            status: 'fail',
            message: 'invalidID'
        })
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<updated tour>'
        }
    })
}
const deleteTour = (req, res) =>{
    if(req.params.id > tours.length){
        return res.status(404).json({
            status: 'fail',
            message: 'invalidID'
        });
    };
    res.status(204).json({
        status: 'success',
        data: null
    })
}
const getAllUsers = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'This route is not defined'
    })
}
const getUser = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'This route is not defined'
    })
}
const createUser = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'This route is not defined'
    })
}
const updateUser = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'This route is not defined'
    })
}
const deleteUser = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'This route is not defined'
    })
}










const port = 3000;
app.listen(port, () =>{
    console.log(`App is running on port ${port}...`)
});