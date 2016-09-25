module.exports = {

    configure: function (app) {
        app.get('/generoLibro', function (req, res) {
            res.send('Listar Generos Libros: ' );
        });

        app.get('/generoLibro/:id', function (req, res) {
            res.send('Consultar Genero Libro : ' + req.params.id);
        });
        
        app.post('/generoLibro', function (req, res) {
            var genero = req.body;
            res.send('Crear Genero Libro: ' + genero.codigo + ' ' + genero.nombre);
        });

        app.put('/generoLibro/:id', function (req, res) {
            var genero = req.body;
            res.send('Actualizar Genero Libro: ' + genero);
        });

        app.delete('/generoLibro/:id', function (req, res) {
            res.send('Eliminar Genero Libro: '+ req.params.id);
        });

    }
};