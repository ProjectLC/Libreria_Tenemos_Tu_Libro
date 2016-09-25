module.exports = {

    configure: function (app) {
        app.get('/generolibro', function (req, res) {
            res.send('Listar Generos Libros: ' );
        });

        app.get('/generolibro/:id', function (req, res) {
            res.send('Consultar Genero Libro : ' + req.params.id);
        });
        
        app.post('/generolibro', function (req, res) {
            var editorial = req.body;
            res.send('Crear Genero Libro: ' + editorial.nit + ' ' + editorial.name);
        });

        app.put('/generolibros/:id', function (req, res) {
            var editorial = req.body;
            res.send('Actualizar Genero Libro: ' + autor);
        });

        app.delete('/generolibro/:id', function (req, res) {
            res.send('Eliminar Genero Libro: ');
        });

    }
};