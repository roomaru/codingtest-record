function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    let cnt = 0;
    let visited = Array(words.length).fill(false);
    let queue = [begin];
    
    while (queue.length > 0) {
        let level = queue.length;
        
        for (let i = 0; i < level; i++) {
            const start = queue.shift();
            if (start === target) {
                return cnt;
            }
            for (let word of words) {
                let word_cnt = 0;

                for (let i = 0; i < word.length; i++) {
                    if (start[i] !== word[i]) word_cnt += 1;
                }

                if (word_cnt === 1 && !visited[words.indexOf(word)]) {
                    visited[words.indexOf(word)] = true;
                    queue.push(word);
                }
            }
        }
        cnt += 1;
    }
}