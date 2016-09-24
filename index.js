var express = require('express');
var bodyparser = require('body-parser');

var product = require('./routes/product');

var customer = require('./routes/clients');

var app = express();

app.use(bodyparser.urlencoded({extend: true}));
app.use(bodyparser.json());

product.configure(app);
customer.configure(app);

var server = app.listen(3000, function(){
    console.log('Server listening on port: ' + server.address().port)
});

