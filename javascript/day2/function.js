
{
    /*일반함수 */
function add(x,y){
    console.log('일반함수');
    return x + y;
}
console.log(add(10,20));
}
{

    /*함수표혀닉*/
const add = function(x,y){
    console.log('함수표현식');
    return x + y;
}
console.log(add(10,20));
}

{
    /*화살표 함수*/
const add = (x,y)=>{
    console.log('화살표 함수');
    return x+y;
}
console.log(add(10,20));
}
