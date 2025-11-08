function solution(lottos, win_nums) {
    let cnt = 0;
    for (let win_num of win_nums) {
        if (lottos.includes(win_num)) {
            cnt += 1;
        }
    }
    if (cnt === 0) {
        if (lottos.filter((x) => x === 0).length === 0) {
            return [6, 6];
        }
        else {
            return [1, 6];
        }
    } 
    return [7-(cnt + lottos.filter((x) => x === 0).length), 7-cnt];
}