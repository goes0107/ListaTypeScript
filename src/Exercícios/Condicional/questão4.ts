// 4. Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.

export function questao4condicional():void{
    let num: number = Number(window.prompt(`Insira o primeiro número: `))
    let valor2: number = Number(window.prompt(`Insira o segundo número: `))

    if (num == valor2){
        document.writeln(`Números iguais`)
    }

    else if (num > valor2){
        document.writeln(`Primeiro é maior`)
    }

    else if (valor2 > num){
        document.writeln(`Segundo é maior`)
    }
}