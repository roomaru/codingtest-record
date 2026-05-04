function solution(array, commands) {
    var answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        // 1. i번째부터 j번째까지 자르기
        const arr = array.slice(commands[i][0]-1, commands[i][1]);
        
        // 2. 배열 정렬
        arr.sort((a, b)=>a-b);
        
        // 3. k번째 숫자 선택
        answer.push(arr[commands[i][2]-1]);
    }
    
    return answer;
}