let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().toUpperCase();
let dict = {};

for (let ch of input) {
  if (!dict[ch]) {
    dict[ch] = 1;
  } else {
    dict[ch] += 1;
  }
}

let maxVal = Math.max(...Object.values(dict));
let maxKey = Object.keys(dict).filter((key) => dict[key] === maxVal);

if (maxKey.length > 1) {
  console.log("?");
} else {
  console.log(maxKey.toString());
}