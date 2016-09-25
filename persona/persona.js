module.exports = {

    configure: function (app) {
        app.get('/persona', function (req, res) {
            res.send('Listar Personas: ' );
        });

        app.get('/persona/:id', function (req, res) {
            res.send('Consultar Persona : ' + req.params.id);
        });
        
        app.post('/persona', function (req, res) {
            var persona = req.body;
            res.send('Crear Persona: ' + persona.cedula + ' ' + persona.nombre +' '+ persona.primer_apellido+ ' '+ persona.sgundo_apellido + ' '+ person.telefono 
                                        +' '+ persona.celular +' '+ persona.email +' '+ persona.fecha_nacimiento +' '+ persona.edad +' '+ persona.genero +' '+ persona.direccion +' ' + persona.usuario +' '+ persona.contraseña);
        });

        app.put('/persona', function (req, res) {
            var persona = req.body;
            res.send('Actualizar Persona: ' + persona);
        });

        app.delete('/persona/:id', function (req, res) {
            res.send('Eliminar Persona: '+req.params.id);
        });

    }
};