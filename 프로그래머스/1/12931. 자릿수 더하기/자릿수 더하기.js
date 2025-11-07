function solution(n)
{
    var answer = 0;
    for (let num of String(n)) {
        answer += Number(num);
    }

    return answer;
}