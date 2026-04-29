function solution(want, number, discount) {
    var answer = 0;
    
    for (let i = 0; i < discount.length; i++) {
        let cnt = 0;
        
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

// function solution(want, number, discount) {
//     let count = 0;
//     for (let i = 0; i < discount.length - 9; i++) {
//         const slice = discount.slice(i, i+10);

//         let flag = true;
//         for (let j = 0; j < want.length; j++) {
//             if (slice.filter(item => item === want[j]).length !== number[j]) {
//                 flag = false;
//                 break;
//             }
//         }
//         if (flag) count += 1;
//     }
//     return count;
// }
