function solution(number, k) {
    var res = [];
    res.push(number[0]);
    
    for (let i = 1; i < number.length; i++) {
        while (k > 0 && res[res.length-1] < number[i]) {
            res.pop();
            k--;
        }
        res.push(number[i])
    }
    
    if (k > 0) res = res.slice(0, res.length-k);
    
    return res.join("");
}