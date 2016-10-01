var editorial = require('./model');

module.exports = {
    configure: function (app) {
        app.get('/editoriales', function (req, res) {
            autor.list(res);
        });

        app.get('/editoriales/:id', function (req, res) {
            autor.get(req.params.id, res);
        });
        
        app.post('/editoriales', function (req, res) {
            autor.create(req.body, res);
        });

        app.put('/editoriales/', function (req, res) {            
            autor.update(req.body, res);
        });

        app.delete('/editoriales/:id', function (req, res) {
            autor.delete(req.params.id, res);
        }); 
    }
};