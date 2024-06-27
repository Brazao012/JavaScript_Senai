const arr = [5, 2, 1, 2, 3, 4, 2, 5, 1, 6, 3, 6, 2, 1];
arr.sort();

for (i = 0; i < arr.length; i++) {
  if ((i == arr.indexOf(arr[i])) == false) {
    arr.splice(i, i-- - i);
  }
}
console.log(arr);
