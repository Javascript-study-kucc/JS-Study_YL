/*첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
[입력]첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.
[출력]첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.
*/

var row = Number(prompt(""));

for (var i = 1; i < row + 1; i++) {
  var result = "";
  for (var j = 1; j < i + 1; j++) {
    result += "*";
  }
  console.log(result);
}

//console.log는 자동 줄바꿈이 되어서 process.stdout.write();를 쓰는 방법이 있다고 함
