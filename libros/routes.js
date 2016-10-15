var libro = require('./model');

module.exports = {
    configure: function (app) {
        app.get('/libros', function (req, res) {
            libro.list(res);
        });

        app.get('/libros/:id', function (req, res) {
            libro.get(req.params.id, res);
        });

        app.post('/libros', function (req, res) {
            libro.create(req.body, res);
        });

        /* app.put('/libros/:id', function (req, res) {
             var libro = req.body;
             res.send('Actualizar Libro:' + libro);
         });
 
         app.delete('/libros/:id', function (req, res) {
             res.send('Eliminar Libro:' + req.params.codigo);
         });*/
    }
};