/*N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
 */
let i = 700000;
let eachNum = i.toString().split("");

for (let i = 0; i < eachNum.length; i++) {
  let sum = 0;
  sum += Number(eachNum[i]);
}
console.log(eachNum);
