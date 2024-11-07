//전달되는 값이 없는경우 undefined로 반환
{
function f(a,b,c){
    console.log(a,b,c);
}

f(1);
f(1,2);
f(1,2,3);

}

{
    function f(a,b=10,c=20){
        console.log(a,b,c);
    }
f(1);
f(1,2);
f(1,2,3);
}


