let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

if (input === 1) {
  console.log(1);
} else {
  let layer = 1;
  let end_num = 1;
  let add = 6;
  while (input > end_num) {
    end_num += add;
    layer += 1;
    add += 6;
  }
  console.log(layer);
}