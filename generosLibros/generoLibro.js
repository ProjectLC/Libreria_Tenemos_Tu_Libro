module.exports = {

    configure: function (app) {
        app.get('/editoriales', function (req, res) {
            res.send('Listar Generos Libros: ' );
        });

        app.get('/editoriales/:id', function (req, res) {
            res.send('Consultar Genero Libro : ' + req.params.id);
        });
        
        app.post('/editoriales', function (req, res) {
            var editorial = req.body;
            res.send('Crear Editorial: ' + editorial.nit + ' ' + editorial.name);
        });

        app.put('/editoriales/:id', function (req, res) {
            var editorial = req.body;
            res.send('Actualizar Editorial: ' + autor);
        });

        app.delete('/editoriales/:id', function (req, res) {
            res.send('Eliminar Editorial: ');
        });

    }
};