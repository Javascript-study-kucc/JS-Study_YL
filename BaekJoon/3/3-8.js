/*두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
[입력]첫째 줄에 테스트 케이스의 개수 T가 주어진다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
[출력]각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다. 테스트 케이스 번호는 1부터 시작한다.
*/
var testcase = Number(prompt(""));
var arr = new Array();

for (var i = 0; i < testcase; i++) {
  let input = prompt("").split(" ");
  arr[i * 2] = Number(input[0]);
  arr[i * 2 + 1] = Number(input[1]);
}

for (var j = 0; j < testcase; j++) {
  console.log(
    "Case #" +
      Number(j + 1) +
      ": " +
      Number(arr[j * 2]) +
      " + " +
      Number(arr[j * 2 + 1]) +
      " = " +
      Number(arr[j * 2] + arr[j * 2 + 1])
  );
}
//숫자를 계산하여 출력하고 싶은 경우에는 먼저 계산을 하고 문자와 결합을 해야함
//숫자와 변수 결합할 때, 문자와 변수 결합할 때 초기값 지정헤줘야 함
