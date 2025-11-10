const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, V] = input[0].split(" ").map(Number);
const edges = input.slice(1, 1 + M).map((line) => line.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
for (let [a, b] of edges) {
  graph[a].push(b);
  graph[b].push(a);
}
graph.forEach((neighbors) => neighbors.sort((a, b) => a - b));

let visited = Array(N + 1).fill(false);

function dfs(node) {
  if (visited[node]) return;
  visited[node] = true;
  process.stdout.write(node + " ");
  for (let next of graph[node]) {
    if (!visited[next]) dfs(next);
  }
}

function bfs(start) {
  const queue = [start];
  visited = Array(N + 1).fill(false);
  visited[start] = true;

  while (queue.length) {
    const node = queue.shift();
    process.stdout.write(node + " ");
    for (let next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
}

dfs(V);
console.log();
bfs(V);
console.log();
