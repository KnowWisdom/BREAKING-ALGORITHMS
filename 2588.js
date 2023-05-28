// 곱셈 

let fs = require('fs');

let input  = fs.readFileSync('input.txt').toString().split('\n');

let a = Number(input[0]);
let b = input[1];

let split_b = b.split('').map(Number);

console.log(a * b[2]);
console.log(a * b[1]);
console.log(a * b[0]);
console.log(a * b);