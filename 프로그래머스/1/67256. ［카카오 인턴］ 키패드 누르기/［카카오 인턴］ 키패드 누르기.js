function getCoord(num) {
    const keypad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ['*', 0, '#']
    ];
    for (let i = 0; i < keypad.length; i++) {
        for (let j = 0; j < keypad[i].length; j++) {
            if (keypad[i][j] === num) return [i, j];
        }
    }
}

function solution(numbers, hand) {
    var answer = '';
    const left_num = [1, 4, 7];
    const right_num = [3, 6, 9];
    const middle_num = [2, 5, 8, 0];
    let cur_left = '*', cur_right = '#';
    
    for (let num of numbers) {
        if (left_num.includes(num)) {
            answer += "L";
            cur_left = num;
        } else if (right_num.includes(num)) {
            answer += "R";
            cur_right = num;
        } else if (middle_num.includes(num)) {
            const [lx, ly] = getCoord(cur_left);
            const [rx, ry] = getCoord(cur_right);
            const [nx, ny] = getCoord(num);
            
            const leftDist = Math.abs(lx - nx) + Math.abs(ly - ny);
            const rightDist = Math.abs(rx - nx) + Math.abs(ry - ny);
            
            if (leftDist === rightDist) {
                answer += hand === "left" ? "L" : "R";
                if (hand === "left") cur_left = num;
                else cur_right = num;
            } else if (leftDist > rightDist) {
                answer += "R";
                cur_right = num;
            } else {
                answer += "L";
                cur_left = num;
            }
        }
    }
    return answer;
}