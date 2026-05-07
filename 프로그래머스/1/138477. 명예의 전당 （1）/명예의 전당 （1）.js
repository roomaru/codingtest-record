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