function solution(number, k) {
    var res = [];
    res.push(number[0]);

    for (let i = 1; i < number.length; i++) {
        // 앞자리 숫자를 최대한 크게 가져가야 함
        // 마지막 값보다 작거나 같으면 그냥 넣고, 마지막 값보다 크면 마지막 값을 제거하고 넣어줌
        while (k > 0 && res[res.length-1] < number[i]) {
            res.pop();
            k--;
        }
        res.push(number[i])
    }
    
    if (k > 0) res = res.slice(0, res.length-k);
    
    return res.join("");
}
