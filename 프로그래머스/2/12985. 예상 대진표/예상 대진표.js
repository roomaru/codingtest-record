function solution(n,a,b)
{
    var answer = 0;
    
    if (a > b) {
        let k = a;
        a = b;
        b = k;
    }

    // a == b -> 바로 직전 라운드에서 서로 붙음
    while (a !== b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++;
    }
    
    return answer;
}
