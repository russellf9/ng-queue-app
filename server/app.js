var express = require('express');
var uuid =  require('node-uuid');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/',express.static(__dirname+'/../dist'));


app.listen(3000, function () {
  console.log('Example listening on port 3000!');
});


var customers = [
  {name: 'William Shakespeare', product: {name:'Grammatical advice'}, id: uuid.v4(), joinedTime: new Date().toString()},
  {name: 'Sherlock Holmes', product: {name:'Magnifying glass repair'}, id: uuid.v4(), joinedTime: new Date().toString()},
  {name: 'Allan Turing', product: {name:'Cryptography advice'}, id: uuid.v4(), joinedTime: new Date().toString()}
];

var servedCustomers = [

];

// ==== Handle requests ====


app.get('/api/customers', function(req,res){
  res.send(customers);
});



module.exports = app;
