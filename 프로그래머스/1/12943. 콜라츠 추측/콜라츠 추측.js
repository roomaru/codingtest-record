function solution(num) {
    let cnt = 0;
    
    if (num === 1) return 0;
    
    while (true) {
        if (num % 2 === 0) num = Math.floor(num/2);
        else num = num * 3 + 1;
        
        cnt++;
        
        if (cnt === 500) return -1;
        else if (num === 1) return cnt;
    }
}