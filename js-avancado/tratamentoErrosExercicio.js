
//var produtos = ["Produto1", "Produto2"];
var produtos = ["Produto1", "Produto2", "Produto3"];
//var produtos = ["Produto1", "Produto2", "Produto3", "Produto4"];

function listaArray(lista) {
    if (lista.length < 3 || lista.length > 3) {
        throw {
            code: 0,
            message: "O array deve ter 3 elementos"
        }
    } else {
        for (i=0; i<3; i++) {
            console.log(lista[i]);
        }
    }
}

try {
    listaArray(produtos);
} catch($e) {
    console.error($e.message);
}