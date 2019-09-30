var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');
var fs = require("fs");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var files = fs.readdirSync('./routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

for(let file of files) {
    var route_name = file.toString().replace(".js","");
    var routerContents = require('./routes/'+route_name);
    app.use("/"+route_name, routerContents);
    console.log('here');
}

module.exports = app;
