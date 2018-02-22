 import React from 'react';
 import ReactDOMServer from 'react-dom/server';
 import App from './react-src/src/App.js';
 import Send from './react-src/src/Send.js';

 import express from 'express';
 import path from 'path';
 import request from 'request';
 import favicon from 'serve-favicon';
 import logger from 'morgan';
 import cookieParser from 'cookie-parser';
 import bodyParser from 'body-parser';
 var algo = require('./algo');


// var express = require('express');
// var path = require('path');
//  var request = require('request');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var algo = require('./algo');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const port = process.env.PORT || 3000;


app.post("/send",function(req,res){
	var response=res;
	console.log("first");
	var items;
	var url = 'http://terriblytinytales.com/test.txt';

	request.get(url, function(err,res,body){
		console.log("second");
		//console.log(body);

	 items=algo.wordCount(body);
   items = items.slice(0,req.body.count);
	 console.log(items[0][0]);
	 response.send(ReactDOMServer.renderToString(<Send  items={items} count={req.body.count}/>));
	 //response.render('result',{items:items, count:req.body.count});
	});
});


app.get('/',function(req,res){
	res.send(ReactDOMServer.renderToString(<App />));

	//res.render('index');
});
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
app.listen(port,function(){
console.log("server is running");
});

module.exports = app;
