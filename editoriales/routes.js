var editorial = require('./model');

module.exports = {
    configure: function (app) {
        app.get('/editoriales', function (req, res) {
            editorial.list(res);
        });

        app.get('/editoriales/:id', function (req, res) {
            editorial.get(req.params.id, res);
        });
        
        app.post('/editoriales', function (req, res) {
            editorial.create(req.body, res);
        });

        app.put('/editoriales', function (req, res) {            
            editorial.update(req.body, res);
        });

        app.delete('/editoriales/:id', function (req, res) {
            editorial.delete(req.params.id, res);
        }); 
    }
};