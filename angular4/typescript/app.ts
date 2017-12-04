
let message:string = "Minha primeira frase"
console.log(message)

// 
let idade = 1
console.log(idade++)

// Tipagem dinâmica: Mesmo comportamente de 'var'
let dadoDinamico:any = 'Fernando'
dadoDinamico = 1

// Se a tipagem não for declarada, é assumido que a variável é de tipagem dinâmica:
let dadoDinamico2
dadoDinamico2 = "Fernando"
dadoDinamico2 = 1


// Tipagem de parametros e do retorno de uma função
function soma(a: number, b: number) : number {
    return a + b
}
console.log(soma(2, 2))

// Parametros opcionais <parametro>?
function incrementa(a: number, b?: number) : number {
    return a + (b || 1)
}

console.log('Incrementa: ' + incrementa(2, 4))

// Valor default para um parametro
function dividir(a: number, b: number = 1) : number {
    return a / b
}
console.log('Dividir 2/2: ' + dividir(2, 2))
console.log("Divivir 2/2: " + dividir(2))

// Arrow functions
// <nome_funcao> = (<argumentoA>, <argumentoB>) => <retorno>
const soma2 = (a: number, b: number) : number => a + b
const soma3 = (a, b) => a + b

// Declaração de arrays: number[] ou [nuber] ou [1,2,3]
const somaArray = (numeros : number[]) : number => {
    return numeros.reduce((total, item) => total += item, 0)
}
console.log('Soma Array ' + somaArray([1,2,3]))

// Rest params
const somaArray2 = (...numeros : number[]) : number => {
    return numeros.reduce((total, item) => total += item, 0)
}
console.log('Soma Array2 ' + somaArray2(1,2,3))