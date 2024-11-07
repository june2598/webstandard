{
    //if문
    let year = prompt('ECMAScript-2015 명세는 몇년도에 출판되었을까요?','');
    // if (year == 2015) alert('정답입니다!');

    //조건이 true일때 복수의 문을 실행하고 싶다면 반드시 중괄호로 코드블록 감싸야함
    //웬만하면 한줄이더라도 중괄호를 쓰기
    if(year==2015){
        alert('정답입니다!');
        alert('아주 똑똑하시네요!');
    }

}

{
    //불린형으로의 변환
    //if문은 괄호안의 표현식을 평가하고 그값을 불린값으로 변환
    // 이 규칙에 따르면 아래 예시의 코드 블록은 절대 실행되지 않습니다.

    // if (0) { // 0은 falsy입니다.
    // ...
    // }


    // 아래 예시의 코드 블록은 항상 실행됩니다.

    // if (1) { // 1은 truthy입니다.
    // ...
    // }
    // 아래와 같이 평가를 통해 확정된 불린값을 if문에 전달할 수도 있습니다.

    // let cond = (year == 2015); // 동등 비교를 통해 true/false 여부를 결정합니다.

    // if (cond) {
    // ...
    // }
}

{
    //조건부 연산자 '?'

    //조건에 다라 다른값을 변수에 할당해줘야 할 때가 있다.
    
    let accessAllowed;
    let age = prompt('나이를 입력해주세요', '');
    if(age>10){
        accessAllowed = true;
    } else{
        accessAllowed = false;
    }

    alert(accessAllowed);

}