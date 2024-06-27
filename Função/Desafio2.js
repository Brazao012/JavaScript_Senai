const PromptSync = require("prompt-sync")();

x = Number(PromptSync("Digite um número: "));
y = Number(PromptSync("Digite um número: "));

function soma(a, z) {
  console.log(a + z);
}
function sub(a, z) {
  console.log(a - z);
}

function mult(a, z) {
  console.log(a * z);
}
function div(a, z) {
  console.log(a / z);
}

const calc = Number(
  PromptSync(
    "Qual operação deseja realizar: 1- soma, 2- subtração, 3-Multiplicação, 4-Divisão: "
  )
);
switch (calc) {
  case 1:
    soma(x, y);
    break;
  case 2:
    sub(x, y);
    break;
  case 3:
    mult(x, y);
    break;
  case 4:
    div(x, y);
    break;
  default:
    console.log("Opção inválida");
}
