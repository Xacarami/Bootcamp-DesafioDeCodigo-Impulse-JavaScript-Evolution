"use strict";
const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissão: "desenvolvedora"
};
pessoa.idade = 29;
const andre = {
    nome: "Andre",
    idade: 2,
    profissao: "pintor"
};
const paula = {
    nome: "Paula",
    idade: 2,
    profissao: "pintor"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Arquiteto"] = 3] = "Arquiteto";
})(Profissao || (Profissao = {}));
const wanessa = {
    nome: "Wanessa",
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: "Maria",
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const marcelo = {
    nome: "Marcelo",
    idade: 20,
    profissao: Profissao.Arquiteto,
    materias: ["Física", "Química"]
};
const kamilly = {
    nome: "Kamilly",
    idade: 19,
    materias: ["História", "Português"]
};
function listar(lista) {
    for (const item of lista) {
        console.log("- ", item);
    }
}
listar(marcelo.materias);
