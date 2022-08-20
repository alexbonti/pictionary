require('dotenv').config()
var createError = require('http-errors');
var express = require("express")
var cors = require("cors")
var path = require('path')
var app = express()
var dataRoute = require('./routes/dataRoute')
app.use(express.static(__dirname + '/public',{
extensions: ['html', 'htm']}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
var MongoConnect = require('./mongoConnect')
app.use('/data', dataRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.sendFile((__dirname+'/404.html'));
});

var port = process.env.port || 4000;

app.listen(port, () => {
  console.log("App listening to: " + port);
})