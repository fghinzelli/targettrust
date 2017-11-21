var msg_error = document.getElementById("error");

function verificar($a, $b) {
if (typeof($a) == 'undefined' || 
    typeof ($b) == 'undefined') {
        throw {
            code: 0,
            name: "Parâmetros inválidos",
            message: "Preencha todos os campos"
        }
    }

    if ($a > $b) {
        return "A é maior!";        
    } else {
        return "B é maior";
    }

}

try {
    verificar();

} catch($e) {
    console.error($e.name);
    console.error($e.message);
    
    msg_error.innerHTML = $e.name + ": ";
    msg_error.innerHTML += $e.message;
}