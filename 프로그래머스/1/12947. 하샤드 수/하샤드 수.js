function solution(x) {
    const num = String(x).split("").map(Number).reduce((a, b) => a+b, 0);
    return !(x % num);
}