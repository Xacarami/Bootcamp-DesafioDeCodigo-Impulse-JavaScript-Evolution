"use strict";
//Funções que não retornam nada são void
function printaValoresNumericos(n1, n2) {
    console.log(n1 + n2);
}
function somarValoresNumericosETratar(n1, n2, callback) {
    let resultado = n1 + n2;
    return callback(resultado);
}
function aoQuadrado(n1) {
    return n1 * n1;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
