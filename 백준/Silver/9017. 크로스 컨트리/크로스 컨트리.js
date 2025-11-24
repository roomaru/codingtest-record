const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let T = Number(input.shift());
let line = 0;

for (let t = 0; t < T; t++) {
  const N = Number(input[line++]);
  const arr = input[line++].split(" ").map(Number);

  let teamCount = {};
  arr.forEach(team => {
    if (!teamCount[team]) teamCount[team] = 1;
    else teamCount[team]++;
  });

  // 6명 미만 팀 제거
  let invalid = new Set();
  Object.entries(teamCount).forEach(([team, cnt]) => {
    if (cnt < 6) invalid.add(Number(team));
  });

  // 점수 계산
  // score[team] = [pickedCount(4명까지), sumOfRanks, sixthRank]
  let score = {};

  let rank = 1; // 등수는 등장 순서대로 증가
  for (let i = 0; i < N; i++) {
    const team = arr[i];
    if (invalid.has(team)) continue;

    if (!score[team]) score[team] = [0, 0, 0];

    if (score[team][0] < 4) {
      score[team][0]++;
      score[team][1] += rank;  // 점수 합
    } else if (score[team][0] === 4) {
      score[team][0]++;
      score[team][2] = rank;   // 6번째 선수 점수
    }
    rank++;
  }

  // 우승팀 정렬
  const answer = Object.entries(score)
    .sort((a, b) => {
      const [teamA, valA] = a;
      const [teamB, valB] = b;

      if (valA[1] === valB[1]) return valA[2] - valB[2]; // 동점 → 6번째 선수 등수 비교
      return valA[1] - valB[1]; // 점수 낮은 팀 우선
    })[0][0];

  console.log(answer);
}
