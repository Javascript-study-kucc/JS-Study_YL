/*두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
[입력] 첫째 줄에 테스트 케이스의 개수 T가 주어진다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
[출력] 각 테스트 케이스마다 A+B를 출력한다.
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
