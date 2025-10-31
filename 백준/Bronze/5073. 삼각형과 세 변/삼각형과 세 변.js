let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let line of input) {
  let [a, b, c] = line
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  if (a === 0 && b === 0 && c === 0) {
    break;
  }

  if (a + b <= c) console.log("Invalid");
  else if (a === b && b === c) console.log("Equilateral");
  else if (a === b || b === c || a === c) console.log("Isosceles");
  else console.log("Scalene");
}
