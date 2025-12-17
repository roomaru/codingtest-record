function solution(elements) {
    var answer = new Set();
    var arr = elements.concat(elements);
    const n = elements.length;
    
    for (let len = 1; len <= n; len++) {
        for (let start = 0; start < n; start++) {
            let sum = 0;
            for (let i = start; i < start + len; i++) {
                sum += arr[i];
            }
            answer.add(sum);
        }
        
    }
    
    return answer.size;
}