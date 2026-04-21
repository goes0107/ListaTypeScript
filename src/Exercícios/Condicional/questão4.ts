// 4. Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.

export function questao4condicional():void{
    let num1: number = Number(window.prompt(`Insira o primeiro número: `))
    let num2: number = Number(window.prompt(`Insira o segundo número: `))

    if (num1 == num2){
        console.log(`Números iguais`)
    }

    else if (num1 > num2){
        console.log(`Primeiro é maior`)
    }

    else if (num2 > num1){
        console.log(`Segundo é maior`)
    }
}