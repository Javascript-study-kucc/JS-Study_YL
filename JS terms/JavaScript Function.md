# JavaScript Function

- fundamental building block in the program
- subprogram can be used multiple times
- performs a task or calculates a value


## 1. Function declaration
`function name(param1, param2) {body... return; }`
- make one function do one thing
- naming: doSomething, command, verb
- function is object in JS: 변수 할당, parameter 전달, 함수 return 가능
- function declaration can be called earlier than it is defined (hoisted)
- a function expression is created when the execution reaches it

## 2. Parameters
- premitive parameters: passed by value
- object paratmeters: passed by reference

```
function changeName(obj) {
  obj.name = "yilinthecoder";
}
const yilin = { name: "yilin" };
changeName(yilin);
console.log(yilin);		//{ name: "yilinthecoder" }
```

## 3. Default parameters (added in ES6)
```
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");		//{Hi! by unknown}
```

## 4. Rest parameters (added in ES6)
```
function printAll(...args){
	for(const arg of args){
		console.log(arg);
	}
}
printAll('My','name','is','yilin');
```

## 5. Local scope
밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
```
let globalMessage = 'global';
function printMessage() {
  let message = 'hello';
  console.log(message);         //hello
  console.log(globalMessage);   //glob
  function printAnother(){
    console.log(message);       //hello
    let childMessage = 'hello';
  }
  console.log(childMessage);    //에러발생 childMessage is not defined
}
printMessage();
console.log(message);           //에러발생 message is not defined
```

## 6. Return a value
## 7. Early return, early exit
long upgrade logic이 있을 때 if, else 번갈아가며 함수 body 작성하기보다 
조건 맞지않은 경우, 값이 undefined인 경우, 값이 -1인 경우
빨리 return해서 함수 종료하고 조건이 맞을 때만 필요한 logic 실행
```
function upgradeUser(user){
  if (user.point <= 10){
    return;
  }
  // 필요한 logic
}
```

# First-class function
- functions are treated like any other variable
- can be assigned as a value to variable
- can be passed as an argument to other functions
- can be returned by another function

## 1. Function expression
- function declaration can be called earlier than in is defined (hoisted)
- function expression is created when the execution reaches it

## 2. Callback function using function expression
함수를 전달, 너가 상황이 맞으면 전달된 함수를 불러!
```
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () {
  //anonymous function
  console.log("yes!");
};
const printNo = function print() {
  //named function
  //better debugging in debugger's stack traces
  //recursions (함수 안에서 자기 스스로 부르는 것)
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);
```

## Arrow Function
anonymous function
`const simplePrint = () => console.log('simplePrint!');`
`const add = (a,b) => a+b;`
```
const simpleMultiply' = (a,b) => {
	//block을 사용할 땐 return 써줘야 함
	return a*b;
};
```

## IIFE: Immediately Invoked Function Expression
선언함과 동시에 바로 호출
```
(function hello(){
	console.log('IIFE');
})();
```
