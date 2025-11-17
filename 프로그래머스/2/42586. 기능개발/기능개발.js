function solution(progresses, speeds) {
    var days = [];
    var answer = [];
    
    for (let i = 0; i < progresses.length; i++) {
        let day = 0;
        
        while (progresses[i] < 100) {
            day++;
            progresses[i] += speeds[i];
        }
        
        days.push(day);
    }
    
    while (days.length > 0) {
        let cnt = 1;
        let cur = days.shift();
        
        while (true) {
            if (days[0] <= cur) {
                cnt++;
                days.shift();
            } else break;
        }
        
        answer.push(cnt);
    }

    return answer;
}