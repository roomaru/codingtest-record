function solution(numbers) {
    var answer = Array(numbers.length).fill(-1);
    var stack = []; // 아직 뒷 큰수를 못 찾은 인덱스 저장
    
    for (let i = 0; i < numbers.length; i++) {
        while (
            stack.length > 0 &&
            numbers[stack[stack.length - 1]] < numbers[i]
        ) {
            const idx = stack.pop();
            answer[idx] = numbers[i];
        }
        
        stack.push(i);
    }
    
    return answer;
}

// 틀린 함수: 시간 초과(이중 포문)
// function solution(numbers) {
//     var answer = [];
    
//     for (let i = 0; i < numbers.length; i++) {
//         var flag = false;
        
//         for (let j = i+1; j < numbers.length; j++) {
//             if (numbers[i] < numbers[j]) {
//                 answer.push(numbers[j]);
//                 flag = true;
//                 break;
//             } else {
//                 flag = false;
//             }
//         }
//         if (!flag) answer.push(-1)
//     }
    
//     return answer;
// }
