module.exports = {

    configure: function (app) {

        app.get('/customer/:nit', function (req, res) {
            res.send('Hello World Customer : ' + req.params.nit);
        });
        
        app.get('/customer', function (req, res) {
            res.send('Hello World Customer List: ' );
        });

        app.post('/customer', function (req, res) {
            var customer = req.body;
            res.send('Hello World Post Customer: ' + customer.nit + ' ' + customer.name);
        });

        app.put('/customer/:nit', function (req, res) {
            var customer = req.body;
            res.send('Hello World Put Customer: ' + customer);
        });

        app.delete('/customer/:nit', function (req, res) {
            res.send('Hello World Delete Customer: ');
        });

    }
};

