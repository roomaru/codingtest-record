function solution(want, number, discount) {
    var answer = 0;
    
    for (let i = 0; i < discount.length; i++) {
        let cnt = 0;
        
        if (i+10 > discount.length) break;
        
        let product = discount.slice(i, i+10);
        
        for (let j = 0; j < want.length; j++) {
            let count = product.filter(f => f === want[j]).length;
            
            if (count === number[j]) cnt++;
            else break;
        }
        
        if (cnt === want.length) answer++;
    }
    
    return answer;
}