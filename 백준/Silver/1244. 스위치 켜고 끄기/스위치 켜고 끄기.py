n = int(input())
switch = list(map(int, input().split()))
student = int(input())

for i in range(student):
    gender, num = map(int, input().split())

    if gender == 1:
        for j in range(num-1, n, num):
            switch[j] = 1 - switch[j]
    
    else:
        switch[num-1] = 1 - switch[num-1]
        
        for j in range(1, n):
            if num-1-j < 0 or num-1+j >= n:
                break
            if switch[num-1-j] == switch[num-1+j]:
                switch[num-1-j] = 1 - switch[num-1-j]
                switch[num-1+j] = 1 - switch[num-1+j]
            else:
                break
    
for i in range(0, n, 20):
    print(' '.join(map(str, switch[i:i+20])))