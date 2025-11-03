import sys
input = sys.stdin.readline

N = int(input())
K = int(input())
sensors = sorted(list(map(int, input().split())))

if N <= K:
    print(0)
    sys.exit()

distances = []
for i in range(1, N):
    distances.append(sensors[i] - sensors[i-1])

distances.sort()
for _ in range(K-1):
    distances.pop()

print(sum(distances))