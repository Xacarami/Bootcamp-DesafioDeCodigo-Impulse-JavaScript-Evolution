// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface Funcionario {
    code: number,
    name: string
}

let employee: Funcionario = {
    code: 10,
    name: "John"
};
employee.code = 10;
employee.name = "John";