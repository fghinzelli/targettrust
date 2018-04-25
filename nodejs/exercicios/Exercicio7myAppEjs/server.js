
var express = require('express');
var app = express();
var path = require('path');
var port = 3010
var ser = '127.0.0.1'

var dados = require('./clientes')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/list', function(req, res) {
    var dica = "Refatore seu condigo continuamente, aplic conceitos de SOLID.";

    res.render('pages/list', {
        clientes: dados.listaClientes.clientes,
        dica: dica
    });
});

app.get('/about', function(req, res) {
    res.render('pages/about');
});

console.log(" Executando em " + ser + ":" + port);

app.listen(port);

