module.exports = {

    configure: function (app) {
        app.get('/personas', function (req, res) {
            res.send('Listar Personas: ' );
        });

        app.get('/personas/:id', function (req, res) {
            res.send('Consultar Persona : ' + req.params.id);
        });
        
        app.post('/personas', function (req, res) {
            var editorial = req.body;
            res.send('Crear Persona: ' + editorial.nit + ' ' + editorial.name);
        });

        app.put('/personas/:id', function (req, res) {
            var editorial = req.body;
            res.send('Actualizar Persona: ' + autor);
        });

        app.delete('/personas/:id', function (req, res) {
            res.send('Eliminar Persona: ');
        });

    }
};