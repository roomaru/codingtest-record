const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const info = input.slice(1).map((line) => line.split(" ").map(Number));

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

var paints = [];
var visited = Array.from({ length: n }, () => Array(m).fill(false));
var queue = [];
var size = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j] && info[i][j] === 1) {
      size = 0;
      queue = [[i, j]];
      visited[i][j] = true;

      while (queue.length > 0) {
        const [x, y] = queue.shift();
        size++;

        for (let [dx, dy] of directions) {
          const nx = x + dx,
            ny = y + dy;

          if (
            nx >= 0 &&
            nx < n &&
            ny >= 0 &&
            ny < m &&
            info[nx][ny] === 1 &&
            !visited[nx][ny]
          ) {
            queue.push([nx, ny]);
            visited[nx][ny] = true;
          }
        }
      }
      paints.push(size);
    }
  }
}

console.log(paints.length);
console.log(paints.length > 0 ? Math.max(...paints) : 0);
