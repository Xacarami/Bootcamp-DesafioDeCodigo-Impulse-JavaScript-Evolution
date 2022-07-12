// Como podemos melhorar o esse código usando TS? 
interface Pessoa{
    nome: string,
    idade: number,
    profissao: "Atriz"| "Padeiro"
}


let pessoa1: Pessoa = {
    nome: "maria",
    idade: 29,
    profissao: "Atriz"      //profissao escrito com A minúsculo
}

let pessoa2: Pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro",
}


let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,      //sem o interface, eu nao saberia que essa idade era string
    profissao: "Atriz"
};

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: "Padeiro"    //P estava minúsculo
}