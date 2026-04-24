// 9. Simulador de Aprovação de Crédito
// Uma loja quer automatizar a análise de crédito de clientes.

//  Função solicitar_renda_mensal(): Pede a renda do usuário. Se o valor for negativo ou zero,
// pede novamente até ser válido.
//  Função analisar_credito(renda, valor_parcela): * A parcela não pode ultrapassar 30% da
// renda.
// i. Se a renda for acima de R$ 5.000,00, o cliente ganha um bônus de R$ 500,00 no
// limite final.
// ii. Retorna true para aprovado ou false para negado.

// Função exibir_status(resultado): Imprime &quot;Crédito Aprovado&quot; ou &quot;Crédito Negado&quot;.
// Peça a renda e o valor da parcela que o cliente deseja pagar, processe e mostre o resultado.

export function questao9funcao():void{
    function solicitar_renda_mensal():number{
        let renda: number = Number(prompt(`Informe sua renda mensal: `))

        while (renda <= 0) {
            alert("Valor inválido. Por favor, informe um valor positivo.")
            renda = Number(prompt("Informe sua renda mensal: "))
        }
        
        return renda
    }

    function analisar_credito(renda: number, valor_parcela: number): number {
        let limite_parcela: number = renda * 0.3

        if (renda > 5000) {
            limite_parcela += 500
        }
        return limite_parcela
    }

    function exibir_status(resultado: boolean):void{
        if (resultado) {
            console.log("Crédito Aprovado")
        } 
        else {
            console.log("Crédito Negado")
        }   
    }

    let renda: number = solicitar_renda_mensal()
    let valorParcela: number = Number(prompt(`Informe o valor da parcela que deseja pagar: `))
    let limiteFinal: number = analisar_credito(renda, valorParcela)
    let resultado: boolean = valorParcela <= limiteFinal
    exibir_status(resultado)
}