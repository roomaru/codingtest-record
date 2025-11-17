const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let [a, b] = input[i].split(" ").map(Number);

  let last = a % 10;
  if (last === 0) {
    console.log(10);
    continue;
  }

  let exp = b % 4;
  if (exp === 0) exp = 4;

  let result = 1;
  for (let j = 0; j < exp; j++) {
    result = (result * last) % 10;
  }

  console.log(result);
}
