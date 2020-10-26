# JavaScript 기초 강의 

## node.js
editor에 'node 파일이름.js'를 치면 브라우저 없이 실행 가능
## html에서 javascript 포함하기
### 1. <head> 안에 <script src="main.js"></script> 포함하기
- browser의 parsing HTML 과정 중 태그를 보고 fetching js, executing js하고 parsing으로 돌아감
- 단점: js file이 크면 많은 시간 소요
  
### 2. <body> 안 가장 끝부분에 <script> 포함하기
- page가 준비된 다음 fetching js, executing js
- 장점: 기본적인 html contents 빨리 봄
- 단점:  javascript에 의존적인 website라면 :(

### 3. <head> + async
- HTML parsing 하다가 병렬로 main.js download시작하고 다시 parsing, download 완료되면 그때 js file 실행하고 나머지 HTML parsing
- 장점: download 받는 시간 절약
- 단점: HTML parsing되기도 전에 javascript 실행되기 때문에 HTML 요소가 아직 정의되어 있지 않을 수 있음, 여전이 parsing이 중간에 blocked
- 정의된 script 순서에 상관없이 download 먼저 된 javascript를 실행

### 4. <head> + defer
- HTML parsing하다가 defer보고 fetching js, page가 다 준비되면 executing js
- 가장 좋은 옵션
- 정의한 script 순서에 맞게 download 먼저 된 javascript를 실행


## 'use strict';
상식적인 범위 안에서 javascript 이용
javascript engine의 성능 개선까지