var connection = require('../mysql/connection');

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
    
    this.create = function (persona, res) {
        connection.acquire(function (err, con) {
            if (err) {
                console.log(err);
                return res.send({ status: 1, message: 'Error al conectarse a la base de datos', error: err });
            }
            bcrypt.genSalt(5, function (err, salt) {
                if (err) {
                    console.log(err);
                    return res.send({ status: 1, message: 'Error al crear el usuario', error: err });
                }
                bcrypt.hash(persona.ClavePersona, salt, null, function (err, hash) {
                    if (err) {
                        console.log(err);
                        return res.send({ status: 1, message: 'Error al codificar la contraseña de la persona', error: err });
                    }
                    persona.ClavePersona = hash;
                    
                    con.query('INSERT INTO PERSONAS SET ?', persona, function (err, result) {
                        if (err) {
                            console.log(err);
                            return res.send({ status: 1, message: 'Error al crear la persona', error: err });
                        }
                        con.release();
                        res.send(result);
                    });
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

    this.validate = function (username, password, callback) {
        connection.acquire(function (err, con) {
            if (err) {
                console.log(err);
                return callback(err);
            }
            con.query("SELECT P.NumeroIdentificacion, P.ClavePersona FROM PERSONAS P WHERE P.NumeroIdentificacion = ?", username, function (err, result) {
                if (err) {
                    console.log(err);
                    return callback(err);
                }
                if (result && result.length > 0) {
                    var person = result[0];
                    bcrypt.compare(password, person.ClavePersona, function (err, isMatch) {
                        if (err) return callback(err);
                        callback(null, user);
                    });
                }
                callback(null, false);
            });
        });
    }

    this.getUserById = function (userId, callback) {
        connection.acquire(function (err, con) {
            if (err) {
                console.log(err);
                return callback(err);
            }
            con.query("SELECT P.NumeroIdentificacion, P.ClavePersona FROM PERSONAS P WHERE P.NumeroIdentificacion = ?", userId, function (err, result) {
                if (err) {
                    console.log(err);
                    return callback(err);
                }
                if (result && result.length > 0) {
                    var user = result[0];
                    callback(null, user);
                }
                callback(null, null);
            });
        });
    }


}).call(Personas.prototype);

module.exports = new Personas();