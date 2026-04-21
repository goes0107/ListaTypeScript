// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total

export function questao1repeticao():void{
    let contadorTotal: number = 0
    let somadorNum: number = 0
    let num: number = Number(prompt(`Insira um número ou digite 0 para encerrar: `))

    while (num != 0){
        contadorTotal = contadorTotal + 1
        somadorNum = somadorNum + num

        num = Number(prompt(`Insira um número ou digite 0 para encerrar: `))
    }
    console.log(`Quantidade de números digitados: ${contadorTotal}`)
    console.log(`Soma total dos números digitados: ${somadorNum}`)
}