module.export = {
    configure: function(app){
        app.get('/libros',function(req, res){
            res.send('Listar Libros: ');
        });

        app.get('/libros/:codigo', function(req, res){
            res.send('Consultar Libro: ' + req.paran.codigo);
        });

        app.get('/generoLibros', function(req, res){
            res.send('Lista de Genero Libros')
        });

        app.get('/autores', function(req, res){
            res.send('Listado de autores')
        });

        app.get('/editoriales', function(req, res){
            res.send('Listado de editoriales')
        });

        app.post('/libros', function(req, res){
            var libro = req.body;
            res.send('Crear Libro'+ libro.codigo + ' '+ libor.nombre + ' '+ libro.autor +' '+ libro.editorial +' '+ libro.genero);
        });

        app.put('/libros', function(req, res){
            var libro = req.body;
            res.send('Actualiza Libro:'+ libro);
        });

        app.delete('/libros/:codigo', function(req, res){
            res.send('Eliminar Libro:'+ req.paran.codigo);
        });
        }
    }