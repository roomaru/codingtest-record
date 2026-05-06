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

// if (!dict[s[i]])는 틀림
// JS에서 0은 false로 평가되기 때문!
// 따라서, 값이 없는지가 아니라 key가 존재하는지를 확인해야 함
