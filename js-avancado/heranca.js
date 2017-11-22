"use strict";

function Eletro() {
  this.ligado = false;
  this.botao_ligar = function() {
    this.ligado = !this.ligado;
  }
}

function Ventilador($velocidade) {
  this.velocidadeMaxima = 5;
  this.velocidade = $velocidade;
}

// A clase ventilador herda da classe Eletro
Ventilador.prototype = new Eletro();

var ventilador1 = new Ventilador(3);


console.log(ventilador1.ligado);

ventilador1.botao_ligar();

console.log(ventilador1.ligado);