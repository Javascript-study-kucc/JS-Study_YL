# JavaScript Operator

## String concatenation
`console.log('1'+2);	//12`

## Numeric operators
+, -, *, /, %, **
## Increment and decrement operators
- ### preIncrement
증가 이후 할당
```
let counter = 2;
const preIncrement = ++counter;		//counter, preIncrement 모두 3
```
- ### postIncrement
할당 이후 증가
```
const postIncrement = counter++;	//postIncrement는 3, counter는 4
```

## Assignment operators
=
## Comparison operators
<, <=, >, >=
## Logical operators
1. ### ||(or)
- finds the first truthy value: 처음으로 true가 나오면 멈춤
	* 연산 많은 함수나 표현을 가장 앞에 두면 안 좋음
	* 가벼운 게 false일 때 마지막에 마지못해 호출하는 것

2. ### &&(and)
- finds the first falsy value
	
	* 연산 많은 함수나 표현을 가장 앞에 두면 안 좋음
- null check
	* nullableObject && nullableObject.something
	* often used to compress long if-statement
	```
	  if(nullableObject !=null){
	  nullableObejct.something;
	  }
	```

3. ### !(not)

## Equality
1. ### ==(loose equality)
	```
	const stringFive = '5';
	const numberFive = 5;
	
	console.log(stringFive == numberFive);	//true
	```
2. ### ===(strict equality)
	```
	console.log(stringFive === numberFive);	//false
	```
- object equality by reference

```
const yilin1 = {name:'yilin'};
const yilin2 = {name:'yilin'};
const yilin3 = yilin1;

console.log(yilin1 == yilin2);	//false
console.log(yilin1 === yilin2);	//false
console.log(yilin1 === yilin3);	//true (ref 값이 같음)

console.log(0 == false);	//true
console.log(0 === false);	//false (type이 다름)
console.log('' == false);	//true
console.log('' === false);	//false
console.log(null == undefined);	//true
console.log(null === undefined);	//false
```

## Conditional operators
if, else if, else

## Ternary operator
`condition ? value1 : value2;	//value1이 true면 true`

## Switch statement
- use for multiple if checks
- use for enum-like(열거형) value check 
- use for multiple type checks in TS

```
const fruit = 'apple';
switch (fruit){
	case 'apple':
		console.log('red!');
		break;
	case 'banana':
	case 'lemon':
		console.log('yellow!');
		break;
	default:
		console.log('othercolor!');
		break;
}
```

## Loops
- while loop

```
let i =3;
while(i >0){
	console.log('while: ${i}');
	i--;
}
// while: 3
// while: 2
// while: 1
```
- do while loop
: body code is executed first, then check the condition
```
do{
	console.log('do while: ${i}');
	i--;
} while (i>0);
// do while: 0
```
- for loop
`for(begin; condition; step)`

- nested loop

- loop 안에서...
> - break: loop 완전히 끝냄
> - continue: 지금 것만 skip하고 다음 것으로 넘어감