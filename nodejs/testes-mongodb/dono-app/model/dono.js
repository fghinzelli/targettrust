
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var donoSchema = new Schema({
    nome: String,
    endereco: String,
    telefone: String,
    ativo: Boolean,
    credito: Number
});

var Dono = mongoose.model('Dono', donoSchema);

module.exports = Dono;