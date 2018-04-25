var express = require('express');
var bodyParser = require('body-parser');

var port = 3016
var ser = '127.0.0.1'

var clientes = require('./clientes');

app = express();
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));


app.post('/cadastro', function (req, res) {
    console.log(req.body);
    res.end( JSON.stringify(req.body));
});

app.get('/lista', function (req, res) {
    res.end(JSON.stringify(clientes))
});




console.log(" Executando em " + ser + ":" + port);

app.listen(port);
