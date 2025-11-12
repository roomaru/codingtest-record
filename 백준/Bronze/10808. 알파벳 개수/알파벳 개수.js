const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

var sentence = input.toUpperCase();
var alphabet = Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  alphabet[sentence.charCodeAt(i) - 65] += 1;
}

console.log(...alphabet);
