var connection = require('./mysql/connection');

function Personas(){    
}

(function(){
    this.list = function (res){
        connection.acquire(function (err, con){
            con.query('SELECT NumeroIdentificacion, NombrePersona, Apellido1Persona, Apellido2Persona, Telefono1Persona, Telefono2Persona, DireccionPersona, EmailPersona, FechaNacimiento, UsuarioPersona, ClavePersona FROM PERSONAS', function(err, result){
                con.release();
                res.send(result);
            });
        });
    };

    this.get = function(NumeroIdentificacion, res){
        connection.acquire(function (err, con){
            con.query('SELECT NumeroIdentificacion,NombrePersona,Apellido1Persona,Apellido2Persona,Telefono1Persona,Telefono2Persona,DireccionPersona,EmailPersona,FechaNacimiento,UsuarioPersona,ClavePersona FROM PERSONAS WHERE NumeroIdentificacion = ?', NumeroIdentificacion, function(err, result){
                con.release();
                res.send(result);
            });
        });
    };

    this.crate = function (Personas, res){
        connection.acquire(function (err, con){
            con.beginTransaction(function (err){
                if(err) {throw err;}
                con.query('INSERT INTO Personas SET ?', Personas, function(err, result){
                    if(err){
                        con.rollback(function(){
                            res.send({ status: 1, message: 'Error al guardar el registro', error: err});
                            con.release();
                        });
                    }else{
                        con.commit(function (err){
                            if(err){
                                con.rollback(function(){
                                    res.send({ status: 1, message: 'Error al guardar el registro', error: err});
                                    con.release();
                                });
                            }else{
                                con.release();
                                res.send({ status: 0, message: 'Registro guardado satisfactoriamente'});
                            }
                        });
                    }
                });
            });
        });
    };

    this.update = function (Personas, res){
        connection.acquire(function(err, con){
            con.query('UPDATE PERSONAS SET ? WHERE NumeroIdentificacion = ?', [Personas, Personas.NumeroIdentificacion], function(err, result){
                con.release();
                if(err){
                    res.send({ status: 1, message: 'Error al modificar el registro', error: err});
                }else{
                    res.send({ status: 0, message: 'Registro modifcado satisfactoriamente'});
                }
            });
        });
    };

    this.delete = function(NumeroIdentificacion, res){
        connection.acquire(function(err, con){
            con.query('DELETE FROM PERSONAS WHERE NumeroIdentificacion = ?', [NumeroIdentificacion], function (err, result){
                con.release();
                if(err){
                    res.send({ status: 1, message: 'Error al eliminar el registro', error:err });
                }else{
                    res.send({ status: 0, message: 'Registro eliminado satisfactoriamente'});
                }
            });
        });
    };
}).call(Personas.prototype);

module.exports = new Personas();