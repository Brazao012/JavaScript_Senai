const PromptSync = require("prompt-sync")();
let i = 0;
let maior = 0;
let menor;

do {
  let x = Number(PromptSync("Digite um número: "));
  if (i <= 0) {
    maior = x;
    menor = x;
  }
  if (x > maior) {
    maior = x;
  }
  if (x < menor) {
    menor = x;
  }
  i++;
} while (i < 10);
console.log(maior + " É o maior e " + menor + " é o menor");
