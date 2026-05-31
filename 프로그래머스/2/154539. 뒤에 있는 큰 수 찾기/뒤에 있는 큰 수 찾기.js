function solution(numbers) {
    var answer = Array(numbers.length).fill(-1);
    var idx_stack = [];
    
    for (let i = 0; i < numbers.length; i++) {
        while (
            idx_stack.length > 0 &&
            numbers[idx_stack[idx_stack.length - 1]] < numbers[i]
        ) {
            const idx = idx_stack.pop();
            answer[idx] = numbers[i];
        }
        
        idx_stack.push(i);
    }
    
    return answer;
}