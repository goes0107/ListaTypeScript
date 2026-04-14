// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo
export function questao1condicional():void{
    let num: number = Number(prompt(`Insira um número: `))

    if (num % 2 == 0){
        document.writeln(`O número é par`)
    }

    else{
        document.writeln(`O número é ímpar`)
    }
}
