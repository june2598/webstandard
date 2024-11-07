{
    //조건부 연산자 '?'

    //조건에 다라 다른값을 변수에 할당해줘야 할 때가 있다.
    
    // let accessAllowed;
    // let age = prompt('나이를 입력해주세요', '');
    // if(age>10){
    //     accessAllowed = true;
    // } else{
    //     accessAllowed = false;
    // }

    // alert(accessAllowed);

    //물음표 연산자를 사용해 위 예시를 짧고 간결하게 표현가능
    //피 연산자가 세개이기떄문에 삼항연산자 라고 부르는 경우도 많음

    //문법 : 
    //let result = condition ? value1 : value2;

    //평가대상인 condition이 truthy이면 value1, 그렇지 않으면 value2가 반환됨

    // let accessAllowed = (age > 18) ? true : false;

}

{
    //다중 '?'
    //물음표 연산자 ? 를 여러개 연결하면 복수의 조건 처리가능

    let age = prompt('나이를 입력하세요', 18);
    let message = (age < 3) ? '아가야 안녕' :
        (age < 18) ? '안녕' :
        (age < 100) ? '환영합니다!' :
        '나이가 아주 많으시거나, 나이가 아닌값을 입력하셨군요.';
    alert(message);    

    // 이는 다음과 같은 의미이다.
    // if (age < 3) {
    //     message = '아기야 안녕?';
    //   } else if (age < 18) {
    //     message = '안녕!';
    //   } else if (age < 100) {
    //     message = '환영합니다!';
    //   } else {
    //     message = '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';
    //   }


}