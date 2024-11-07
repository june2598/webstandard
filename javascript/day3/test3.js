/* 2배수 함수를 구현하시오 */

function f1(val){
    return 2 * val;
}
function f2(val){
    return 3 * val;
}

/* n배수 함수를 구현하시오 */

function f3(val){
    return function(num){
        val*num;
    }
}
console.log(f3(3,15));
