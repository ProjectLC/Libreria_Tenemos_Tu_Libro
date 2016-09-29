var generoLibro = require('./model');

module.exports = {

    configure: function (app) {
        app.get('/generoLibro', function (req, res) {
            generoLibro.list(res);
        });

        app.get('/generoLibro/:id', function (req, res) {
            generoLibro.get(req.params.id, res);
        });
        
        app.post('/generoLibro', function (req, res) {
            generoLibro.create(req.body, res);
        });

        app.put('/generoLibro', function (req, res) {
            generoLibro.update(req.body, res);
        });

        app.delete('/generoLibro/:id', function (req, res) {
            generoLibro.delete(req.params.id, res);
        });

    }
};