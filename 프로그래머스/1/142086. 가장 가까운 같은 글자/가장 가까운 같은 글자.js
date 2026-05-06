function solution(s) {
    var dict = {};
    var answer = [];
    
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in dict)) {
            answer[i] = -1;
            dict[s[i]] = i;
        } else {
            answer[i] = i - dict[s[i]];
            dict[s[i]] = i;
        }
    }
    return answer;
    
}