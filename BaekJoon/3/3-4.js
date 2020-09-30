/*
[입력]첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.
[출력] 각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.
*/
var repeat = Number(prompt(""));
var arr = new Array();

for (var i = 0; i < repeat; i++) {
  let input = prompt("").split(" ");
  arr[i * 2] = Number(input[0]);
  arr[i * 2 + 1] = Number(input[1]);
}

for (var j = 0; j < repeat * 2; j += 2) {
  console.log(arr[j] + arr[j + 1]);
}
