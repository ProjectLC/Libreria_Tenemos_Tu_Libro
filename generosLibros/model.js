var connection = require('../mysql/connection');

function GeneroLibros(){    
}

(function(){
    this.list = function (res){
        connection.acquire(function (err, con){
            con.query('SELECT CodigoGenero,NombreGenero FROM GeneroLibros', function (err, result){
                con.release();
                res.send(result);
            });
        });
    };

    this.get = function(genlibCod, res){
        connection.acquire(function (err, con){
            con.query('SELECT CodigoGenero,NombreGenero FROM GeneroLibros WHERE CodigoGenero = ?', genlibCod, function (err, result){
                con.release();
                res.send(result);
            });
        });
    };

    this.create = function (generoLibro, res){
        connection.acquire(function (err, con){
            con.beginTransaction(function (err){
                if (err) {throw err;}
                con.query('INSERT INTO GeneroLibros SET ?', generoLibro, function (err,result){
                    if(err){
                        con.rollback(function (){
                            res.send({ status: 1, message: 'Error al crear el genero de libro', error: err});
                            con.release();
                        });                    
                    }else{
                        con.commit(function (err){
                            if(err){
                                con.rollback(function(){
                                    res.send({ status: 1, message: 'Error al crear el genero de libro', error: err});
                                    con.release();
                                });
                            }else{
                                con.release();
                                res.send({ status: 0, message: 'Genero libro creado satisfactoriamente' });
                            }
                            
                        });
                    }
                });
            });
        });
    };

    this.update = function (generoLibro, res){
        connection.acquire(function(err, con){
            con.query('UPDATE GeneroLibros SET ? WHERE CodigoGenero = ?', [generoLibro, generoLibro.codigo], function(err, result){
                con.release();
                if(err){
                    res.send({ status: 1, message: 'Error al actualizar el genero libro', error: err});
                }else{
                    res.send( {status: 0, message: 'Genero libro actualizado satisfactoriamente'});
                }
            });
        });
    };

    this.delete = function (codigo, res){
        connection.acquire(function (err, con){
            con.query('DELETE FROM GeneroLibros WHERE CodigoGenero = ?', [codigo], function (err, result){
                con.release();
                if(err){
                    res.send({ status: 1, message: 'Error al eliminar el genero libro', error: err});
                }else{
                    res.send({ status: 0, message: 'GeneroLibro eliminado satisfactoriamente'});
                }
            });
        });
    };
}).call(GeneroLibros.prototype);

module.exports = new GeneroLibros();