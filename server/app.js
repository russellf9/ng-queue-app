var express = require('express');
var uuid = require('node-uuid');
var bodyParser = require('body-parser');
var http = require('http');
var app = module.exports.app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../dist'));

var server = http.createServer(app);
var io = require('socket.io').listen(server);  //pass a http.Server instance


io.on('connection', (socket) => {

  console.log('user connected with socketId: ' + socket.id);

  socket.on('handshake', (data) => {
    console.log('data ', data);
    sendUpdate('initial');
  });


  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

});


server.listen(3000, function () {
  console.log('Example listening on port 3000!');
  setTimeout(sendTime, 3000);

});





// Send current time to all connected clients
function sendTime() {
  io.emit('time', {date: new Date()});
}

function sendUpdate(type) {
  io.emit('update', {
    type: type,
    customers: customers,
    products: products,
    servedCustomers: servedCustomers
  });
}

// Send current time every 1 secs
setInterval(sendTime, 1000);


var customers = [
  {
    name: 'William Shakespeare',
    product: {name: 'Grammatical advice'},
    id: uuid.v4(),
    joinedTime: new Date().toString()
  },
  {
    name: 'Sherlock Holmes',
    product: {name: 'Magnifying glass repair'},
    id: uuid.v4(),
    joinedTime: new Date().toString()
  },
  {
    name: 'Allan Turing',
    product: {name: 'Cryptography advice'},
    id: uuid.v4(),
    joinedTime: new Date().toString()
  }
];


var products = [
  {
    id: 1,
    name: 'GOF Design Patterns',
    price: '99'
  },
  {
    id: 2,
    name: 'Geiger Counter',
    price: '2999'
  },
  {
    id: 3,
    name: 'Moog Synthesiser',
    price: '275'
  }
];

var servedCustomers = [{
  name: 'Orson Wells',
  product: {name: 'Magnifying glass repair'},
  id: uuid.v4(),
  status: 'served',
  joinedTime: new Date().toString()
}];

function serveCustomer(id) {
  customers = customers.filter(function (customer) {
    if (customer.id == id) {
      customer.status = 'served';
      servedCustomers.push(customer);
      sendUpdate('CUSTOMER_SERVED');
      return false;
    } else {
      return true;
    }
  })
}

function removeCustomer(targetCustomerId) {
  customers = customers.filter(function (customer) {
    return customer.id !== targetCustomerId;
  });

  sendUpdate('CUSTOMER_DELETE');
}

function addCustomer(customer) {
  customer.id = uuid.v4();
  customer.joinedTime = new Date().toString();
  customers.push(customer);

  sendUpdate('CUSTOMER_ADD');
}

function updateCustomer(customer) {
  replaceCustomer(customer);
  sendUpdate('CUSTOMER_UPDATE');
}

function findCustomer(id) {
  customers.filter(function (customer) {
    return customer.id === id;
  })
}

function replaceCustomer(customer) {
  var index = customers.findIndex(function (c) {
    return c.id === customer.id;
  });
  customers[index] = customer;
}

// ==== Handle requests ====
app.get('/api/customers', function (req, res) {
  res.send(customers);
});


app.get('/api/customers/served', function (req, res) {
  res.send(servedCustomers);
});


app.get('/api/products', function (req, res) {
  res.send(products);
});


app.post('/api/customer/add', function (req, res) {
  addCustomer(req.body);
  res.end('Customer was added!');
});
app.put('/api/customer', function (req, res) {
  updateCustomer(req.body);
  res.end('Customer was updated!');
});
app.post('/api/customer/serve', function (req, res) {
  serveCustomer(req.body.id);
  res.end('Customer was served!');
});
app.post('/api/customer/remove', function (req, res) {
  removeCustomer(req.body.id);
  res.end('Customer was removed!');
});


module.exports = app;
