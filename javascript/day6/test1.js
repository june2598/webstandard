const arr = [];
//배열 요소를 동적으로 할당할 수 있다.//

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;

console.log(arr);

arr[0] = { name: '홍길동1', age: 10, hobby: ['축구1', '농구1'] };
arr[1] = { name: '홍길동2', age: 20, hobby: ['축구2', '농구2'] };
arr[2] = { name: '홍길동3', age: 30, hobby: ['축구3', '농구3'] };

console.log(arr);

//객체 리터럴의 속성을 동적으로 할당할 수 있다.//

const obj = {};

//객체 리터럴의 속성은 점(.) 으로 접근할 수 있다.//
obj.name = '홍길동';
obj.age = 30;
console.log(obj);

//객체 리터럴의 속성은 대괄호로 접근할 수 있다. //
obj['name 2'] = '홍길동2';
obj['age 2'] = 40;
console.log(obj);
// console.log(obj.'name 2');
console.log(obj['name 2']);
console.log(obj.hobby);

(obj.hobby) ? consolelog('참') : console.log('거짓');

//디폴트값//
const result1 = obj.hobby || 0;   // 0
const result2 = obj.name || 0;    // '홍길동'

const result3 = obj.hobby && 0;  //undefined
const result4 = obj.name && 0;  //0

console.log(result1,result2,result3,result4);
// console.log((obj.hobby) || 0);
// console.log((obj.name) || 0);