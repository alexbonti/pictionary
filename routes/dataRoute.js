var express = require('express');
var router = express.Router();
var Controllers = require("../controllers");

router.post('/save', function (req, res, next) {
    Controllers.dataController.save(req, res);
})

router.get('/getData', function (req, res, next) {
    Controllers.dataController.getData(req, res);
})

module.exports = router;