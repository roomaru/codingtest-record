const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0];
const nodes = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));
const adj = Array.from({ length: N + 1 }, () => []);
for (const [a, b] of nodes) {
  adj[a].push(b);
  adj[b].push(a);
}

const parent = Array(N + 1).fill(0);
const visited = Array(N).fill(false);

function dfs(node) {
  if (visited[node]) return;
  visited[node] = true;

  for (const next of adj[node]) {
    if (!visited[next]) {
      parent[next] = node;
      dfs(next);
    }
  }
}

dfs(1);
for (let i = 2; i <= N; i++) {
  console.log(parent[i]);
}
