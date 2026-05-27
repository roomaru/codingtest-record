function solution(n) {
    
    return n === 1 ? '수' : '수박'.repeat(n-1).substring(0, n) ;  
}