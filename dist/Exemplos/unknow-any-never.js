"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = "kk";
anyEstaDeVolta = 5;
let stringTeste = "Grande salve";
stringTeste = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = "eae";
unknownValor = true;
unknownValor = "Confia";
let stringTeste2 = "Zero erro";
// stringTeste2 = unknownValor; //não garante o que tem
if (typeof unknownValor === "string") {
    stringTeste2 = unknownValor;
}
//Never: código que nunca finalizou, diferente do void
function jogaErro(erro, codigo, seila) {
    throw { error: erro, code: codigo, chute: seila };
}
jogaErro("deu erro ae", 500, "nao sei");
