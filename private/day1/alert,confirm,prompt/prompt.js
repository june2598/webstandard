{
    //prompt
    //브라우저에서 제공하는 prompt 함수는 두개의 인수를 받는다.

    // result = prompt(title, [default]);
    
    //함수가 실행되면 텍스트 메세지와 입력필드, 확인 및 츼소 버튼이 있는 모달창을 띄워줌
    //title : 사용자에게 보여줄문자열  default : 입력필드의 초깃값(선택값)
    //대괄호[]의 의미 : default를 감싸는 대괄호는 이 매개변수가 필수가 아닌 선택값이라는것을 의미
    
    let age = prompt('나이를 입력해주세요.', 100);
    alert(`당신의 나이는 ${age}살 입니다.`);

    //두번째 매개변수는 선택사항이지만, 이 매개변수가없는 경우에는 undefined를 명시함.
    //깔끔한 프롬프트를 보여주려면 두번째 매개변수를 항상 전달해줄것을 권장

    // let test = prompt("Test");
    // let test = prompt("Test",'');
}
