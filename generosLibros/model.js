var connection = require('../mysql/connection');

function generoLibro(){    
}

(function(){
    this.list = function (res){
        connection.acquire(function (err, con){
            con.query('SELECT CODIGO,NOMBRE FROM GENEROSLIBROS', function (err, result){
                con.release();
                res.send(result);
            });
        });
    };

    this.get = function(genlibCod, res){
        connection.acquire(function (err, con){
            con.query('SELECT CODIGO,NOMBRE FROM GENEROSLIBROS WHERE CODIGO = ?', genlibCod, function (err, result){
                con.release();
                res.send(result);
            });
        });
    };

    this.create = function (generoLibro, res){
        connection.acquire(function (err, con){
            con.beginTransaction(function (err){
                if (err) {throw err;}
                con.query('INSERT INTO GENEROSLIBROS SET ?', generoLibro, function (err,result){
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
            con.query('UPDATE GENEROSLIBROS SET ? WHERE CODIGO = ?', [generoLibro, generoLibro.codigo], function(err, result){
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
            con.query('DELETE FROM GENEROSLIBROS WHERE CODIGO = ?', [codigo], function (err, result){
                con.release();
                if(err){
                    res.send({ status: 1, message: 'Error al eliminar el genero libro', error: err});
                }else{
                    res.send({ status: 0, message: 'generoLibro eliminado satisfactoriamente'});
                }
            });
        });
    };
}).call(generoLibro.prototype);

module.exports = new generoLibro();