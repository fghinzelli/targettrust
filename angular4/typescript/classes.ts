class Imovel {
    area : number

    constructor(area: number) {
        this.area = area
    }
}

// O construtor acima também pode ser declarado da seguinte forma (com auto inicializacao de variaveis privadas):
class Imovel2 {
    constructor(private area: number){}
}

// Herança
class Casa extends Imovel2 {
    constructor(area: number) {
        super(area)
    }
}

// Interfaces
interface Imovel3 {
    area: number,
    // atributo opcional (pode ser usado tbm para métodos)
    quartos?: number
}

class Casa3 implements Imovel {
    area: number;

}