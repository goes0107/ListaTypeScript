// Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.

export function questao4repeticao():void{
    let contPar: number = 0
    let contImpar: number = 0
    let num: number = Number(prompt(`Digite um número ou -1 para encerrar: `))

    while (num != -1){
        if (num % 2 == 0){
            contPar = contPar + 1
        }
        else{
            contImpar = contImpar + 1
        }
        
        num = Number(prompt(`Digite um número ou -1 para encerrar: `))
    }

    console.log(`Quantidade de números pares: ${contPar}`)
    console.log(`Quantidade de números ímpares: ${contImpar}`)
}