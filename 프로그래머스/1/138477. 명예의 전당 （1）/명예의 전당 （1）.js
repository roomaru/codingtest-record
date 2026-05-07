function solution(k, score) {
    var answer = [score[0]];
    var fame = [score[0]];
    
    for (let i = 1; i < score.length; i++) {
        if (fame.length < k) {
            fame.push(score[i]);
        } else if (score[i] > fame[fame.length - 1]) {
            fame.pop();
            fame.push(score[i]);
        }
        fame.sort((a, b) => b-a);
        answer.push(fame[fame.length - 1]);
    }
    
    return answer;
}

// 개선 코드
// function solution(k, score) {
//     const answer = [];
//     const fame = [];
    
//     for (const s of score) {
//         if (fame.length < k || s > fame[fame.length - 1]) {
//             fame.push(s);
//             fame.sort((a, b) => b-a);

//             if (fame.length > k) {
//                 fame.pop();
//             }
//         }
//         answer.push(fame[fame.length - 1]);
//     }
    
//     return answer;
// }
