{
    //문자형으로 변환

    let value=true;
    console.log(typeof value); // boolean
    console.log(value); //true
    value = String(value); //변수 value에 문자열 "true"가 저장됨.
    console.log(value); //"true"
    console.log(typeof value); //string
    
    
}
console.log('----------------------------------------');
{
    //숫자형으로 변환
    //숫자형으로의 변혼은 수학과 관련된 함수와 표현식에서 자동으로 일어남

    console.log( "6" / "2" ); // 3, 문자열이 숫자형으로 자동으로 변환된후 연산수행

    //Number(value) 함수를 사용하면 주어진 값(value)을 숫자형으로 명시해서 변환가능

    let str = "123";
    console.log(typeof str); //string
    let num = Number(str); // 문자열 "123"이 숫자 123으로 변환
    console.log(typeof num); //number

    // 숫자형 값을 사용해 무언가를 하려고 하는데 그 값을 문자 기반 폼(form)을 통해 입력받는 경우엔, 이런 명시적 형 변환이 필수입니다.
    // 한편, 숫자 이외의 글자가 들어가 있는 문자열을 숫자형으로 변환하려고 하면, 그 결과는 NaN이 됩니다. 예시를 살펴봅시다.

    let age = Number("임의의 문자열 123");
    console.log(age); //NaN, 형 변환이 실패합니다.


//     아래는 숫자형으로 변환 시 적용되는 규칙입니다.

//     전달받은 값	형 변환 후
//     undefined	NaN
//     null	0
//     true and false	1 과 0
//     string	문자열의 처음과 끝 공백이 제거됩니다. 공백 제거 후 남아있는 문자열이 없다면 0, 그렇지 않다면 문자열에서 숫자를 읽습니다. 변환에 실패하면 NaN이 됩니다.

    console.log(Number("     123     ")); //123
    console.log(Number("123z")); //NaN
    console.log(Number(true)); //1
    console.log(Number(false)); //0

    // null과 undefined는 숫자형으로 변환시 결과가 다르다는 점에 유의
    // null은 0이되고 undefined는 NaN이 됨

}
console.log('----------------------------------------');
{

    //불린형으로 변환
    //숫자 0, 빈문자열, null, undefined, NaN과 같이 직관적으로 "비어있다"라고 느껴지는 값들은 false
    //그 이외의 값들은 true

    console.log(Boolean(1));//true
    console.log(Boolean(0));//false
    console.log(Boolean("hello"))//true
    console.log(Boolean(""));//false

    //주의 !! 문자열 "0" 은 true입니다.
    //일부 언어에서는 문자열 "0"을 false로 취급하지만 자바스크립트에선 비어있지 않은 문자열은 언제나 true입니다.

    console.log(Boolean("0"));//true
    console.log(Boolean(" "));//true 공백이 있는 문자열도 비어있지 않은 문자열이기 때문


}

