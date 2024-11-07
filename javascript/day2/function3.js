/* 중첩함수 정의가 가능*/
function a(){
    function b(){
        const value =10;
        console.log(`b함수 호출됨!${value}`);
        console.log('b함수 호출됨!'+value);
        console.log("b함수 호출됨!"+value);
    }
    b();
}
a();


/* 함수를 변수에 대입 */
const c = a;
c();

/*매개값으로 함수를 전달 받을수 있다. - 고차함수*/
function b(f){
    f();
}
b(a);

/*반환값으로 함수를 전달할 수 있다. - 고차함수 */
function d(){
    return function d2(){
        console.log('hi');
    } ;
}
// d()();
const f2 = d();
f2();