var connection = require('../mysql/connection');

function Editorial() {
}

(function () {
    this.list = function (res) {
        connection.acquire(function (err, con) {
            con.query('SELECT E.CodigoEditorial, E.NombreEditorial, E.TelefonoEditorial FROM EDITORIALES E ', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.get = function (editorialId, res) {
        connection.acquire(function (err, con) {
            con.query('SELECT E.CodigoEditorial, E.NombreEditorial, E.TelefonoEditorial FROM EDITORIALES E WHERE E.CodigoEditorial = ?', editorialId, function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };
    
    this.create = function (editorial, res) {
        connection.acquire(function (err, con) {
            con.query('INSERT INTO EDITORIALES SET ?', editorial, function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };
                
    this.update = function (editorial, res) {
        connection.acquire(function (err, con) {
            con.query('UPDATE EDITORIALES SET ? WHERE CodigoEditorial = ?', [editorial, editorial.CodigoEditorial], function (err, result) {
                con.release();
                if (err) {
                    res.send({ status: 1, message: 'Error al actualizar la editorial', error: err });
                } else {
                    res.send({ status: 0, message: 'Editorial actualizada satisfactoriamente' });
                }
            });
        });
    };

    
    this.delete = function (editorialId, res) {
        connection.acquire(function (err, con) {
            con.query('DELETE FROM EDITORIALES WHERE CodigoEditorial = ?', [editorialId], function (err, result) {
                con.release();
                if (err) {
                    res.send({ status: 1, message: 'Error al eliminar la editorial', error: err });
                } else {
                    res.send({ status: 0, message: 'Editorial eliminada satisfactoriamente' });
                }
            });
        });
    };

    
}).call(Editorial.prototype);

module.exports = new Editorial();