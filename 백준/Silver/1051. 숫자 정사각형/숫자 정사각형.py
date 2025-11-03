n, m = map(int, input().split())
square = [list(map(int, input())) for _ in range(n)]

size = min(n, m)  # 최대가 될 수 있는 한 변의 길이

def find_square(s):
    for i in range(n-s+1):
        for j in range(m-s+1):
        
        	# 네 꼭짓점을 이루는 숫자가 모두 같으면
            if square[i][j] == square[i][j+s-1] == square[i+s-1][j] == square[i+s-1][j+s-1]:
                return True
            
    return False
    

# 한 변의 크기가 최대가 되는 숫자부터 하나씩 작아짐
for k in range(size, 0, -1):
    if find_square(k):
        print(k ** 2)
        break