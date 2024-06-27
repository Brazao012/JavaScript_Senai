const PromptSync = require("prompt-sync")();
let letra = String(PromptSync("Digite uma letra: "));

switch (letra) {
  case "a":
    console.log("Letra A digitada");
    break;
  case "b":
    console.log("Letra B digitada");
    break;
  default:
    console.log(
      "o prazo para as atividades está entre a letra G e K do teclado"
    );
}
