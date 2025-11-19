const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [x1, y1] = input[0].split(" ").map(Number);
const [x2, y2] = input[1].split(" ").map(Number);
const [x3, y3] = input[2].split(" ").map(Number);

const cross = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1);

if (cross > 0) {
  console.log(1);
} else if (cross < 0) {
  console.log(-1);
} else {
  console.log(0);
}
