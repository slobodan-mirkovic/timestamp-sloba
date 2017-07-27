
var express = require('express');

var app = express();





/** 2) A first working Express Server */
app.get('/hello',function(req,res){
  res.send('Hello Express');
});


/** 3) Serve an HTML file */
app.get('/', function(req,res){
  res.sendFile(process.cwd() + '/views/index.html');
});

/** 4) Serve static assets  */
app.use(express.static(process.cwd() + '/public'));



/** 9)  Get input from client - Route parameters */

app.get('/:word', function(req,res){
  
  var userIn = req.params.word;
  
  var d = Date.parse(userIn);
  var valid = (new Date(parseInt(userIn)*1000).getTime()) > 0;
  
  if(!isNaN(d)){
    var date = new Date(d)
    var o = {
      unix: date.getTime()/1000, 
      natural: date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  }
  else if(valid) {
    var date = new Date(parseInt(userIn)*1000)
     var o = {
      unix: date.getTime()/1000, 
      natural: date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  }
  else {
    var o = {
        unix: null, 
        natural: null
    }
  
  }
  
    // res.writeHead(200, { 'Content-Type': 'application/json' });
     res.json(o);

});






// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
