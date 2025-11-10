function solution(n, computers) {
    let visited = Array(n).fill(false);
    let cnt = 0;
    
    function dfs(node) {
        if (visited[node]) return;
        visited[node] = true;
        
        for (let i = 0; i < n; i++) {
            if (computers[node][i] && !visited[i]) {
                dfs(i);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            cnt++;
        }
    }
    
    return cnt;
}