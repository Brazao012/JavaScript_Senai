const PromptSync = require("prompt-sync")();
let i = 1;
let x = 0;
let y = 0;
while (i <= 10) {
  let question = Number(PromptSync("Digite um número: "));
  if (i == 1) {
    x = question;
    y = question;
  }
  if (question > x) {
    x = question;
  }
  if (question < y) {
    y = question;
  }
  i++;
}
console.log(x + "É o maior número e" + y + " é o menor");
