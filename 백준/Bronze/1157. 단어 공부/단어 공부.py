word = input().lower()
word_list = list(set(word))
l = []

for i in word_list:
    count = word.count(i)
    l.append(count)

if l.count(max(l)) >= 2:
    print('?')
else:
    print(word_list[(l.index(max(l)))].upper())