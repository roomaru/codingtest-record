function solution(s){
    var stack = [];
    
    for (let char of s) {
        if (char === "(") stack.push(char);
        else {
            if (stack.length === 0 || stack.pop() !== "(") return false;
        }
    }

    return stack.length === 0;
}