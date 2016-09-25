module.exports = {

    configure: function (app) {
        app.get('/personas', function (req, res) {
            res.send('Listar Personas: ' );
        });

        app.get('/personas/:id', function (req, res) {
            res.send('Consultar Persona : ' + req.params.id);
        });
        
        app.post('/personas', function (req, res) {
            var persona = req.body;
            res.send('Crear Persona: ' + persona.id + ' ' + persona.nombre +' '+ persona.primer_apellido+ ' '+ persona.sgundo_apellido + ' '+ person.telefono 
                                        +' '+ persona.celular +' '+ persona.direccion +' '+ persona.email +' '+ persona.fecha_nacimiento +' '+ persona.usuario +' '+ persona.contraseña);
        });

        app.put('/personas/:id', function (req, res) {
            var persona = req.body;
            res.send('Actualizar Persona: ' + persona);
        });

        app.delete('/personas/:id', function (req, res) {
            res.send('Eliminar Persona: '+req.params.id);
        });

    }
};