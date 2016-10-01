var connection = require('../mysql/connection');

function GenerosLibros(){    
}

(function(){
    this.list = function (res){
        connection.acquire(function (err, con){
            con.query('SELECT CodigoGenero,NombreGenero FROM GENEROSLIBROS', function (err, result){
                con.release();
                res.send(result);
            });
        });
    };

    this.get = function(genlibCod, res){
        connection.acquire(function (err, con){
            con.query('SELECT CodigoGenero,NombreGenero FROM GENEROSLIBROS WHERE CodigoGenero = ?', genlibCod, function (err, result){
                con.release();
                res.send(result);
            });
        });
    };

    this.create = function(generoLibro, res){
        connection.acquire(function (err, con){
            con.query('INSERT INTO GENEROSLIBROS SET ?', generoLibro, function (err,result){
                con.release();
                res.send(result);
            });
        });
    };


    this.update = function (generoLibro, res){
        connection.acquire(function(err, con){
            con.query('UPDATE GENEROSLIBROS SET ? WHERE CodigoGenero = ?', [generoLibro, generoLibro.codigo], function(err, result){
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
            con.query('DELETE FROM GENEROSLIBROS WHERE CodigoGenero = ?', [codigo], function (err, result){
                con.release();
                if(err){
                    res.send({ status: 1, message: 'Error al eliminar el genero libro', error: err});
                }else{
                    res.send({ status: 0, message: 'GeneroLibro eliminado satisfactoriamente'});
                }
            });
        });
    };
}).call(GenerosLibros.prototype);

module.exports = new GenerosLibros();