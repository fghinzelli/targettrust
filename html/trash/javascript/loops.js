var arrayFruits = ['Banana', 'Orange', 'Apple', 'Strawberry', 'Lemon'];

var lista = document.getElementById('loop-for');

/* Usando for */
/*
for (i=0; i<arrayFruits.length; i++) {    
    var li = document.createElement('li');
    var text = document.createTextNode(arrayFruits[i]);
    li.appendChild(text);
    lista.appendChild(li);
}

*/

/* Usando For in */

for (item in arrayFruits) {
    var li = document.createElement('li');
    var texto = document.createTextNode(arrayFruits[item]);
    li.appendChild(texto);
    lista.appendChild(li);
}

