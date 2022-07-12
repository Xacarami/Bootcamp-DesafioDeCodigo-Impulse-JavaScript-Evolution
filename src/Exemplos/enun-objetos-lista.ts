const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissão: "desenvolvedora"
};

pessoa.idade = 29;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: "Andre",
    idade: 2,
    profissao: "pintor"
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: "Paula",
    idade: 2,
    profissao: "pintor"
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Arquiteto
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao;
}

interface Estudante extends Pessoa {
    materias: string[]
}

const wanessa: Pessoa = {
    nome: "Wanessa",
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: "Maria",
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const marcelo: Estudante = {
    nome: "Marcelo",
    idade: 20,
    profissao: Profissao.Arquiteto,
    materias: ["Física", "Química"]
}

const kamilly: Estudante = {
    nome: "Kamilly",
    idade: 19,
    materias: ["História", "Português"]
}


function listar(lista: string[]) {
    for(const item of lista){
        console.log("- ", item);
    }
}

listar(marcelo.materias)