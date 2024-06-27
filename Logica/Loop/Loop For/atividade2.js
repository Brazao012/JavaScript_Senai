const PromptSync = require("prompt-sync")();
let Numero = Number(PromptSync("Digite um número maior que 0: "));

if (Numero <= 0) {
  console.log("Precisa ser um número maior que 0");
} else
  for (let i = 0; i <= Numero; i++) {
    console.log(i);
  }
