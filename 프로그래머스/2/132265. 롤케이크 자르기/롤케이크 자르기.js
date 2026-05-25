function solution(topping) {
    var answer = 0;
    
    const left = new Map();
    const right = new Map();
    
    // 처음에는 모든 토핑이 오른쪽에 있다고 가정
    for (let t of topping) {
        right.set(t, (right.get(t) || 0) + 1);
    }
    
    for (let i = 0; i < topping.length - 1; i++) {
        const t = topping[i];
        
        // 왼쪽에 토핑 추가
        left.set(t, (left.get(t) || 0) + 1);
        
        // 오른쪽에서 토핑 제거 (왼쪽으로 옮김)
        right.set(t, right.get(t) - 1);
        
        if (right.get(t) === 0) right.delete(t);
        
        if (left.size === right.size) answer++;
    }
    
    return answer;
}

// 틀린 코드: 정확성은 맞으나 시간 초과 -> 반복문마다 slice() + Set()을 새로 만들기 때문 (O(N^2))
// function solution(topping) {
//     var answer = 0;
    
//     for (let i = 1; i < topping.length; i++) {
//         let cake1 = [...new Set(topping.slice(0, i))];
//         let cake2 = [...new Set(topping.slice(i))];
        
//         if (cake1.length === cake2.length) answer++;
//     }
    
//     return answer;
// }


