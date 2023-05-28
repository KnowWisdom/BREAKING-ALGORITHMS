// 사칙연산

let fs = require('fs');
let inputs = fs.readFileSync('input.txt').toString().split('\n');
let input = inputs[0].split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);


console.log(a/b);
console.log(`${a+b}\n${a-b}\n${a*b}\n${Math.floor(a/b)}\n${a%b}`)