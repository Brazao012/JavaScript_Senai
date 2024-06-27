const PromptSync = require("prompt-sync")();
let x = Number(PromptSync(" Digite um número: "));
let i = 1;
let contador = 0;

do {
  if (x % i == 0) {
    contador++;
  }

  i++;
} while (i <= x);
if (contador == 2) {
  console.log("É um número primo");
} else console.log(" Não é um número primo");
