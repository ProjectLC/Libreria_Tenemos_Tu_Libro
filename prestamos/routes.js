var prestamo = require('./model');

module.exports = {

    configure: function (app) {
        app.get('/prestamos', function (req, res) {
            prestamo.list(res);
        });

        app.get('/prestamos/:id', function (req, res) {
            prestamo.get(req.params.id, res);
        });
        
        app.post('/prestamos/:lectorId/', function (req, res) {
            prestamo.create(req.body, res);
        });

        app.put('/prestamos', function (req, res) {
            prestamo.update(req.body, res);
        });

        app.delete('/prestamos/:id', function (req, res) {
            prestamo.delete(req.params.id, res);
        });

        app.put('/prestamos/:id', function (req, res) {
            var renovacion = req.body;
            res.send('Renovacion Prestamo: ' + renovacion);
        });

        app.put('/prestamos/:id', function (req, res) {
            var prestamo = req.body;
            res.send('Devolver Libro: ' + prestamo);
        });

        

    }
};