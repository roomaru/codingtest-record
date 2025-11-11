function solution(tickets) {
    var answer = [];
    var visited = Array(tickets.length).fill(false);
    
    tickets.sort();
    
    function dfs(path) {
        if (path.length === tickets.length + 1) {
            answer.push(path);
            return;
        }
        
        for (let i = 0; i < tickets.length; i++) {
            if (!visited[i] && tickets[i][0] === path[path.length - 1]) {
                visited[i] = true;
                dfs([...path, tickets[i][1]]);
                visited[i] = false;
            }
        }
    }
    
    dfs(["ICN"]);
    return answer[0];
}
