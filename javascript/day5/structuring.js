/* 구조분해 */
//1) 배열[]의 구조분해 : 배열의 개별요소를 개별 변수에 각각 할당하는 문법
{
    const arr = [1,2];
    const v1 = arr[0];
    const v2 = arr[1];
    console.log(v1,v2);
}
{
    const [v1,v2] = [1,2];
    console.log(v1,v2);
}
{
    const arr = [1,2];
    function f([v1,v2]){
        console.log(v1,v2);
    }
    f(arr);
}

//2)객체리터럴{}의 구조분해 : 객체 리터럴의 개별속성을 개별 변수에 각각 할당하는 문법

{
    const person = {
        name:'홍길동',
        age:30
    };

const name = person.name;
const age = person.age;
console.log(name,age);
}

{
    const person = {
        name:'홍길동',
        age:30
    }

    const {name,age} = person;
    console.log(name,age);
}
{
    const person = {
        name:'홍길동',
        age:30
    }
    const {age:a, name:b} =person;
    console.log(b,a);
}


{
    const person = {
        name:'홍길동',
        age:30
    }

    function f(p) {
        const name = p.name;
        const age = p.age;
        console.log(name,age);
    }
    f(person);
}

{
    const person = {
        name:'홍길동',
        age:30
    }
    
    function f({name,age}){
        console.log(name,age);
    }
    f(person);
}