// 8. Controle de Estoque de Loja (Loop e Relatório)
// Faça um programa que gerencie a entrada de produtos em um estoque. O programa deve solicitar o
// preço unitário do produto e a quantidade comprada.
//  Crie uma função que recebe preço e quantidade. Se a quantidade for maior que 10 unidades,
// aplica 5% de desconto sobre o valor total daquele item. Retorna o valor final.
//  O programa deve repetir a solicitação até que o preço informado seja zero.
//  Ao encerrar, exiba o total geral investido no estoque e a média de preço dos produtos
// cadastrados.

export function questao8funcao():void{
    function calcularValorFinal(preco: number, quantidade: number): number {
        let valorTotal: number = preco * quantidade
        if (quantidade > 10) {
            let desconto: number = valorTotal * 0.05
            valorTotal -= desconto
        }
        return valorTotal
    }

    let totalGeral: number = 0
    let totalProdutos: number = 0
    let precoInput: number = Number(prompt("Digite o preço unitário do produto (ou 0 para encerrar):"))

    while (precoInput != 0) {
        let qntProduto: number = Number(prompt("Digite a quantidade comprada:"))
        let valorFinal: number = calcularValorFinal(precoInput, qntProduto)
        totalGeral += valorFinal
        totalProdutos++
        console.log(`Valor final para este item: R$ ${valorFinal.toFixed(2)}`)
        precoInput = Number(prompt("Digite o preço unitário do produto (ou 0 para encerrar):"))
    }
    if (totalProdutos > 0) {
        let mediaPreco: number = totalGeral / totalProdutos
        console.log(`Total geral investido no estoque: R$ ${totalGeral.toFixed(2)}`)
        console.log(`Média de preço dos produtos cadastrados: R$ ${mediaPreco.toFixed(2)}`)
    } else {
        console.log("Nenhum produto cadastrado.")
    }
}