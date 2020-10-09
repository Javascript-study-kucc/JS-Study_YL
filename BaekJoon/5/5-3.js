/*세 개의 자연수 A, B, C가 주어질 때 A×B×C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.
예를 들어 A = 150, B = 266, C = 427 이라면 
A × B × C = 150 × 266 × 427 = 17037300 이 되고, 
계산한 결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.
*/

var input = new Array();
var multiplied = 1;

// 세 개의 자연수를 차례로 받아 곱한 수 만들기
for (var i = 0; i < 3; i++) {
  input.push(prompt(""));
  multiplied *= Number(input[i]);
}
// 각각의 자리수를 별도로 인식하도록 10칸짜리 배열을 만들어 각 칸에
let multiplyStr = String(multiplied);

let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (var j = 0; j < 10; j++) {
  count[Number(multiplyStr[j])] += 1;
  console.log();
}
