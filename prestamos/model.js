var connection = require('../mysql/connection');

function Prestamos() {
}

(function () {
    this.list = function (res) {
        connection.acquire(function (err, con) {
            con.query('SELECT P.CodigoPrestamo, P.NombreLector, PER.NombrePersona, P.FechaPrestamo, P.CantidadLibros, LP.CodigoLibroLP, L.NombreLibro, LP.RenovacionesLibro, LP.FechaDevolucion FROM PRESTAMOS P, PERSONAS PER, LIBROSPRESTAMOS LP, LIBROS L WHERE P.CodigoPrestamo = CodigoPrestamo AND PER.NumeroIdentificacion = P.NombreLector AND LP.CodigoPrestamoLP = P.CodigoPrestamo AND L.CodigoLibro = LP.CodigoLibroLP ', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    /*
    this.get = function (contactId, res) {
        connection.acquire(function (err, con) {
            con.query('SELECT C.ID, C.NAME, C.COMPANY, P.ID CONSECUTIVE, P.PHONE FROM CONTACT C, PHONE P WHERE C.ID = P.CONTACT_ID AND C.ID = ?', contactId, function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.create = function (contact, res) {
        var phoneList = contact.phoneList;
        delete contact.phoneList;
        connection.acquire(function (err, con) {
            con.beginTransaction(function (err) {
                if (err) { throw err; }
                con.query('INSERT INTO CONTACT SET ?', contact, function (err, result) {
                    if (err) {
                        con.rollback(function () {
                            res.send({ status: 1, message: 'Error al crear el contacto', error: err });
                            con.release();
                        });
                    } else {
                        var generatedId = result.insertId;
                        var phoneId = 1;
                        for (var phone in phoneList) {
                            var phoneObj = phoneList[phone];
                            phoneObj.CONTACT_ID = generatedId;
                            phoneObj.ID = phoneId++;
                        }
                        con.query('INSERT INTO PHONE SET ?', phoneList, function (err, result) {
                            if (err) {
                                con.rollback(function () {
                                    con.release();
                                    res.send({ status: 1, message: 'Error al crear el contacto', error: err });
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
                                        res.send({ status: 0, message: 'Contacto creado satisfactoriamente' });
                                    }
                                });
                            }
                        });
                    }
                });
            });
        });
    };

    this.update = function (contact, res) {
        connection.acquire(function (err, con) {
            con.query('UPDATE CONTACT SET ? WHERE ID = ?', [contact, contact.ID], function (err, result) {
                con.release();
                if (err) {
                    res.send({ status: 1, message: 'Error al actualizar el contacto', error: err });
                } else {
                    res.send({ status: 0, message: 'Contacto actualizado satisfactoriamente' });
                }
            });
        });
    };
    */
    /*
    this.delete = function (id, res) {
        connection.acquire(function (err, con) {
            con.query('DELETE FROM CONTACT WHERE ID = ?', [id], function (err, result) {
                con.release();
                if (err) {
                    res.send({ status: 1, message: 'Error al eliminar el contacto', error: err });
                } else {
                    res.send({ status: 0, message: 'Contacto eliminado satisfactoriamente' });
                }
            });
        });
    };

    this.deletePhone = function (contactId, id, res) {
        connection.acquire(function (err, con) {
            con.query('DELETE FROM PHONE WHERE CONTACT_ID = ? AND ID = ?', [contactId, id], function (err, result) {
                con.release();
                if (err) {
                    res.send({ status: 1, message: 'Error al eliminar el contacto el telefono', error: err });
                } else {
                    res.send({ status: 0, message: 'Telefono eliminado satisfactoriamente' });
                }
            });
        });
    }; */

}).call(Prestamos.prototype);

module.exports = new Prestamos();