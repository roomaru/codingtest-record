function solution(clothes) {
    const counts = {};
    
    for (let i = 0; i < clothes.length; i++) {
        const key = clothes[i][1];
        counts[key] = (counts[key] || 0) + 1;
    }
    
    // n번 째 의상을 입는 경우 + 아예 안입는 경우 -> (n+1)
    // 의상마다의 경우를 모두 곱함 - 전부 안입는 경우
    return Object.values(counts).reduce((a, b) => a*(b+1), 1)-1;
}
