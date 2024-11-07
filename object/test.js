//객체 리터럴

const person = {
    'name': '홍길동',
    'age': 10,

    //es6 이전
    // 'smile':function(){
    //     console.log('웃다');
    // },
    // 'eat':function(){
    //     console.log('먹다');
    // }

    // es6
    smile() {       //메소드
        console.log('웃다');
    },
    eat() {
        console.log('먹다');
    }
}
console.log(person);
person.smile();
person.eat();