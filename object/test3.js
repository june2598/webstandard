//class 문법 es6부터
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    smile() {
        console.log(this.name + '이 웃다');
    }
    eat() {
        console.log(this.name + '이 먹다');
    }
}
const p1 = new Person('홍길동1', 10);
const p2 = new Person('홍길동2', 20);
const p3 = new Person('홍길동3', 30);
console.log(p1, p2, p3);

p1.smile();
p1.eat();
p2.smile();
p2.eat();