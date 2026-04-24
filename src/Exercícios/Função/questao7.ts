// 7. Sistema de Eficiência de Combustível
// Crie um programa que ajude um motorista a saber a autonomia do seu carro.
//  Função 1: Recebe a distância percorrida e a quantidade de combustível gasta, retornando
// o consumo médio (km/l).
//  Função 2: Recebe o consumo médio e a capacidade total do tanque, retornando quantos
// quilômetros o carro percorre com o tanque cheio.

export function questao7funcao():void{
    function consumoMedio(distanciaPercorrida: number, combustivelGasto: number):number{
        let consuMedio: number = distanciaPercorrida / combustivelGasto
        return consuMedio
    }

    function autonomia(consuMedio: number, capTotalTanque: number):number{
        let autonomia: number = consuMedio * capTotalTanque
        return autonomia
    }

    let dispercorrida: number = Number(prompt(`Insira a distância total percorrida em km: `))
    let combGasto: number = Number(prompt(`Insira o total de combustível gasto em litros: `))
    let qntTotalTanque: number = Number(prompt(`Insira a capacidade total do tanque em litros: `))

    let consuMedio = consumoMedio(dispercorrida, combGasto)
    let autonomiaCarro = autonomia(consuMedio, qntTotalTanque)
    console.log(`O consumo médio do carro é de ${consuMedio.toFixed(2)} km/l`)
    console.log(`A autonomia do carro com o tanque cheio é de ${autonomiaCarro.toFixed(2)} km`)
}