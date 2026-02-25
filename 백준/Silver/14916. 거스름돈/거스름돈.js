const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let cnt = 0;

if (n === 1 | n === 3) console.log(-1);
else {
  cnt += Math.floor(n / 5);
  n %= 5;

  if (n % 2 === 1) {
    n += 5;
    cnt -= 1;
  }

  cnt += Math.floor(n / 2);
  n %= 2;

  console.log(cnt);
}