// 1. Crie um programa que receba um número e informe se ele é positivo, negativo ou zero.

let num: number = Number(window.prompt(`Insira um número: `))

if (num >= 1){
    document.writeln(`O número informado é positivo`)
}

else if(num < 0){
    document.writeln(`O número informado é negativo`)
}

else if (num == 0){
    document.writeln(`O número informado é 0`)
}