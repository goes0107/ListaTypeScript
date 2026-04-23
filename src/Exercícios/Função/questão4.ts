// 4. Crie uma função que recebe um valor de saque (inteiro). A função deve dizer quantas notas
// de 50, 20 e 10 são necessárias para o saque (priorizando as maiores). Use um laço while
// para ir subtraindo do valor total.

export function questao4funcao():void{
    function saque(valorSaque: number):any{
        let notas50: number = 0
        let notas20: number = 0
        let notas10: number = 0

        while(valorSaque != 0){
            if (valorSaque >= 50){
                valorSaque -= 50
                notas50++
            }
            else if (valorSaque >= 20){
                valorSaque -= 20
                notas20++
            }
            else{
                valorSaque -= 10
                notas10++
            }
        }

        console.log(`Notas de R$50: ${notas50}`)
        console.log(`Notas de R$20: ${notas20}`)
        console.log(`Notas de R$10: ${notas10}`)
    }

    let valorSaque: number = Number(prompt(`Insira o valor que você deseja sacar inteiro (exemplo: 100): `))
    saque(valorSaque)
}