function solution(s){
    let p = 0, y = 0;
    
    for (let ch of s.toLowerCase()) {
        if (ch === 'p') p++;
        else if (ch === 'y') y++;
    }
    
    return p === y;
}