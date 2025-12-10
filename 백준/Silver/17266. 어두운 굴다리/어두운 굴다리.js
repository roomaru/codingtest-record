const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let M = Number(input[1]);
let locations = input[2].split(" ").map(Number);

let left = 0;
let right = N;
let answer = N;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let bool = true;

  // 1) 첫 번째 가로등이 0을 덮는지 확인
  if (locations[0] - mid > 0) bool = false;

  // 2) 가로등 사이의 빈 구간이 없는지 확인
  for (let i = 0; i < M - 1; i++) {
    let prevEnd = locations[i] + mid;
    let nextStart = locations[i + 1] - mid;
    if (prevEnd < nextStart) {
      bool = false;
      break;
    }
  }

  // 3) 마지막 가로등이 N을 덮는지 확인
  if (locations[M - 1] + mid < N) bool = false;

  // 탐색 방향 조절
  if (bool) {
    answer = mid;
    right = mid - 1;
  } else left = mid + 1;
}

console.log(answer);
