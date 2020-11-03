class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //metods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const yilin = new Person("yilin", 21);
console.log(yilin.name); //yilin
console.log(yilin.age); //21
yilin.speak(); //yilin: hello!

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


class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color =color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return width * this.height;
    }
}

class Rectangle extends Shape{
    const rectangle = new Rectangle(20, 20, 'blue');
    rectangle.draw();
}