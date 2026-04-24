// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total

export function questao1repeticao():void{
    let contNum: number = 0
    let somaNum: number = 0
    let num: number = Number(prompt(`Digite um número ou 0 para encerrar: `))

    while (num != 0){
        contNum = contNum + 1
        somaNum = somaNum + num
        num = Number(prompt(`Digite um número ou 0 para encerrar: `))
    }
    console.log(`Quantidade de números digitados: ${contNum}`)
    console.log(`Soma total dos números digitados: ${somaNum}`)
}