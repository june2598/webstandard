
//1) 다음 console.log는 실행 되는가?
// if("0"){

//     console.log('Hello');
// }
// 실행 됨, "0" 은 빈 문자열이 아님 -> true

// {
//     let name = prompt('자바스크립트의 공식 이름은 무엇일까요?', '');

//     if (name == 'ECMAScript') {
//         alert('정답입니다!');
//     } else {
//         alert('모르셨나요? 정답은 ECMAScript입니다!');
//     }
// }

// {
//     let value = prompt('숫자 하나를 입력해주세요', 0);

//     if (value > 0) {
//         alert('1');
//     } else if (value < 0) {
//         alert('-1');
//     } else {
//         alert('0');
//     }
// }

// {
//     let result;

//     result = ((a + b) < 4)? '미만' : '이상';
//     console.log(result);
// }

{
    let message = (login == '직원') ? '안녕하세요' :
        (login == '임원') ? '환영합니다' :
            (login == '') ? '로그인이 필요합니다.' : '';

}
