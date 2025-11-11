function solution(answers) {
    var scores = [0, 0, 0];
    var answer = [];
    
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === a[i%5]) scores[0] += 1;
        if (answers[i] === b[i%8]) scores[1] += 1;
        if (answers[i] === c[i%10]) scores[2] += 1;
    }
    
    const max_score = Math.max(...scores);
    for (let i = 0; i < 3; i++) {
        if (scores[i] === max_score) {
            answer.push(i+1);
        }
    }
    
    return answer;
}