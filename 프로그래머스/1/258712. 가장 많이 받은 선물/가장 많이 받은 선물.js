function solution(friends, gifts) {
    var answer = 0;
    var gift_cnt = Array.from({length: friends.length}, () => Array(friends.length).fill(0));
    var gift_score = Array(friends.length).fill(0);
    var receive_cnt = Array(friends.length).fill(0);
    
    // 주고받은 선물
    for (let i = 0; i < gifts.length; i++) {
        let [from, to] = gifts[i].split(" ");
        
        gift_cnt[friends.indexOf(from)][friends.indexOf(to)]++;
    }
    
    // 선물 지수
    for (let i = 0; i < friends.length; i++) {
        let give = 0, receive = 0;
        
        for (let j = 0; j < friends.length; j++) {
            give += gift_cnt[i][j];
            receive += gift_cnt[j][i];
        }
        
        gift_score[i] = give - receive;
    }
    
    // 선물 개수 계산
    for (let i = 0; i < friends.length; i++) {
        for (let j = i+1; j < friends.length; j++) {
            const a = gift_cnt[i][j];
            const b = gift_cnt[j][i];
            
            if (a > b) receive_cnt[i]++;
            else if (a < b) receive_cnt[j]++;
            else {
                if (gift_score[i] > gift_score[j]) receive_cnt[i]++;
                else if (gift_score[i] < gift_score[j]) receive_cnt[j]++;
            }
        }
    }
    
    return Math.max(...receive_cnt)
}