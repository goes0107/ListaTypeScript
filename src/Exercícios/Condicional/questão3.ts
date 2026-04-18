// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case

export function questao3condicioal(): void{
    let calculadora: number = Number(prompt(`---CALCULADORA--- \n 1- Adição \n 2- Subtração \n 3- Multiplicação \n 4- Divisão \n Escolha uma opção: `))
    let num1: number = Number(prompt(`Insira o primeiro número: `))
    let num2: number = Number(prompt(`Insira o segundo número: `))

    switch(calculadora){
        case 1:
            let soma: number = num1 + num2
            alert(`Soma dos números digitados: ${soma}`)
            break
        case 2:
            let subtracao: number = num1 - num2
            alert(`Subtração dos números digitados: ${subtracao}`)
            break
        case 3:
            let multiplicacao: number = num1 * num2
            alert(`Multiplicação dos números digitados: ${multiplicacao}`)
            break
        case 4:
            let divisao: number = num1 / num2
            alert(`Divisão dos números digitados: ${divisao}`)
            break
    }
}