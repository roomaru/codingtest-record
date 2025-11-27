function solution(n, words) {
    var checked = [words[0]];
    
    for (let i = 1; i < words.length; i++) {
        if (words[i].startsWith(checked[i-1][checked[i-1].length -1]) && !checked.includes(words[i])) {
            checked.push(words[i])
        } else {
            return [i%n+1, Math.floor(i/n)+1]
        }
    }
    return [0, 0]
}