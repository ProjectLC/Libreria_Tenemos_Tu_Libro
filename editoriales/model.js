var connection = require('../mysql/connection');

function Editorial() {
}

(function () {
    this.list = function (res) {
        connection.acquire(function (err, con) {
            con.query('SELECT E.ID, E.NAME, E.PHONE FROM EDITORIAL E ', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.get = function (editorialId, res) {
        connection.acquire(function (err, con) {
            con.query('SELECT E.ID, E.NAME, E.PHONE FROM EDITORIAL E WHERE E.ID = ?', editorialId, function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };
    
    this.create = function (editorialId, res) {
        connection.acquire(function (err, con) {
            con.query('INSERT INTO EDITORIAL SET ?', editorial, function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };
                
    this.update = function (editorial, res) {
        connection.acquire(function (err, con) {
            con.query('UPDATE EDITORIAL SET ? WHERE ID = ?', [editorial, editorial.ID], function (err, result) {
                con.release();
                if (err) {
                    res.send({ status: 1, message: 'Error al actualizar la editorial', error: err });
                } else {
                    res.send({ status: 0, message: 'Editorial actualizada satisfactoriamente' });
                }
            });
        });
    };

    

    this.delete = function (id, res) {
        connection.acquire(function (err, con) {
            con.query('DELETE FROM EDITORIAL WHERE ID = ?', [id], function (err, result) {
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