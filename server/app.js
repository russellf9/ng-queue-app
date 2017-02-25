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

var servedCustomers = [];

function serveCustomer(id){
  customers = customers.filter(function(customer){
    if(customer.id == id){
      customer.status = 'served';
      servedCustomers.push(customer);
      return false;
    }else{
      return true;
    }
  })
}

function removeCustomer(targetCustomerId){
  customers = customers.filter(function(customer){
    return customer.id != targetCustomerId;
  })
}

function addCustomer(customer){
  customer.id = uuid.v4();
  customers.push(customer);
}

// ==== Handle requests ====
app.get('/api/customers', function(req,res){
  res.send(customers);
});
app.get('/api/customers/served', function(req,res){
  res.send(servedCustomers);
});
app.post('/api/customer/add', function(req,res){
  addCustomer(req.body);
  res.end('Customer was added!');
});
app.post('/api/customer/serve', function(req,res){
  serveCustomer(req.body.id);
  res.end('Customer was served!');
});
app.post('/api/customer/remove', function(req,res){
  removeCustomer(req.body.id);
  res.end('Customer was removed!');
});



module.exports = app;
