// 2. Desenvolva a tabuada de um número usando for.

export function questao2repeticao():void{
    let num: number = Number(prompt(`Insira o número que você deseja saber a tabuada: `))
    let resultado: string = ""
    
    for (let i = 1; i <= 10; i++) {
        let multiNum: number = num * i
        resultado = resultado + `${num} x ${i} = ${multiNum} \n`
    }
    
    console.log(`TABUADA DO ${num}: \n${resultado}`)
}