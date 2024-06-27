const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];
soma = 0;
for (let i = 0; i < numbers.length; i++) {
  for (let a = 0; a < numbers[i].length; a++) {
    soma = soma + numbers[i][a];
  }
}
console.log(soma);
