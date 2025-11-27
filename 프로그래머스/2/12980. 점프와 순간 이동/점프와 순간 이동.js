function solution(n) {
    var result = 0;
    
    while (n > 0) {
        if (n % 2 === 1) {
            result++;
            n--;
        } else {
            n /= 2;
        }
    }
    return result;
}