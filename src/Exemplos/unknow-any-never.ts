let anyEstaDeVolta: any;
anyEstaDeVolta = 3
anyEstaDeVolta = "kk"
anyEstaDeVolta = 5

let stringTeste: string = "Grande salve"
stringTeste = anyEstaDeVolta



let unknownValor: unknown;
unknownValor = 3;
unknownValor = "eae";
unknownValor = true;
unknownValor = "Confia"


let stringTeste2: string = "Zero erro"
// stringTeste2 = unknownValor; //não garante o que tem

if(typeof unknownValor === "string"){
    stringTeste2 = unknownValor;
}

        //Never: código que nunca finalizou, diferente do void


function jogaErro(erro: string, codigo: number, seila: string):never{
    throw {error: erro, code: codigo, chute: seila}
}

jogaErro("deu erro ae", 500, "nao sei")