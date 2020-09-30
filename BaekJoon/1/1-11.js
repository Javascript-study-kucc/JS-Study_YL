/* (세 자리 수) * (세 자리 수) 곱셈 과정에서 (1)~(6) 줄
[입력] 첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.
[출력] 첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.
*/

var num1 = Number(prompt(""));
var num2 = Number(prompt(""));

var units1 = num1 % 10;
var tens1 = Math.floor(num1 / 10) % 10;
var hundreds1 = Math.floor(num1 / 100);
var units2 = num2 % 10;
var tens2 = Math.floor(num2 / 10) % 10;
var hundreds2 = Math.floor(num2 / 100);

var num3 = units1 * units2 + tens1 * units2 * 10 + hundreds1 * units2 * 100;
var num4 = units1 * tens2 + tens1 * tens2 * 10 + hundreds1 * tens2 * 100;
var num5 =
  units1 * hundreds2 + tens1 * hundreds2 * 10 + hundreds1 * hundreds2 * 100;

var num6 = num3 + num4 * 10 + num5 * 100;

console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
