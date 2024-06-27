const PromptSync = require("prompt-sync")();
let numo = 0;
let result;

for (i = 1; i <= 10; i++) {
  let alo = Number(PromptSync(" Digite seu número maior que zero: "));
  numo = numo + alo;
  if (i == 10) {
    result = numo / i;
  }
}
console.log(result);
