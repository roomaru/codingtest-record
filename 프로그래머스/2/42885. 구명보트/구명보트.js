function solution(people, limit) {
    // 무거운 사람을 먼저 태우고 가벼운 사람 태우기
    let cnt = 0;
    let l = 0;
    let r = people.length-1;
    
    people.sort((a, b) => a-b); 
    
    while (l <= r) {
        if (people[l] + people[r] <= limit) l += 1;
        r -= 1;
        cnt += 1;
    }
    
    return cnt;
}