function solution(name, yearning, photo) {
    const answer = [];
    const dict = {};
    
    for (let i = 0; i < name.length; i++) {
        dict[name[i]] = yearning[i];
    }
    
    for (let i = 0; i < photo.length; i++) {
        let score = 0;
        
        for (let c of photo[i]) {
            if (c in dict) score += dict[c];
        }
        
        answer.push(score);
    }
    
    return answer;
}