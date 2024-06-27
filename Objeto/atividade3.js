const prompt = require("prompt-sync")();
let arr = [];
const obj = {
  id: 1,
  nome: "",
};

for (let i = 0; i < 5; i++) {
  let p = String(prompt("Escreve seu nome: "));
  const obj = {
    id: 1 + i,
    nome: p,
  };
  arr.push(obj);
}
console.log(arr);
