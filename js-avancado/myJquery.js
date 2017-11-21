




// -------- Escrevento no html
/*
$('#titulo').html("Olá");

// Comandos equivalentes em jquery e javascript puro:

document.body.innerHTML = "Olá";
document.getElementsByTagName('h1').innerHTML = "Olá";
document.querySelector('h1').innerHTML = "Olá";
*/



// -------- Adicionando eventos


$("#fale").html("Fale").click(function() {
    console.log("Olá");
});


// Equivalente ao seguinte em javascript puro:
/*
var buttonFale = document.getElementById("fale");
buttonFale.textContent = "Fale";
buttonFale.addEventListener("click", function() {
    console.log("Olá");
});
*/


// -------- Capturando eventos do teclado

/*
$("body").keypress(function(e){
    console.log(e.key);
});
*/

// -------- Simulando um chat


function enviarMsg() {
    var conteudoChat = $("#chat").html();
    $("#chat").html(conteudoChat + $("#msg").val() + "<br/>");
    $("#msg").val('');
}
$("#enviar").click(enviarMsg);

$("#msg").keypress(function(e){
    if(e.keyCode == 13) {
        enviarMsg();
    }
});

