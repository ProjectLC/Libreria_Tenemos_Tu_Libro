var connection = require('../mysql/connection')

function Libros() {
}

(function () {
    this.list = function (res) {
        connection.acquire(function (err, con) {
            con.query('select l.CodigoLibro,l.NombreLibro,a.NombreAutor,l.FechaPublicacion,l.NumeroTomo,l.TiempoPrestamo, g.NombreGenero, e.NombreEditorial FROM libros l,editoriales e,generoslibros g,autores a,autoreslibros o WHERE l.CodigoLibro = CodigoLibro AND e.CodigoEditorial = l.EditorialLibro AND g.CodigoGenero = l.GeneroLibro AND o.CodigoLibroAL = l.CodigoLibro AND o.CodigoAutorAL = a.CodigoAutor', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.get = function(libroId, res){
        connection.acquire(function (err, con){
            con.query('select l.CodigoLibro,l.NombreLibro,a.NombreAutor,l.FechaPublicacion,l.NumeroTomo,l.TiempoPrestamo, g.NombreGenero, e.NombreEditorial FROM libros l,editoriales e,generoslibros g,autores a,autoreslibros o WHERE e.CodigoEditorial = l.EditorialLibro AND g.CodigoGenero = l.GeneroLibro AND o.CodigoLibroAL = l.CodigoLibro AND o.CodigoAutorAL = a.CodigoAutor AND l.CodigoLibro = ?', libroId, function(err, result){
                con.release();
                res.send(result);
            });
        });
    };

    this.create = function (libro, res) {
        var listaAutores = libro.listaAutores;
        delete libro.listaAutores;
        connection.acquire(function (err, con) {
            con.beginTransaction(function (err) {
                if (err) { throw err; }
                con.query('INSERT INTO libros SET ?', libro, function (err, result) {
                    if (err) {
                        con.rollback(function () {
                            res.send({ status: 1, message: 'Error al crear el libro', error: err });
                            con.release();
                        });
                    } else {
                        var generateId = result.insertId;
                        var autorId = 1;
                        for (var autor in listaAutores) {
                            autorObj.CodigoLibro = generateId;
                            autorObj.ID = autorId++;
                        }
                        con.query('INSERT INTO autoreslibros SET ?', listaAutores, function (err, result) {
                            if (err) {
                                con.rollback(function () {
                                    con.release();
                                    res.send({ status: 1, message: 'Error al crear el libro', error: err });
                                });
                            } else {
                                con.commit(function (err) {
                                    if (err) {
                                        con.rollback(function(){
                                            res.send({ status: 1, message: 'Error al crear el libro', error: err});
                                            con.release();
                                        });
                                    }else{
                                        con.release();
                                        res.send({ status: 0, message: 'Libro creado Satisfactoriamente'});
                                    }
                                });
                            }
                        });
                    }
                });
            });
        });
    };

    this.update = function(libro, res){
        connection.acquire(function(err, con){
            con.query('UPDATE libros SET ? WHERE CodigoLibro = ?', [libro, libro.CodigoLibro], function(err, result){
                con.release();
                if(err){
                    res.send({status: 1,message: 'Error al actualizar el libro', error: err});
                }else{
                    res.send({status: 0, message: 'Libro actualizado correctamente'});
                }
            });
        });
    };

    this.delete = function(codigo, res){
        connection.acquire(function(err, con){
            con.query('DELETE FROM libros WHERE CodigoLibro = ?', [codigo], function(err, result){
                              con.release();
                if(err){
                    res.send({status: 1,message: 'Error al eliminar el libro', error: err});
                }else{
                    res.send({status: 0, message: 'Libro eliminado correctamente'});
                }  
            });
        });
    };
    
}).call(Libros.prototype);

module.exports = new Libros();