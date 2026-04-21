// 5. Analisador de Desempenho de Vendas (Relatório de Equipe)
// Imagine que você está gerindo uma equipe de 5 vendedores.
//  Função classificarVenda(valor):
// o Se valor &lt; 1000: Retorna &quot;Bronze&quot;
// o Se valor entre 1000 e 5000: Retorna &quot;Prata&quot;
// o Se valor &gt; 5000: Retorna &quot;Ouro&quot;
//  O Programa:
// 1. Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
// 2. Dentro do laço, chame a função de classificação.
// 3. Ao final, o programa deve exibir:
//  O total de vendas da equipe (soma).
//  Quem foi o vendedor com a maior venda (maior valor digitado).
//  Quantos vendedores atingiram a categoria &quot;Ouro&quot;.

export function questao5repeticao():void{
    function classificarVenda(valor: number):any{
        if (valor < 1000){
            return `Bronze`
        }
        else if ((valor >= 1000) && (valor <= 5000)){
            return `Prata`
        }
        else if (valor > 5000){
            return `Ouro`
        }
    }

    let totalVendas: number = 0
    let maiorVenda: number = 0
    let vendedorMaiorVenda: string = ""
    let contOuro: number = 0

    for (let i = 1; i <= 5; i++){
        let nome_vendedor: string = String(prompt(`Digite o nome do vendedor ${i}: `))
        let valor_venda: number = Number(prompt(`Digite o valor da venda do vendedor ${i}: `))
        
        totalVendas = totalVendas + valor_venda

        if (valor_venda > maiorVenda){
            maiorVenda = valor_venda
            vendedorMaiorVenda = nome_vendedor
        }
        if (classificarVenda(valor_venda) == `Ouro`){
            contOuro = contOuro + 1
        }
    }
    console.log(`Total de vendas da equipe: R$${totalVendas.toFixed(2)}`)
    console.log(`Vendedor com a maior venda: ${vendedorMaiorVenda} com R$${maiorVenda.toFixed(2)}`)
    console.log(`Quantidade de vendedores que atingiram a categoria Ouro: ${contOuro}`)
}