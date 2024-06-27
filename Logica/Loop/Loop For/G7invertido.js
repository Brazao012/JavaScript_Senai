const PromptSync = require("prompt-sync")();

let question = Number(PromptSync("Digite a altura do seu triangulo: "));

for (let i = 2; i <= question; i++) {
  console.log(" ".repeat(i), "*".repeat(question * 2 - i * 2 + 1));
}
