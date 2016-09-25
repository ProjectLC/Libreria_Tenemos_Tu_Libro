module.exports = {

    configure: function (app) {
        app.get('/editoriales', function (req, res) {
            res.send('Listar Editoriales: ' );
        });

        app.get('/editoriales/:id', function (req, res) {
            res.send('Consultar Editorial : ' + req.params.id);
        });
        
        app.post('/editoriales', function (req, res) {
            var editorial = req.body;
            res.send('Crear Editorial: ' + editorial.nit + ' ' + editorial.name);
        });

        app.put('/editoriales', function (req, res) {
            var editorial = req.body;
            res.send('Actualizar Editorial: ' + editorial);
        });

        app.delete('/editoriales/:id', function (req, res) {
            res.send('Eliminar Editorial: '+ req.params.id);
        });

    }
};
