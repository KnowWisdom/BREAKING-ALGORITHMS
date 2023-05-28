let fs = require('fs');

let inputs = fs.readFileSync('input.txt').toString().split(' ');

let a = parseInt(inputs[0]);
let b = parseInt(inputs[1]);

console.log(a*b);