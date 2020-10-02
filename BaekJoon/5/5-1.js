/*N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
 */

var input = Number(prompt("").split(" "));
let min = input[0];
let max = input[0];

for (var i = input.length; i > 0; i--) {
  if (min > input[i]) {
    min = arr[i];
  }
  if (max < input[i]) {
    max = arr[i];
  }
}

console.log(mix, max);
