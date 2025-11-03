from math import factorial
for _ in range(int(input())):
    n, m = map(int, input(). split())
    res = factorial(m) // (factorial(m-n)*factorial(n))
    print(res)