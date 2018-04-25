var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3021;
var ser = '127.0.0.1';
var path = require('path');
var session = require('express-session')
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animais');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var Animal = require('./model/animal');

app.get('/', function(req, res) {
    res.redirect('/lista');
});

function errfn(res, err) {
    console.log('Erro: ', err);
    msg = 'Erro: ' + err;
    return res.end(msg);
}


app.get('/cadastra', function( req, res) {

    let message = false
    if (req.session.message) {
        message =  req.session.message;
        delete req.session["message"];
    }
    
    res.render('pages/editar-animal', {
        animal: {},
        message: message
    });        
});

app.post('/cadastra', function( req, res) {

    let apelido = req.body.apelido
    let dataNascimento = req.body.dataNascimento
    let dono = req.body.dono
    if (dataNascimento != "") {
        dataNascimento = new Date(Date.parse(dataNascimento))
    }
    let vivo = req.body.vivo

    let data = {
        "apelido": apelido,
        "dataNascimento": dataNascimento,
        "vivo": vivo,
        "dono": dono,
    }
    novoAnimal = Animal(data)
    novoAnimal.save(function(err) {
        
        if (err) errfn(err, res)

        req.session.message = "Cadastrado com sucesso"
        res.redirect('/cadastra');
    });
});

app.get('/lista', function(req, res) {
    Animal.find({}, function (err, animais) {
        if (err) errfn(err, res)
            
        let message = false
        if (req.session.message) {
            message =  req.session.message;
            delete req.session["message"];
        }
        
        res.render('pages/lista', {
            animais: animais,
            message: message
        });

    });
})

app.get('/altera/:id', function(req, res) {
    id = req.params.id
    Animal.findById(id, function (err, animal) {
        if (err) return errfn(res, err)
        
        res.render('pages/editar-animal', {
            animal: animal,
            message: false
        });        
    })

});

app.post('/altera/:id', function(req, res) {
    let id = req.params.id
    let apelido = req.body.apelido
    let dataNascimento = req.body.dataNascimento
    let dono = req.body.dono
    if (dataNascimento != "") {
        dataNascimento = new Date(Date.parse(dataNascimento))
    }
    let vivo = req.body.vivo

    updt = {
        "apelido": apelido,
        "dataNascimento": dataNascimento,
        "vivo": vivo,
        "dono": dono,
    }

    Animal.findByIdAndUpdate(id, updt, function (err, animal) {
        if (err) errfn(err, res)
        req.session.message = "Atualizado com sucesso"
        res.redirect('/lista');
    });
})

app.post('/deleta/:id', function(req, res) {
    id = req.params.id
    Animal.delete(id, function (err, animal) {
        if (err) return errfn(res, err)
        
        res.render('pages/editar-animal', {
            animal: animal,
            message: false
        });        
    })

});


console.log(" Executando em " + ser + ":" + port);
app.listen(port);