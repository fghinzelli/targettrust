'use strict'

var express = require('express');
var bodyParser = require("body-parser");
var app = express();

var port = 3080;
var server = '127.0.0.0';


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/donos');

var Dono = require('./model/dono');

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', function( req, res ) {
    res.render('pages/index');
});


app.get('/listar', function(req, res) {
    Dono.find({}, function(err, donos) {
        if (err) {
            msg = 'Erro: ' + err;
            console.error(msg);
            res.end(msg);
        } 
        res.render('pages/list', {donos: donos})
    });
});

app.get('/cadastrar', function(req, res) {
    res.render('pages/edit', {dono: {}, acao: 'cadastrar', msg: ''});
});

app.post('/cadastrar', function(req, res) {
    var novoDono = Dono({
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        ativo: req.body.ativo,
        credito: req.body.credito
    });

    novoDono.save(function(err) {
        if (err) {
            msg = 'Erro: ' + err;
            console.error(msg);
            res.end(msg);
        }
        res.render('pages/edit', {dono: novoDono,
                        acao: 'alterar',
                        msg: 'Dono ' + novoDono.nome + ' incluído com sucesso'});
    });
});

app.get('/alterar/:id', function(req, res) {
    const id = req.params.id;
    Dono.findById(id, function(err, dono){
        res.render('pages/edit', {dono: dono, acao: 'alterar', msg: ''});
    });
});

app.post('/alterar/:id', function(req, res) {
    var dono_alterado = { nome: req.body.nome,
                      endereco: req.body.endereco,
                      telefone: req.body.telefone,
                      ativo: req.body.ativo,
                      credito: req.body.credito
    }
    Dono.findByIdAndUpdate(req.params.id, dono_alterado, function(err, dono){
        res.render('pages/edit', {dono: dono_alterado, mensagem: dono.nome + 'alterado com sucesso', 
                                  acao: 'alterar',
                                  msg: 'Cadastro Alterado com sucesso!'});
    });
});

app.get('/deletar/:id', function(req, res) {
    const id = req.params.id;
});

console.log('Servidor rodando em ' + server + ':' + port);
app.listen(port);