const PromptSync = require("prompt-sync")();

const x = 12;

while (true) {
  let question = Number(
    PromptSync("Acerte o número que estou pensando entre 1 e 20: ")
  );
  if (question < x) {
    console.log("O meu número é menor que esse");
  }
  if (question > 12) {
    console.log("O meu número é maior que esse");
  }
  if (question == x) {
    console.log("PARABÉNS VOCÊ ACERTOU!!");
    break;
  }
}
