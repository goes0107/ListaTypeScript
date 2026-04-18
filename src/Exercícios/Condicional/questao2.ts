// 2. Crie um programa chamado Estações. Este programa deve ler uma data e armazenar na
// variável mês, um número entre 1 e 12, correspondendo a um dos meses do ano. No final,
// você deve imprimir uma mensagem conforme o exemplo: &quot;A estação do ano correspondente
// ao mês 3 é Verão&quot; Considere a estação prevalente para cada mês:
// a) Janeiro (1): Verão
// b) Fevereiro (2): Verão
// c) Março (3): Verão
// d) Abril (4): Outono
// e) Maio (5): Outono
// f) Junho (6): Outono
// g) Julho (7): Inverno
// h) Agosto (8): Inverno
// i) Setembro (9): Inverno
// j) Outubro (10): Primavera
// k) Novembro (11): Primavera
// l) Dezembro (12): Primavera
export function questao2condicional():void{
    let mes: number = Number(window.prompt(`Digite um número entre 1 e 12 que represente cada mês do ano.`))

    if ((mes == 1) || (mes == 2) || (mes == 3)){
        alert(`A estação do ano correspondente ao mês ${mes} é Verão`)
    }

    else if ((mes == 4) || (mes == 5) || (mes == 6)){
        alert(`A estação do ano correspondente ao mês ${mes} é Outono`)
    }

    else if ((mes == 7) || (mes == 8) || (mes == 9)){
        alert(`A estação do ano correspondente ao mês ${mes} é Inverno`)
    }

    else if ((mes == 10) || (mes == 11) || (mes == 12)){
        alert(`A estação do ano correspondente ao mês ${mes} é Primavera`)
    }
}