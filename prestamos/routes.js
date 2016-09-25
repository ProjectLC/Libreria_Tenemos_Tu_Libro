module.exports = {

    configure: function (app) {
        app.get('/prestamos', function (req, res) {
            res.send('Listar Pestamos: ' );
        });

        app.get('/prestamos/:id', function (req, res) {
            res.send('Consultar Pestamo : ' + req.params.id);
        });
        
        app.post('/prestamos/:lectorId/', function (req, res) {
            var prestamo = req.body;
            res.send('Crear Pestamo: ' + prestamo.id + ' ' + prestamo.lector +' '+ prestamo.libro+ ' '+ prestamo.fechaPrestamo + ' '+ prestamo.fechaDevolucion + ' ' + prestamo.numRenovaciones);
        });

        app.put('/prestamos/:id', function (req, res) {
            var prestamo = req.body;
            res.send('Actualizar Pestamo: ' + prestamo);
        });

        app.put('/prestamos/:id', function (req, res) {
            var renovacion = req.body;
            res.send('Renovacion Prestamo: ' + renovacion);
        });

        app.put('/prestamos/:id', function (req, res) {
            var prestamo = req.body;
            res.send('Devolver Libro: ' + prestamo);
        });

        app.delete('/prestamos/:id', function (req, res) {
            res.send('Eliminar Pestamo: '+req.params.id);
        });

    }
};