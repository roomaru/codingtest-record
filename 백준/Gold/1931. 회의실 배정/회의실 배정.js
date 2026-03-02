const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let times = [];
for (let i = 1; i <= N; i++) {
  times.push(input[i].split(" ").map(Number));
}

// 정렬 기준: 1. 끝나는 시간이 빠른 2.시작시간이 빠른(끝나는 시간이 같을 경우)
// 최대한 많은 회의를 배정하려면 가장 빨리 끝나는 회의부터 선택해야 함
times.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let cnt = 0; // 회의 개수
let end = 0; // 회의 종료 시간

for (let i = 0; i < N; i++) {
  if (end <= times[i][0]) {
    // 현재 회의 시작 시간이 이전 회의 종료 시간과 동일하거나 이후일 경우
    end = times[i][1]; // 종료시간 === 현재 회의 종료 시간
    cnt += 1;
  }
}

console.log(cnt);