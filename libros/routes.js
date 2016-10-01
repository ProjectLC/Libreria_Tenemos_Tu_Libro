var libro = require('./model');

module.export = {
    
    configure: function(app){
        app.get('/libros',function(req, res){
            res.send('Listar Libros: ');
        });

        app.get('/libros/:id', function(req, res){
            res.send('Consultar Libro: ' + req.paran.codigo);
        });

        app.post('/libros', function(req, res){
            var libro = req.body;
            res.send('Crear Libro'+ libro.codigo + ' '+ libro.nombre + ' '+ libro.autor +' '+ libro.editorial +' '+ libro.genero +
            ' ' + libro.fechaPublicacion + ' ' + libro.numeroTomo + ' ' + libro.tiempoPrestamo);
        });

        app.put('/libros/:id', function(req, res){
            var libro = req.body;
            res.send('Actualizar Libro:'+ libro);
        });

        app.delete('/libros/:id', function(req, res){
            res.send('Eliminar Libro:'+ req.params.codigo);
        });
     }
};