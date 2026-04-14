// 1. Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
// para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
// deve retornar 10, pois 1+2+3+4 = 10).

export function questao1funcao():void{
    let soma: number = 0

    function somarAte (num: number): any{
        for (let i = 1; i <= num; i++){
            soma = soma + i
        }
        document.writeln(`Resultado da soma: ${soma}`)
    }

    let numero: number = Number(window.prompt(`Insira um número inteiro positivo`))

    somarAte(numero)
}