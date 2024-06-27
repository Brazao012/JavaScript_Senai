let i = 0;
let r = 0;

do {
  if (i % 2 != 0) {
    r = r + i;
  }
  i++;
} while (i <= 100);
console.log(r);
