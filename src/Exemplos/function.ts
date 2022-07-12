            //Funções que não retornam nada são void

function printaValoresNumericos(n1: number, n2: number):void{
    console.log(n1+n2)
}



function somarValoresNumericosETratar(n1: number, n2: number, callback: (numero: number) => number): number{
    let resultado = n1 + n2;
    return callback(resultado)
}

function aoQuadrado(n1: number): number{
    return n1 * n1
}

function dividirPorEleMesmo(numero: number): number{
    return numero / numero
}

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado))
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo))