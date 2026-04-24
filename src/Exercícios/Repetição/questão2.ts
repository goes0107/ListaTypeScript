// 2. Desenvolva a tabuada de um número usando for.

export function questao2repeticao():void{
    let num: number = Number(prompt(`Insira o número que você deseja saber a tabuada: `))
    
    for (let i = 1; i <= 10; i++) {
        let multiNum: number = num * i
        let resultado: string = `${num} x ${i} = ${multiNum} \n`
        console.log(resultado)
    }
}