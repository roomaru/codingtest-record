function solution(answers) {
    var scores = [0, 0, 0];
    var answer = [];
    
    const num1 = [1, 2, 3, 4, 5];
    const num2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === num1[i%5]) scores[0]++;
        if (answers[i] === num2[i%8]) scores[1]++;
        if (answers[i] === num3[i%10]) scores[2]++;
    }
    
    const maxScore = Math.max(...scores);
    for (let i = 0; i < 3; i++) {
        if (scores[i] === maxScore) answer.push(i+1);
    }
    
    return answer;
}