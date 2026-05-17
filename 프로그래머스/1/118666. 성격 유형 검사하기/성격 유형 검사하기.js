function solution(survey, choices) {
    var answer = '';
    const category = "RTCFJMAN";
    const score = {
      R: 0,
      T: 0,
      C: 0,
      F: 0,
      J: 0,
      M: 0,
      A: 0,
      N: 0
    };
    
    for (let i = 0; i < survey.length; i++) {
        if (choices[i] < 4) {
            score[survey[i].substring(0, 1)] += (4 - choices[i]);
        } else if (choices[i] > 4) {
            score[survey[i].substring(1, 2)] += (choices[i] - 4);
        }
    }
    
    for (let j = 0; j < 8; j += 2) {
        if (score[category[j]] > score[category[j + 1]]) {
            answer += category[j];
        } else if (score[category[j]] < score[category[j + 1]]) {
            answer += category[j + 1];
        } else {
            answer += category[j]; // 사전순으로 앞선 문자
        }
    }
    
    return answer;
}