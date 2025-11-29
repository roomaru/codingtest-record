function solution(k, tangerine) {
    var arr = Array(Math.max(...tangerine)).fill(0);
    var result = 0
    
    tangerine.forEach((size) => {
        arr[size-1]++;
    });
    
    arr.sort((a, b) => b-a);
    
    for (let i = 0; i < arr.length; i++) {
        k -= arr[i];
        result++;
        
        if (k <= 0) break;
    }
    
    return result;
}