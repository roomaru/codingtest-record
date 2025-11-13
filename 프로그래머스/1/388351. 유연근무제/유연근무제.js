function solution(schedules, timelogs, startday) {
    var answer = 0;
    var timein = 0;
    
    function calculateTime(n) {
        let hour = Math.floor(n / 100);
        let min = n % 100 + 10;
        
        if (min >= 60) {
            hour++;
            min -= 60;
        }
        
        return hour*100+min;
    }
    
    for (let i = 0; i < schedules.length; i++) {
        let schedule = calculateTime(schedules[i]);
        
        for (let j = 0; j < 7; j++) {
            let day = (startday + j) % 7;
            if (day === 6 || day === 0) continue;
            if (timelogs[i][j] <= schedule) timein++;
        }
        
        if (timein === 5) answer++;
        timein = 0;
    }
    
    return answer;
}
