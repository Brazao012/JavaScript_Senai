const PromptSync = require("prompt-sync")();
let question = Number(PromptSync("Digite a altura do seu Triangulo: "));
for (let i = 1; i <= question; i++) {
  console.log(" ".repeat(question - i), "*".repeat(i + i - 1));
}
