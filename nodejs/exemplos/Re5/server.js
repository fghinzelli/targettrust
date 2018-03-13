var express = require('express');

var host = '127.0.0.1';
var port = 3008;

const SUCCESS = {
	version: 1.0,
	name: 'Target Trust'
}

app = express();

app.get('/', (req, res) => {
	res.send('Página inicial');
});

app.listen(port);

console.log("Server ativo na porta " + port);
