const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const P = parseInt(input[0]);
const cases = input.slice(1);

for (let line of cases) {
  let cnt = 0;
  const arr = line.split(" ").map(Number);
  const T = arr[0];
  const num = arr.slice(1);

  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] > num[j]) {
        cnt += 1;
      }
    }
  }

  console.log(T, cnt);
}
