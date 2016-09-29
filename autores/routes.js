var autor = require('./model');

module.exports = {
    configure: function (app) {
        app.get('/autores', function (req, res) {
            autor.list(res);
        });

        app.get('/autores/:id', function (req, res) {
            autor.get(req.params.id, res);
        });
        
        app.post('/autores', function (req, res) {
            autor.create(req.body, res);
        });

        app.put('/autores/', function (req, res) {            
            autor.update(req.body, res);
        });

        app.delete('/autores/:id', function (req, res) {
            autor.delete(req.params.id, res);
        }); 
    }
};
