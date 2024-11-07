//자료형

let message = 'hello';
message = 123456;

console.log(message);

//이처럼 자료의 타입은 있지만 변수에 저장 되는 값의 타입은 언제든지 바꿀수 있는 언어를 동적타입 언어라 부름

//숫자형

let n = 123;
n = 12.345;

console.log(n);

//숫자형엔 정수 및 부동소수점 숫자, Infinity, NaN, -Infinity같은 특수숫자값이 포함됨
// 어느 숫자든 0으로 나누면 Infinity를 얻을수 있음.

console.log(1 / 0); //Infinity
console.log(Infinity); // Infinity를 직접 참조할 수도 있음.

//NaN은 계산중에 에러가 발생했다는 것을 나타냄

// consone.log("숫자가 아님" / 2); //NaN , 문자열을 숫자로 나누면 오류발생

//문자형

let str = "hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

// 쌍따옴표, 홑따옴표, 역따옴표(백틱) 세종류 존재
// 자바스크립트에서는 쌍따옴표와 홑따옴표에 차이를 두지 않음
// 역따옴표(백틱)은 변수나 표현식을 감싼후 ${}안에 넣어주면, 문자열 중간에 원하는 변수나 표현식을 손쉽게 넣을수 있음
// 홑따옴표나 쌍따옴표는 중간에 표현식을 넣을수 없다.
let name = "John";

//변수를 문자열 중간에 삽입
console.log(`Hello, ${name}!`); // Hello, John!

//표현식을 문자열 중간에 삽입
console.log(`the result is ${1+2}`); //the result is 3

console.log('--------------------------------------');
//불린형
//true,false 두가지 값을 나타내는 자료형

let nameFieldChecked = true;
let ageFieldChecked = false; 

// 비교결과를 저장할때도 사용

let isGreater = 4 >1;
console.log(isGreater); //true
console.log('--------------------------------------');

//'null' 값
// null값은 오로지 null값만 포함하는 별도의 자료형을 생성
let age = null;
// 나이(age)를 알수 업석나 그 값이 비어있음을 보여줌
console.log('--------------------------------------');

//'undefined' 값
// undefined 도 null 처럼 자신만의 자료형을 생성
// undefined는 '값이 할당되지 않은상태'를 나타낼 때 사용
// 변수를 선언했지만, 값을 할당하지 않았다면 해당변수에 undefined가 자동으로 할당됨

let age2
console.log(age2); //undefined

console.log('--------------------------------------');
//typeof 연산자
//인수의 자료형을 반환함, 자료형에 따라 처리방식을 다르게 하거나 변수의 자료형을 빠르게 알아내고자 할때 유용

console.log(typeof undefined); // "undefined";
console.log(typeof 0); // "number";
console.log(typeof true);// "boolean"
console.log(typeof "foo"); // "string"
console.log(typeof Symbol("id")); //"symbol"
console.log(typeof Math); // "object"
console.log(typeof null); // "object"

//exercise
//아래 스크립트의 결고를 예측해보세요
{
    let name = "Ilya";
    console.log(`hello ${1}`); // hello 1
    console.log(`hello ${"name"}`); // hello name
    console.log(`hello ${name}`); //hello Ilya


}






