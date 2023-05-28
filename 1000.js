let fs = require('fs');

let input  = fs.readFileSync('input.txt').toString().split(' ');

result = input.reduce((a,b) => parseInt(a) + parseInt(b));

console.log(result);