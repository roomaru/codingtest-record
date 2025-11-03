N, score, P = map(int, input().split())

if N == 0:
    print(1)
else:
    ranking_list = list(map(int, input().split()))

    if N == P and ranking_list[-1] >= score:
        print(-1)
    else:
        rank = 1
        for i in range(N):
            if ranking_list[i] > score:
                rank += 1
            else:
                break
        print(rank)