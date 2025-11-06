P = int(input())
for i in range(P):
    cnt = 0
    num = list(map(int, input(). split()))
    del num[0]

    for j in range(len(num)):
        for k in range(j+1, len(num)):
            if num[j] > num[k]:
                cnt += 1
    
    print(i+1, cnt)