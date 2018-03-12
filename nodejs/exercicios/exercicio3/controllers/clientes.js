var template  = require('../views/template-main');
var test_data = require('../model/test-data');

exports.get = function(req, res) {
    var listaClientes = test_data.listaClientes;
    var strTeam = "",
        i = 0;
    for (i = 0; i < listaClientes.count;) {
        strTeam = strTeam + "<tr><td>" + listaClientes.clientes[i].nome + "</td><td>" + listaClientes.clientes[i].sexo + "</td><td>" + listaClientes.clientes[i].dataNascimento + "</td></tr>";
        i = i + 1;
    }
    strTeam = "<table><tr><th>Nome</th><th>Sexo</th><th>Nascimento</th></tr>" + strTeam + "</table>";
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(template.build("Clientes", "Lista de Clientes", "<p>Os clientes são:</p>" + strTeam));
    res.end();
};