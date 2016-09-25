<<<<<<< HEAD:autores/routes.js
module.exports = {

    configure: function (app) {
        app.get('/autores', function (req, res) {
            res.send('Listar Autores: ' );
        });

        app.get('/autores/:id', function (req, res) {
            res.send('Consultar Autor: ' + req.params.id);
        });
        
        app.post('/autores', function (req, res) {
            var autor = req.body;
            res.send('Crear Autor: ' + autor.nit + ' ' + autor.name);
        });

        app.put('/autores/:id', function (req, res) {
            var autor = req.body;
            res.send('Actualizar Autor: ' + autor);
        });

        app.delete('/autores/:id', function (req, res) {
            res.send('Eliminar Autor: ');
        });

    }
};
=======
module.exports = {

    configure: function (app) {
        app.get('/autores', function (req, res) {
            res.send('Listar Autores: ' );
        });

        app.get('/autores/:id', function (req, res) {
            res.send('Consultar Autor: ' + req.params.id);
        });
        
        app.post('/autores', function (req, res) {
            var autor = req.body;
            res.send('Crear Autor: ' + autor.nit + ' ' + autor.name);
        });

        app.put('/autores', function (req, res) {
            var autor = req.body;
            res.send('Actualizar Autor: ' + autor);
        });

        app.delete('/autores/:id', function (req, res) {
            res.send('Eliminar Autor: '+ req.params.id);
        });

    }
};
>>>>>>> f7b46f7ad2303756a6a0a441c43c49d8a408e800:autores/autores.js
