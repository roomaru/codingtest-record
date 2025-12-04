function solution(prices) { 
  var answer = []; 
  
  while (prices.length > 0) { 
    var first = prices.shift(); // shift 연산 -> 효율성 통과 X
    var cnt = 0; 
    
    for (let price of prices) { 
      if (price < first) { 
        cnt++; 
        break; 
      } else { 
        cnt++; 
      } 
    } 
    
    answer.push(cnt); 
  } 
  
  return answer; 
}

