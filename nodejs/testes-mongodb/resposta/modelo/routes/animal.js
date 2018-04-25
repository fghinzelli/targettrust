var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animais');
var router = express.Router();
var Animal = require('../model/animal');

/* GET home page. */
router.get('/', function(req, res, next) {
    var novoAnimal = Animal({})
    res.render('pages/edit', {animal: novoAnimal });
  });
 
router.post('/cadastraAnimal', function( req, res) {
    console.log("passei", req.body)
    var novoAnimal = Animal({
      apelido: req.body.apelido,
      dono: req.body.dono,
      vivo: req.body.vivo,
      endereco: req.body.endereco,
      dataAlteracao: new Date()
  });

  novoAnimal.save(function(err) {
      if (err){
          console.log('Erro: ', err);
          msg = 'Erro: ' + err;
          return res.end(msg);
      }
      res.render('pages/edit', {animal: novoAnimal , msg :'Animal SALVO'});
      
  });
});

module.exports = router;
