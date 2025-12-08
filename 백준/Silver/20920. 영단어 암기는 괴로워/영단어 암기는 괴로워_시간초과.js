const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let words = input.slice(1, 1 + N);

let vocab = {};

for (let word of words) {
  if (word.length < M) continue;
  vocab[word] = (vocab[word] || 0) + 1;
}

// 단어 길이 기준 정렬 빼먹음 -> 정렬 비교 함수가 불필요하게 많이 실행됨
let sortedVocab = Object.keys(vocab).sort((a, b) => {
  if (vocab[b] === vocab[a]) return a.localeCompare(b);
  return vocab[b] - vocab[a];
});

sortedVocab.forEach((word) => {
  console.log(word);
});
