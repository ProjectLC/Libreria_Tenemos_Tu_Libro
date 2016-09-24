module.exports = {

    configure: function (app) {
        app.get('/product/:id', function (req, res) {
            res.send('Hello World Product Get: ' + req.params.id);
        });
        
        app.get('/product/', function (req, res) {
            res.send('Hello World Product List ' );
        });

        app.post('/product', function (req, res) {
            var product = req.body;
            res.send('Hello World Post Product' + product.id + ' ' + product.name);
        });

        app.put('/product/:id', function (req, res) {
            var product = req.body;
            res.send('Hello World Put Product: ' + product);
        });

        app.delete('/product/:id', function (req, res) {
            res.send('Hello World Delete Product');
        });

    }
};

