n, k = map(int, input(). split())
arr = [i for i in range(1, n+1)]
res = []
num = 0
for i in range(n):
    num += k-1
    if num >= len(arr):
        num %= len(arr)
    res.append(str(arr.pop(num)))
print('<',', '.join(res)[:],'>',sep='')