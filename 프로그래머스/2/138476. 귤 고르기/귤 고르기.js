// Greedy Algorithm

function solution(k, tangerine) {
    var arr = Array(Math.max(...tangerine)).fill(0);
    var result = 0;

    // 각 크기 등장 횟수 기록
    tangerine.forEach((size) => {
        arr[size - 1]++;
    });

    // 내림차순 정렬 -> 가장 많은 개수부터 선택
    arr.sort((a, b) => b - a);

    // 큰 그룹부터 k개 이상 될 때까지 선택
    for (let i = 0; i < arr.length; i++) {
        k -= arr[i];   // 현재 크기 귤 모두 선택
        result++;      // 선택한 종류 1 증가

        if (k <= 0) break; // k개 이상이면 종료
    }

    return result;
}
