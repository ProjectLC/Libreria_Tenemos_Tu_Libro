var connection = require('../mysql/connection');

function Personas(){    
}

(function(){
    this.list = function (res){
        connection.acquire(function (err, con){
            con.query('SELECT P.NumeroIdentificacion, P.NombrePersona, P.Apellido1Persona, P.Apellido2Persona, P.Telefono1Persona, P.Telefono2Persona, P.DireccionPersona, P.EmailPersona, P.FechaNacimiento, P.UsuarioPersona, P.ClavePersona FROM PERSONAS P', function(err, result){
                con.release();
                res.send(result);
            });
        });
    };

    this.get = function(NumeroIdentificacion, res){
        connection.acquire(function (err, con){
            con.query('SELECT P.NumeroIdentificacion, P.NombrePersona, P.Apellido1Persona, P.Apellido2Persona, P.Telefono1Persona, P.Telefono2Persona, P.DireccionPersona, P.EmailPersona, P.FechaNacimiento, P.UsuarioPersona, P.ClavePersona FROM PERSONAS P WHERE NumeroIdentificacion = ?', function(err, result){
                con.release();
                res.send(result);
            });
        });
    };
    
    this.create = function (persona, res) {
        connection.acquire(function (err, con) {
            con.query('INSERT INTO PERSONAS SET ?', persona, function (err, result) {
                con.release();
                res.send(result);
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