const PromptSync = require("prompt-sync")();
let Numero = Number(PromptSync("Digite um número maior que 0: "));
let contador = 0;

for (let i = 1; i <= Numero; i++) {
  if (Numero % i == 0) {
    contador++;
  }
}
if (contador == 2) {
  console.log(Numero + " é primo");
} else {
  console.log(Numero + "Não é primo");
}
