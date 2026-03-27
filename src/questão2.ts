// 2. Crie uma função que receba um número e retorne se ele é par ou ímpar.

function parOuImpar (num: number):any{
    if (num % 2 == 0){
        document.writeln(`O número é par`)
    }

    else{
        document.writeln(`O número é ímpar`)
    }
}

let numero: number = Number(window.prompt(`Insira um número: `))

parOuImpar(numero)