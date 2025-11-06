const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);

if (N % 2 === 0) {
  console.log("CY");
} else {
  console.log("SK");
}
