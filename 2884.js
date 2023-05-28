// 알람 시계

let fs = require('fs');
let inputs = fs.readFileSync('input.txt').toString().split('\n');
let input = inputs[0].split(' ').map(Number);

const min = 45;

let h = input[0];
let m = input[1];

if (m < min) {
    h -= 1;
    m += 15;

    if(h < 0) h = 23;
}
else m -= 45;

console.log(h, m);

