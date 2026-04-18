// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo
export function questao1condicional():void{
    let num: number = Number(prompt(`Insira um número: `))

    if (num % 2 == 0){
        alert(`O número é par`)
    }

    else{
        alert(`O número é ímpar`)
    }
}
