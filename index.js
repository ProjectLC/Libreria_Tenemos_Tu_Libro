var express = require('express');
var bodyparser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

var autor = require('./autores/routes');
var editorial = require('./editoriales/routes');
var generolibro = require('./generosLibros/routes');
var libro = require('./libros/routes');
var prestamo = require('./prestamos/routes');
var persona = require('./personas/routes');

var oauthRoutes = require('./oauth2/routes');
var clientRoutes = require('./client/routes');

var connection = require('./mysql/connection');
var app = express();

app.use(bodyparser.urlencoded({extend: true}));
app.use(bodyparser.json());
app.use(passport.initialize());

connection.init();

autor.configure(app);
editorial.configure(app);
generolibro.configure(app);
libro.configure(app);
prestamo.configure(app);
persona.configure(app);
clientRoutes.configure(app);
oauthRoutes.configure(app);

var server = app.listen(3000, function(){
    console.log('Server listening on port: ' + server.address().port)
});

