# JavaScript Variable
1. Mutable type `let` & Immutable type `const`

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

## global variable
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

