// 풀이 과정
// 1. n이 1 or 3일 경우에는 나눌 수 없음 -> -1 출력
// 2. 5원을 최대한 많이
// 3. 5원 거슬러주고 남은 돈은 짝수여야 함

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
