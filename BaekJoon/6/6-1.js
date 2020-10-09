/*정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.*/
funtion sum (input){
    for(var i=0; i<input.length;i++){
        result += Number(input[i]);
    } 
    return result;
}

let num=[1, 2, 3, 4, 5, 6, 7];
sum(num);
