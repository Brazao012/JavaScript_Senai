let arr = ["amora", "ameira", "abacate"];

arr.unshift("banana", "bergamota");

console.log(arr + " " + arr.length);

let arr1 = arr.shift();
let arr2 = arr.shift();
let arr3 = arr.shift();
let ultimo = [arr1 + arr2 + arr3];

console.log(ultimo);
