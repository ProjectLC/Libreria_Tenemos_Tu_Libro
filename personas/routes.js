var persona = require('/model');

module.exports = {
    configure: function (app) {
        app.get('/personas', function (req, res) {
            persona.list(res);
        });

        app.get('/personas/:id', function (req, res) {
            persona.get(req.params.id, res);
        });

        app.post('/personas', function (req, res) {
            persona.create(req.body, res);
        });

        app.put('/personas', function (req, res) {
            persona.update(req.body, res);
        });

        app.delete('/personas/:id', function (req, res) {
            persona.delete(req.params.id, res);
        });

    }
};