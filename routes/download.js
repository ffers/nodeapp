var express = require('express');
var hello = express.Router();
var fs = require('fs');

/* GET home page. */
hello.get('/', function(req, res, next) {
  /*if (req.url == '/download') {/* */ 
    var file = fs.ReadStream('./routes/siluet.jpg');
    sendFile(file, res) 
 /* } else {*/
   /* res.render('index', { title: 'I must Download, but i need help' });
*/   
});

function sendFile(file, res) {
  file.pipe(res);
};

module.exports = hello;
