let fs = require("fs");
let [H, W, N, M] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = 0;
answer = Math.ceil(H / (N + 1)) * Math.ceil(W / (M + 1));

console.log(answer);