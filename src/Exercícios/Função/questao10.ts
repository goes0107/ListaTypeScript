// 10. Calculadora de IMC com Classificação.
// Um personal trainer precisa de uma ferramenta para avaliar seus alunos.
//  Função calcular_imc(peso, altura): Retorna o resultado da fórmula IMC = peso/altura².

//  Função classificar_imc(valor_imc): Recebe o IMC e retorna uma string:
// o Abaixo de 18.5: &quot;Abaixo do peso&quot;
// o Entre 18.5 e 24.9: &quot;Peso Normal&quot;
// o 25 ou mais: &quot;Sobrepeso&quot;

//  Função exibir_laudo(nome, classificacao): Imprime: &quot;Paciente: [nome] - Status:
// [classificacao]&quot;.

//  Uso: Peça o nome, peso e altura, processe os dados e exiba o laudo.

export function questao10funcao():void{
    function calcular_imc(peso: number, altura: number): number{
        let imc: number = peso / altura**2
        return imc
    }

    function classificar_imc(imc: number): string{
        if (imc < 18.5){
            return `Abaixo do peso`
        }
        else if ((imc >= 18.5) && (imc <= 24.9)){
            return `Peso normal`
        }
        else{
            return `Sobrepeso`
        }
    }

    function exibir_laudo(nome: string, classificacao: string):any{
        console.log(`Paciente: [${nome}] - Status: [${classificacao}]`)
    }

    let nome: string = String(prompt(`Informe seu nome: `))
    let peso: number = Number(prompt(`Informe seu peso em kg (ex: 70.5): `))
    let altura: number = Number(prompt(`Informe sua altura em metros (ex: 1.75): `))

    let valorImc = calcular_imc(peso, altura)
    let classificacao = classificar_imc(valorImc)
    exibir_laudo(nome, classificacao)
}