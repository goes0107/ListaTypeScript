// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo

let num: number = Number(window.prompt(`Insira um número: `))

if (num % 2 == 0){
    document.writeln(`O número é par`)
}

else{
    document.writeln(`O número é ímpar`)
}