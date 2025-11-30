function solution(n, lost, reserve) {
    var answer = 0;
    
    lost.sort((a, b) => a-b);
    reserve.sort((a, b) => a-b);
    
    // 여벌 체육복을 가져온 학생이 체육복을 도난 당했을 경우 처리
    const dup = lost.filter(l => reserve.includes(l));
    lost = lost.filter(l => !dup.includes(l));
    reserve = reserve.filter(r => !dup.includes(r));
    
    // 체육복 빌릴 수 있는지 계산
    for (let i = 0; i < lost.length; i++) {
        // 앞 학생에게 빌릴 경우
        if (reserve.includes(lost[i] - 1)) {
            answer++;
            reserve = reserve.filter(r => r !== (lost[i] - 1));
        } 
        
        // 뒷 학생에게 빌릴 경우
        else if (reserve.includes(lost[i] + 1)) {
            answer++;
            reserve = reserve.filter(r => r !== (lost[i] + 1));
        }
    }
    
    // 처음부터 체육복 있었던 학생 + 빌린 학생
    return n - lost.length + answer;
}