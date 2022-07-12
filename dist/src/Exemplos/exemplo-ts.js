"use strict";
const button = document.getElementById("button");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
function soma(n1, n2, devePrintar) {
    let resultado = n1 + n2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return n1 + n2;
}
let devePrintar = true;
let frase;
frase = "O valor é: ";
if (button) {
    button.addEventListener("click", () => {
        if (input1 && input2) {
            console.log(soma(Number(input1.value), Number(input2.value), devePrintar));
        }
    });
}
