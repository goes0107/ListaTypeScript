// 5. Crie uma função que recebe dois números: início e fim. Depois use um laço para percorrer
// esse intervalo e imprimir apenas os números que são múltiplos de 3.

export function questao5funcao():void{
    function inicioFim(inicio: number, fim: number):any{
        for(let i = inicio; i <= fim; i++){
            if (i % 3 == 0){
                console.log(`Os números múltiplos de 3 entre os números digitados são: ${i}`)
            }
        }
    }

    let numInicio: number = Number(prompt(`Insira o primeiro número: `))
    let numFim: number = Number(prompt(`Insira o segundo nùmero: `))
    inicioFim(numInicio, numFim)
}