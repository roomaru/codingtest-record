# [Gold V] CCW - 11758 

[문제 링크](https://www.acmicpc.net/problem/11758) 

### 성능 요약

메모리: 9356 KB, 시간: 116 ms

### 분류

기하학

### 제출 일자

2025년 11월 19일 15:33:45

### 문제 설명

<p>2차원 좌표 평면 위에 있는 점 3개 P<sub>1</sub>, P<sub>2</sub>, P<sub>3</sub>가 주어진다. P<sub>1</sub>, P<sub>2</sub>, P<sub>3</sub>를 순서대로 이은 선분이 어떤 방향을 이루고 있는지 구하는 프로그램을 작성하시오.</p>

### 입력 

 <p>첫째 줄에 P<sub>1</sub>의 (x<sub>1</sub>, y<sub>1</sub>), 둘째 줄에 P<sub>2</sub>의 (x<sub>2</sub>, y<sub>2</sub>), 셋째 줄에 P<sub>3</sub>의 (x<sub>3</sub>, y<sub>3</sub>)가 주어진다. (-10,000 ≤ x<sub>1</sub>, y<sub>1</sub>, x<sub>2</sub>, y<sub>2</sub>, x<sub>3</sub>, y<sub>3</sub> ≤ 10,000) 모든 좌표는 정수이다. P<sub>1</sub>, P<sub>2</sub>, P<sub>3</sub>의 좌표는 서로 다르다.</p>

### 출력 

 <p>P<sub>1</sub>, P<sub>2</sub>, P<sub>3</sub>를 순서대로 이은 선분이 반시계 방향을 나타내면 1, 시계 방향이면 -1, 일직선이면 0을 출력한다.</p>

### 접근 방법
- CCW(방향 판별 알고리즘): 외적을 이용해 점들의 회전 방향을 판단
1. 벡터 두 개를 만듦
  - 벡터 A = P1 -> P2 = (x2 - x1, y2 - y1)
  - 벡터 B = P1 -> P3 = (x3 - x1, y3 - y1)
2. 두 벡터의 외적 계산
  - A x B = (x2 - x1)(y3 - y1) - (y2 - y1)(x3 - x1)
3. 외적의 부호로 CCW 판별
  - 0보다 크면 반시계
  - 0보다 작으면 시계
  - 0이면 일직선
