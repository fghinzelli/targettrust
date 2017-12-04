var message = "Minha primeira frase";
console.log(message);
// 
var idade = 1;
console.log(idade++);
// Tipagem dinâmica: Mesmo comportamente de 'var'
var dadoDinamico = 'Fernando';
dadoDinamico = 1;
// Se a tipagem não for declarada, é assumido que a variável é de tipagem dinâmica:
var dadoDinamico2;
dadoDinamico2 = "Fernando";
dadoDinamico2 = 1;
// Tipagem de parametros e do retorno de uma função
function soma(a, b) {
    return a + b;
}
console.log(soma(2, 2));
// Parametros opcionais <parametro>?
function incrementa(a, b) {
    return a + (b || 1);
}
console.log('Incrementa: ' + incrementa(2, 4));
// Valor default para um parametro
function dividir(a, b) {
    if (b === void 0) { b = 1; }
    return a / b;
}
console.log('Dividir 2/2: ' + dividir(2, 2));
console.log("Divivir 2/2: " + dividir(2));
// Arrow functions
// <nome_funcao> = (<argumentoA>, <argumentoB>) => <retorno>
var soma2 = function (a, b) { return a + b; };
var soma3 = function (a, b) { return a + b; };
// Declaração de arrays: number[] ou [nuber] ou [1,2,3]
var somaArray = function (numeros) {
    return numeros.reduce(function (total, item) { return total += item; }, 0);
};
console.log('Soma Array ' + somaArray([1, 2, 3]));
// Rest params
var somaArray2 = function () {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (total, item) { return total += item; }, 0);
};
console.log('Soma Array2 ' + somaArray2(1, 2, 3));
