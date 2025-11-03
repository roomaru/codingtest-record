word = []
for _ in range(int(input())):
    word.append(input())
wd = list(set(word))
wd.sort()
wd.sort(key=len)
for i in wd:
    print(i)
