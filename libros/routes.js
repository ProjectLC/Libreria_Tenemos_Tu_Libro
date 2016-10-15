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

        app.put('/libros', function (req, res) {
             libro.update(req.body, res);
         });
 
         app.delete('/libros/:id', function (req, res) {
             libro.delete(req.params.id,res);
         });
    }
};