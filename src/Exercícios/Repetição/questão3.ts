// Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.

export function questao3repeticao():void{
    let maior_salario: number = 0
    let nome_maior_salario: string = ""
    let soma_salarios: number = 0
    let cont_fem: number = 0
    let cont_masc: number = 0
    let resposta: number = 0

    while (resposta != 2) {
        let nome: string = String(prompt(`Digite seu nome: `))
        let horas_trabalhadas: number = Number(prompt(`Digite a sua quantidade de horas trabalhadas: `))
        let salario_hora: number = Number(prompt(`Digite seu salário hora: `))
        let sexo: number = Number(prompt(`Digite seu sexo. 1-Masculino, 2-Feminino: `))

        let salario_individual: number = (horas_trabalhadas * salario_hora);

        soma_salarios = soma_salarios + salario_individual

        if (sexo == 1) {
            cont_masc = cont_masc + 1
        } 
        
        else if (sexo == 2) {
            cont_fem = cont_fem + 1
        }

        if (salario_individual > maior_salario) {
            maior_salario = salario_individual
            nome_maior_salario = nome
        }

        resposta = Number(prompt(`Quer continuar? 1-Sim, 2-Não: `));
    }

    let total_funcionarios: number = cont_fem + cont_masc
    let percentual_masc: number = (cont_masc / total_funcionarios) * 100
    let percentual_fem: number = (cont_fem / total_funcionarios) * 100

    console.log(`Salário total dos funcionários: R$${soma_salarios.toFixed(2)}`)
    console.log(`Maior salário: R$${maior_salario.toFixed(2)}`)
    console.log(`Nome de quem recebeu: ${nome_maior_salario}`)
    console.log(`O número de funcionários homens é de: ${cont_masc}`)
    console.log(`O número de funcionárias mulheres é de: ${cont_fem}`)
    console.log(`A porcentagem de homens é de: ${percentual_masc.toFixed(1)}%`)
    console.log(`A porcentagem de mulheres é de: ${percentual_fem.toFixed(1)}%`)
}