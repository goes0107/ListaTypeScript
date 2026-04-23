// 3. Crie uma função que recebe um número (ex: 5) e em seguida utilize loops aninhados para
// desenhar um triângulo de asteriscos no console.
// Exemplo para entrada 3:
// *
// **
// ***

export function questao3funcao():void{
    function triangulos(num: number):any{
        for (let i = 1; i <= num; i++){
            console.log(`*`.repeat(i))
        }
    }

    let numTri: number = Number(prompt(`Insira um número: `))

    triangulos(numTri)
}