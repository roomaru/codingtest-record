const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let words = input.slice(1, 1 + N);

let vocab = {};

for (let word of words) {
  if (word.length < M) continue;
  vocab[word] = (vocab[word] || 0) + 1;
}

let sortedVocab = Object.keys(vocab).sort((a, b) => {
  if (vocab[a] !== vocab[b]) return vocab[b] - vocab[a]; // 빈도수 내림차순
  if (a.length !== b.length) return b.length - a.length; // 길이 내림차순
  return a.localeCompare(b); // 사전순 -> localeCompare: 문자열을 사전순으로 비교
});

console.log(sortedVocab.join("\n"));