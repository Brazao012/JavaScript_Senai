const PromptSync = require("prompt-sync")();
let maior = 0;
let menor;

for (let i = 0; i <= 5; i++) {
  let Numero = Number(PromptSync("Digite seu número: "));
  if (i == 0) {
    maior = Numero;
    menor = Numero;
  } else {
    if (Numero < menor) {
      menor = Numero;
    } else if (Numero > maior) {
      maior = Numero;
    }
  }
}
console.log(maior);
console.log(menor);
