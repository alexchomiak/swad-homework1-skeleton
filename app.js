var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');


const app = express();
if (process.env.NODE_ENV != "test") {
    /* log http requests when not testing */
  app.use(logger("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./static")));
app.use("/", indexRouter);

module.exports = app;