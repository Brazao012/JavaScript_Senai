prompt = require("prompt-sync")();
let p = Number(prompt(" Digite um número: "));

if (p > 5) {
  console.log("Número maior que 5");
} else {
  console.log("Número menor que 5");
}
