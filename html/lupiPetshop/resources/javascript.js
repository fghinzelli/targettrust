/* 
var userName = '';
var userAge = 10;
var leftHandled = true;

var leftHandled = userAge;
alert(leftHandled);

//-------------------------------------------------

var nome = '';
var telefone = '';
var endereco = '';
var dataNascimento = '';

nome = 'Fernando Ghinzelli';
telefone = '(55) 99554455';
endereco = 'Rua das Bergamotas, 124, apto 32';
dataNascimento = '14/08/1985';

alert('Nome: ' + nome + '\nTelefone :' + telefone + '\nEndereço :' + 
      endereco + '\nDataNascimento :' + dataNascimento);

//--------------------------------------------------

var numero = 2;

function minhaFuncao() {
    var numero = 19;
    alert(numero); //imprime 19
}

alert(numero); //imprime 2


//--------------------------------------------------

// Escreva um software que recebe dois números e escreve as operações aritméticas
// na tela uma cada linha

operacoesAritmeticas();

function operacoesAritmeticas() {
    
    var num1 = parseFloat(prompt('Informe o primeiro número'));
    var num2 = parseFloat(prompt('Informe o segundo número'));

    console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2) + '\n');
    console.log(num1 + ' - ' + num2 + ' = ' + (num1 - num2) + '\n');
    console.log(num1 + ' * ' + num2 + ' = ' + (num1 * num2) + '\n');
    console.log(num1 + ' / ' + num2 + ' = ' + (num1 / num2));
}
// ------------------------------------------------


var idade = 19;

if ( (idade >= 18) && (idade <= 70) ) {
    alert('Pode xVideos');
} else {
    alert('Na, na, na, na');
}

*/

// Escreva um software que leia um número e informe se ele é par ou impar, positivo ou negativo.

// numeroParImparPositivoNegativo();
/* 
function numeroParImparPositivoNegativo() {
    var numero = parseInt(prompt('Informe um número: '));

    resultado = '';

    if (numero % 2 == 0) {
        resultado += 'O número é par';
    } else {
        resultado += 'O número é ímpar';
    }

    if (numero > 0) {
        resultado += ' e positivo.';
    } else if (numero < 0) {
        resultado += ' e negativo.';
    } else {
        resultado += ' e igual a zero(0).';
    }

    console.log(resultado);d
}
*/

var i = 0;
var shopLogo = document.getElementById('homeOffers');
var imagens = ['homeOffers.png', 'home.png', 'dogHTML.jpg', 'dogCss.jpg', 'catJavaScript.jpg'];
var arrayImages = [];

for (j=0; j<imagens.length; j++) {
    var imagem = new Image();
    imagem.src = "images/" + imagens[j];
    arrayImages.push(imagem);
}

function changeShopLogo() {
    if (shopLogo) {
        if (i === arrayImages.length) {
            i = -1;
        } else {
            shopLogo.src = arrayImages[i].src;
        }
        i++;
        setTimeout("changeShopLogo()", 5000);
    }
}

changeShopLogo();

