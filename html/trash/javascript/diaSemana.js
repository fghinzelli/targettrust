function diaSemana() {
    var hoje = new Date();
    diaSemana = hoje.getDay();

    switch (diaSemana) {
        case 1: 
            alert('Segunda-Feira');
            break;
        case 2:
            alert('Terça-Feira');
            break;
        case 3:
            alert('Quarta-Feira');
            break;
        case 4:
            alert('Quinta-Feira');
            break;
        case 5:
            alert('Sexta-Feira');   
            break;
        default:
            alert('Final de Semana');
    }
}