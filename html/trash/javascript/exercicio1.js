function calcular() {
    var nome = document.getElementById('nome').value;
    var salario = parseFloat(document.querySelector("#salarioMensal").value);

    if (nome == null || nome == '') {
        alert('Informe seu nome');
        return false;
    }

    if (salario == null || isNaN(salario)) {
        alert('Informe o Salário');
        return false;
    }

    if (salario < 1000) {
        alert('O salário não pode ser inferior a R$ 1.000,00');
        return false;
    }

    var salarioAnual = salario * 12;
    var inss = 0;

    if (salarioAnual <= 15000) {
        inss = 0.05;
    } else if ((salarioAnual > 15000) && (salarioAnual <= 25000)) {
        inss = 0.1;
    } else {
        inss = 0.15;
    }
    var liquidoAnual = salarioAnual * (1 - inss);
    var descontoINSS = salarioAnual - liquidoAnual;

    var tagNome = document.getElementById('nomeResultado');
    tagNome.style.color = '#FF0000';
    tagNome.innerHTML = nome;
    document.getElementById('salarioAnual').innerHTML = salarioAnual;
    document.getElementById('descontoInss').innerHTML = descontoINSS;
    document.getElementById('liquidoAnual').innerHTML = liquidoAnual;
}  

