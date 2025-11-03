n = int(input())
hansu = 0

for i in range(1, n+1):
    n_list = list(map(int, str(i)))

    if i < 100:
        hansu += 1
    
    elif n_list[0] - n_list[1] == n_list[1] - n_list[2]:
        hansu += 1

print(hansu)