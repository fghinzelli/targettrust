var express = require('express');
var bodyParser = require('body-parser');

var host = '127.0.0.1';
var port = 3009;

const SUCCESS = {
    version     : 1.0,
    name        : 'TargetTrust',
    created_at  : new Date()
}

app = express();
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

app.get('/api/target/cadastra', (req, res) => {
    res.sendFile(__dirname + '/public/cadastrar.html');
});

app.post('/api/target/cadastra', (req, res) => {
    res.end(JSON.stringify(req.body))
});

app.get('/api/target/lista', (req, res) => {
    res.send(SUCCESS)
});

app.put('/api/target/altera', (req, res) => {
    res.send(SUCCESS)
});

app.delete('/api/target/exclui', (req, res) => {
    res.send(SUCCESS)
});

console.log("Servidor rodando em " + host + ":" + port);
app.listen(port);



