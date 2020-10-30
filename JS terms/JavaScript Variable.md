# JavaScript Variable
1. Mutable type `let` & Immutable type `const`
2. Primitive & Object & function(first-class function)
![Javascript Variable and Datatypes](https://simplesnippets.tech/wp-content/uploads/2018/10/variables-and-datatypes-in-JavaScript-featured-image.jpg)

## let
### let 말고 ES6 이전에 사용하던 변수: `var` (사용하면 안 좋음)
#### var hoisting
- move declaration from bottom to top 
	* 어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어올려주는 것
	* 변수 선언 이전에 할당 가능
#### var has no block scope
- block 안에 변수를 선언해도 어디에서나 보임
```
{
	age = 21;
	var age;
}
console.log(age);	// 21
```


## block { }
```
{
	let name = 'yilin';
	console.log(name);
	name = 'hello';
	console.log(name);	// yilin
}
console.log(name);		//  (아무것도 안 나옴)
```

## Global Variable
file 안에 바로 정의해서 쓰는  global scope은 어디에서나 접근 가능
- class, 함수, 조건문, 반복문 등에서만 필요할 때 정의해서 사용하는 것이 좋음 (application이 실행되는 순간부터 끝날 때까지 항상 메모리에 탑재되어 있기 때문)

```
let globalName = 'global yilin'
{
	console.log(name);
	name = 'hello';
	console.log(globalName);	// global yilin
}
console.log(globalName);		// global yilin
```

## Constants
Mutable(값이 계속 변경 가능한) <-> Immutable

`const`

- favor immutable data type always b/c
	- security
	- thread safety
	- reduce human mistakes


---

## Primitive Variable Types
### number
	const count = 17;	//intenger
	const size = 17.1;	// decimal number
	console.log(`value:${count},type:${typeof count}`);	//value: 17, type: number
	console.log(`value:${size}, type: ${typeof size}`);	//value:17.1, type: number

- #### infinity, NaN(not a number)
	const infinity = 1/0;
	const negativeInfinity = -1/0;
	const nAn = 'not a number' /2;

### string
	const char = 'c';
	const brendan = 'brendan';
	const greeing = 'hello' + brendan;
> **template literals**
> 원래는 `'value: ' + helloBob + ' type: ' + typeof helloBob`
> 더 간편하게 ``value:${count},type:${typeof count}``


### boolean
false: 0, null, undefined, NaN, ''
true: any other value

### null
empty값이라고 지정되어 할당된 것

### undefined
선언은 되었지만 아무 값도 할당 안 되어있고 정해져 있지 않은 것

### symbol
create unique identifiers for objects
이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키를 만들기 위해 사용: Symbol 값을 키로 갖는 프로퍼티는 다른 어떠한 프로퍼티와도 충돌하지 않음

```
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);	//false

const gSymbol1 = Symbol.for('id');	
//주어진 string 'id'에 맞는 Symbol을 만들어줘
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);	//true

console.log(`value: ${symbol1.description}, type: ${typeof symbol1});	
//바로 출력하면 error, string으로 바꿔줘야 함
```



- Symbol() 함수로 생성, Symbol이 함수 객체(프로퍼티와 메소드를 가짐)
```
let mySymbol = Symbol();
console.log(mySymbol);			// Symbol()
console.log(typeof mySymbol);	// symbol
```
- new 연산자 사용하지 않음

## object
```
const yilin = { name: 'yilin', age:21};
yilin.name = 'irin';
```
- const로 한 번 할당된 object는 다른 object로 변경 불가
- yilin.name 과 yilin.age는 pointer가 가리키는 메모리에 다른 값 할당 가능

## Dynamic typing
- dynamically typed language
- runtime에서 type이 정해짐 - runtime error 자주 발생
- 'string' + number 은 string으로
- 'number' / 'number' 은 number로
