# JavaScript Class & Object
Object-oriented Programming
- class: template, declare once, no data in
- object: instance of a class, created many times, data in
JavaScript classes - syntactical sugar over prototype-based inheritnace

## class
- fields(속성)
  - data class: fields만으로 이루어진 class
- methods(행동)

### 1. Class declarations
```
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const yilin = new Person("yilin", 21);
console.log(yilin.name); 	//yilin
console.log(yilin.age); 	//21
yilin.speak(); 				//yilin: hello!
```
### 2. Getter and setters
Class: coffee vending machine
property: number of coffee(int), methods 2개 put coins, make coffee
number of coffee가 -1이라고 설정해도 setter에서 0으로 만들어주는 거
다른 사람이 number of coffee 설정, 수정하는 거 안 좋음 
그래서 private으로 만드는 게 encapculatin
```
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    //this.age는 바로 getter 호출
    //setter를 정의하는 순간, age 할당할 때 바로 메모리에 할당하지 않고 setter 호출
    //set에서 value를 this.age를 할당할 때 바로 update하는 것이 아니라 set age(value)다시 호출
    //call stack 다 차는 걸 방지하기 위해 age를 _age 같이 다른 식으로 만듦
  }

  get age() {
    return this.age;
  }

  set age(value) {
    //if (value < 0) {
    //  throwError("age cannot be negative");
    //}
    this.age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Jobs", -1);
console.log(user1.age); //-1
```

### 3. FIelds(public, private)
```
class Experiment{
	publicField =2;
	#privateFrield = 0; 	//class 외부에서 값 rw 불가
}

```

### 4. Static properties and methods
object에 상관없이 class 자체에 연결되어 있음
```
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);    //undefined
Article.printPublisher();
```

### 5. Inheritance
a way for one class to extend another class
+ 다양성

```
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color =color;
    }
    draw(){
        console.log()`drawing ${this.color} color of`);
    }
    getArea(){
        return width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shpae{
	//Method Overriding할 수 있음 재정의!
	getArea(){
	return (this.width *this.height) / 2;
	}
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
const triangle = new Triangle(20,20'red');
```

### 6. Class checking: instanceOf
어떤 object든 공통적으로 Object의 instance
`rectangle instanceof Rectangle`

