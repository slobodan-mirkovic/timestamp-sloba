   var express = require('express')
    var app = express()
    
    app.get('/', function(req, res){
      var query = req.query
      res.send(query)
    })
    
  module.exports = app;