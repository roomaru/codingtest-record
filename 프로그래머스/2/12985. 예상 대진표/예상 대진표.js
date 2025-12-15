function solution(n,a,b)
{
    var answer = 0;
    
    if (a > b) {
        let k = a;
        a = b;
        b = k;
    }
    
    while (a !== b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++;
    }
    
    return answer;
}