const numbers = [
  [1, 2, 3],
  [4, 5, 6],
];
let s1 = 1;
let s2 = 1;

for (let i = 0; i < numbers.length; i++) {
  for (let a = 0; a < numbers[i].length; a++) {
    if (i < 1) {
      s1 = s1 * numbers[i][a];
    } else {
      s2 = s2 * numbers[i][a];
    }
  }
}
console.log(s1);
console.log(s2);
