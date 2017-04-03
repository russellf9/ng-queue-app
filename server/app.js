/* global console */

let express = require('express'),
  uuid = require('node-uuid'),
  console = require('console'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  http = require('http');

const app = module.exports.app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use('/', express.static(`${__dirname}/../dist`));
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!')
});

const server = http.createServer(app);


// ==== SOCKET IO ====

const io = require('socket.io').listen(server);  //pass a http.Server instance

io.on('connection', (socket) => {
  socket.on('handshake', () => {
    sendUpdate('initial');
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


server.listen(3000, () => {
  console.log('App listening on port 3000!');
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
    customersServed: customersServed
  });
}

// Send current time every 1 secs
setInterval(sendTime, 1000);


// ==== CREATE ORIGINAL DATA ====

let products = [
  {
    id: 1,
    name: 'Grammatical advice',
    price: 100
  },
  {
    id: 2,
    name: 'Cryptography advice',
    price: 1000
  },
  {
    id: 3,
    name: 'Magnifying glass repair',
    price: 50
  },

  {
    id: 4,
    name: 'GOF Design Patterns',
    price: '99'
  },
  {
    id: 5,
    name: 'Geiger Counter',
    price: '2999'
  },
  {
    id: 6,
    name: 'Moog Synthesiser',
    price: '275'
  }
];

let customers = [
  {
    name: 'William Shakespeare',
    product: products[0],
    id: uuid.v4(),
    joinedTime: new Date().toString()
  },
  {
    name: 'Sherlock Holmes',
    product: products[1],
    id: uuid.v4(),
    joinedTime: new Date().toString()
  },
  {
    name: 'Allan Turing',
    product: products[2],
    id: uuid.v4(),
    joinedTime: new Date().toString()
  }
];

var customersServed = [{
  name: 'Orson Wells',
  product: products[1],
  id: uuid.v4(),
  status: 'served',
  joinedTime: new Date().toString(),
  servedTime: new Date().toString()
}];

// ==== CRUD ACTIONS ====

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

function serveCustomer(id) {
  let customer = findCustomer(id);
  customer.status = 'served';
  customer.servedTime = new Date().toString();
  customersServed.push(customer);
  removeCustomerFn(id);
  sendUpdate('CUSTOMER_SERVED');
}


function pushBackCustomer(id) {
  let customer = findCustomer(id);
  let index = getCustomerIndex(customer);
  removeCustomerFn(id);
  insertCustomerInNextPosition(customer, index);
  sendUpdate('CUSTOMER_PUSH_BACK');
}

function removeCustomer(id) {
  removeCustomerFn(id);
  sendUpdate('CUSTOMER_DELETE');
}


// ==== UTILITY FUNCTIONS ====

function findCustomer(id) {
  return customers
    .find(x => x.id === id);
}

function replaceCustomer(customer) {
  var index = customers
    .findIndex(x => x.id === customer.id);
  customers[index] = customer;
}

function removeCustomerFn(id) {
  customers = customers
    .filter(x => x.id !== id);
}

function insertCustomerInNextPosition(customer, index) {
  insertItem(customers, index +1, customer);
}

function getCustomerIndex(customer) {
  return customers.indexOf(customer);
}

function insertItem(array, index, item) {
  array.splice(index, 0, item);
}
// ==== HANDLE REQUESTS ====

app.get('/api/customers', (req, res) => {
  res.send(customers);
});

app.get('/api/customers/served', (req, res) => {
  res.send(customersServed);
});

app.get('/api/products', (req, res) => {
  res.send(products);
});


// ==== CUSTOMER ====

app.post('/api/customer', (req, res) => {
  addCustomer(req.body);
  res.end('Customer was added!');
});

app.put('/api/customer', (req, res) => {
  updateCustomer(req.body);
  res.end('Customer was updated!');
});

app.put('/api/customer/serve', (req, res) => {
  serveCustomer(req.body.id);
  res.end('Customer was served!');
});

app.put('/api/customer/pushBack', (req, res) => {
  pushBackCustomer(req.body.id);
  res.end('Customer was pushed back in the Queue!');
});

app.delete('/api/customer', (req, res) => {
  removeCustomer(req.query.id);
  res.end('Customer was removed!');
});


module.exports = app;
