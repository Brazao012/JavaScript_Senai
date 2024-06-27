const numbers = [
  [10, 20, 30],
  [10, 20, 30],
];
let x = [];

for (let i = 0; i < numbers[0].length; i++) {
  let result = 1;
  for (let a = 0; a < numbers.length; a++) {
    result *= numbers[a][i];
  }

  console.log(result);
}
