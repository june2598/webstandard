//test
{

    let a = 1, b = 1;
    let c = ++a;
    let d = b++;

    console.log(a); //2
    console.log(b); //2
    console.log(c); //2
    console.log(d); //1
}

{
    let a = 2;
    let x = 1 + (a *= 2);

    console.log(a);//4
    console.log(x); //5

}
console.log('------------------------------------------------------')
{

    let a = "" + 1 + 0; // 10 (문자열 연결)
    let b = "" - 1 + 0; // -1 (뺄셈연산자 -는 숫자형만을 인수로받음, 빈문자열은 숫자0으로 변환됨)
    let c = true + false; //1
    let d = 6 / "3"; // 2
    let e = "2" * "3"; //6
    let f = 4 + 5 + "px"; //9px
    let g = "$" + 4 + 5; //$45
    let h = "4" - 2;    //2
    let i = "4px" - 2;  //NaN
    let j = 7 / 0;  //Infinity
    let k = "  -9  " + 5;   //"  -9  5"     문자열 연결
    let l = "  -9  " - 5;   // -14  뺄샘은 숫자로 변환
    let m = null + 1;   // 1    숫자형으로 변환시 null : 0
    let n = undefined + 1;  // NaN  undefined는 숫자형으로 변환시 NaN
    let o = " \t \n" - 2;    // -2   //문자열이 숫자형으로 변환시 앞뒤공백이 삭제됨. 공백을 만드는 문자 \t와 \n은 숫자형으로 변환시 길이가 0인 문자열로 취급됨

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);
    console.log(h);
    console.log(i);
    console.log(j);
    console.log(k);
    console.log(l);
    console.log(m);
    console.log(n);
    console.log(o);


}

{
    // 아래 코드는 사용자에게 숫자 2개를 입력받은 다음 그 합을 보여줍니다.
    // 그런데 의도한 대로 예시가 동작하지 않습니다. 프롬프트 창에 세팅한 기본값을 수정하지 않은 경우 덧셈의 결과는 12가 됩니다.
    // 왜 그럴까요? 예시가 제대로 동작하도록 코드를 수정해 보세요. 결과는 3이 되어야 합니다.

    let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
    let b = prompt("덧셈할 두번째 숫자를 입력해주세요.", 2);

    // alert(a+b); //12

    //이게 12가 나왔다는 것은 입력받은 1,2가 문자열로 인식되어서 문자열 연결 연산자로 작동했다는뜻
    //형변환을 해주면 제대로 동작할 것이다.

    // let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
    // let b = prompt("덧셈할 두번째 숫자를 입력해주세요.", 2);
    alert(Number(a) + Number(b));

    //case2)
    // let a = +prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
    // let b = +prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

    // alert(a + b); // 3

    //case3)
    // let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
    // let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);
    
    // alert(+a + +b); // 3

}