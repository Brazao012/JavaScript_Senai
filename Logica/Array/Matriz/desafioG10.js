const arr = [
  [12, -8, 15, 6],
  [1, 6, 20, -9],
  [0, -4, 0, -8],
  [-1, 6, 0, 15],
];
let da = 0;
let db = 0;
for (let i = 0; i < arr.length; i++) {
  da = da + arr[i][i];
  db += arr[i][arr.length - 1 - i];
}
console.log("A soma da diagonal A é ", da);
console.log("A soma da diagonal B é ", db);
console.log(da - db);
