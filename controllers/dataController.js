const { Mongoose } = require('mongoose');
const Models = require('../models');

const save = (req, res) => {
    let drawingData = req.body;

    Models.Drawing.create(drawingData, (err, data) => {
        if (err) {
            res.json({ message: err.message, statusCode: 400 }).status(400)
        }
        else {
            res.json({ message: "Succesfully Created", data: data, statusCode: 201 }).status(201)
        }
    })
}

const getData = (req, res) => {
    let criteria = {};
    Models.Drawing.find(criteria, (err, data) => {
        res.json({ message: "Success", data: data, statusCode: 200 }).status(200)
    })
}


module.exports = {
    save,
    getData,
}