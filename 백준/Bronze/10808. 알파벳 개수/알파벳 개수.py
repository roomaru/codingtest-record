s = input()
abc = 'abcdefghijklmnopqrstuvwxyz'
for i in abc:
    if i in s:
        print(s.count(i), end=' ')
    else:
        print(0, end=' ')