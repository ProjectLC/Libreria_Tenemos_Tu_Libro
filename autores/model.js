var connection = require('../mysql/connection')
function Autor() {
}

(function () {
    this.list = function (res) {
        connection.acquire(function (err, con) {
            con.query('SELECT CodigoAutor, NombreAutor FROM Autores', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.get = function (autorId, res) {
        connection.acquire(function (err, con) {
            con.query('SELECT CodigoAutor, NombreAutor FROM Autores WHERE CodigoAutor = ?', autorId, function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.create = function (autor, res) {
        connection.acquire(function (err, con) {
            con.beginTransaction(function (err) {
                if (err) { throw err; }
                con.query('INSERT INTO Autores SET ?', autor, function (err, result) {
                    if (err) {
                        con.rollback(function () {
                            res.send({ status: 1, message: 'Error al crear el autor', error: err });
                            con.release();
                        });
                    } else {
                        con.commit(function (err) {
                            if (err) {
                                con.rollback(function () {
                                    res.send({ status: 1, message: 'Error al crear el contacto', error: err });
                                    con.release();
                                });
                            } else {
                                con.release();
                                res.send({ status: 0, message: 'Autor creado satisfactoriamente' });
                            }
                        });
                    }
                });
            });
        });
    };

this.update = function (autor, res){
    connection.acquire(function(err, con){
        con.query('UPDATE Autores SET ? WHERE CodigoAutor = ?', [autor, autor.codigo], function(err, result){
            con.release();
            if(err){
                res.send({ status: 1, message: 'Error al actualizar el autor', error: err});
            }else{
                res.send({ status: 0, message: 'Autor actualizado satisfactoriamente'});
            }
        });
    });
};

this.delete = function (codigo, res){
    connection.acquire(function (err, con){
        con.query('DELETE FROM Autores WHERE CodigoAutor = ?', [codigo], function (err, result){
            con.release();
            if(err){
                res.send({ status: 1, message: 'Error al eliminar el autor', error: err});
            }else{
                res.send({ status: 0, message: 'Autor eliminado satisfactoriamente'});
            }
        });
    });
};

}).call(Autor.prototype);

module.exports = new Autor();

