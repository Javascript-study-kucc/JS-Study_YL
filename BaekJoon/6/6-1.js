/*정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.*/
var input = prompt("").split(" ");
var result =0;

funtion sum(){
    for(var i=0; i<input.length;i++){
        result += Number(input[i]);
        return result;
    }
}
