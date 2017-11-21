var msg_error = document.getElementById("error");

function assert_soma($method, $valorA, $valorB, $result) {
    var result = $method($valorA, $valorB);
    if (result != $result) {
        throw {
            code: 0,
            //name: "Parâmetros inválidos",
            message: "ERRO"
        }
    } else {
        return {
            code: 1,
            message: "OK"
        }
    }
}

function soma($a, $b) {
    return $a + $b;
}

try {
    console.log(assert_soma(soma,1,1,2));

} catch($e) {
    console.error($e.name);
    console.error($e.message);
    
    //msg_error.innerHTML = $e.name + ": ";
    msg_error.innerHTML += $e.message;
}