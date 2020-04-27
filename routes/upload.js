var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

let fileStream;

router.get('/', function(req, res, next) {
  let fileId = req.headers['x-file-id'];
  let filePath = path.join(__dirname, 'files') ; 
  fileStream = fs.createWriteStream(filePath, {
          flags: 'w'
        });
  req.pipe(fileStream);
});

module.exports = router;

