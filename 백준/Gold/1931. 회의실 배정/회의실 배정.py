import sys
input = sys.stdin.readline

N = int(input())
meeting = [list(map(int, input().split())) for _ in range(N)]
meeting.sort(key=lambda x: (x[1], x[0]))

cnt = 0
end = 0

for i in range(N):
    if end <= meeting[i][0]:
        end = meeting[i][1]
        cnt += 1
    
print(cnt)