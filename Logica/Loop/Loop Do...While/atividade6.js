const PromptSync = require("prompt-sync")();
let x = Number(PromptSync("Digite um número: "));
let fatorial = 1;
let contador = 1;

do {
  fatorial = fatorial * contador;
  contador++;
} while (contador <= x);
console.log(fatorial);
