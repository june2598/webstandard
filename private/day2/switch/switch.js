//switch문을 사용한 비교법은 특정변수를 다양한 상황에서 비교할수 있게 해줌
//코드 자체가 비교상황을 잘 설명하는 장점이 있다.

//문법
//switch문은 하나이상의 case문으로 구성된다. 대게 default문도 있지만 필수는 아니다.

//예시 
// {
//     switch(x) {
//         case 'value1':
//             ...
//             [break]
//         case 'value2':
//             ...
//             [break]
//         case 'value3':
//             ...
//             [break]
//         default
//             [break]
//     }
// }

// 변수 x의 값과 첫번째 case문의 값 value1을 일치비교후 두번쨰값과 비교 - 계속이어짐
// x값과 일치하는 값을 찾으면 case문의 아래코드가 실행

//예시2
{
    let a = 2 + 2;

    switch(a) {
        case 3:
            console.log('비교하려는 값보다 작습니다.');
            break;
        
        case 4:
            console.log('비교하려는 값과 일치합니다.');
            break;
        
        case 5:
            console.log('비교하려는 값보다 큽니다.');
            break; 
        default:
            console.log('어떤 값인지 파악이 되지 않습니다.');
    }
}

//case문 안에 break문이 없으면 조건에 부합하는지 여부를 따지지 않고 이어지는 case문을 실행합니다.
//break문이 없을경우에 일어나는일의 예시

//예시3

{
    let a = 2 + 2;

    switch(a) {
        case 3:
            console.log('비교하려는 값보다 작습니다.');
        case 4:
            console.log('비교하려는 값과 일치합니다.');
        case 5:
            console.log('비교하려는 값보다 큽니다.')
        default:
            console.log('어떤 값인지 파악이 되지 않습니다.');
    }

    //결과 : 
    // '비교하려는 값과 일치합니다.
    // '비교하려는 값보다 큽니다.
    // "어떤 값인지 파악이 되지 않습니다.
}


//여러개의 'case'문 묵기
//코드가 같은 case문은 한데 묶을 수 있습니다.
//case3과 case5에서 실행하려는 코드가 같은 경우에 다음과같은 예시를 확인할수있다.

//예시4

{
    let a = 3;

    switch(a){

        case 4:
            console.log('계산이 맞습니다.');
            break;
        case 3: // (*) 두 case문을 묶음
        case 5:
            console.log('계산이 틀립니다.');
            console.log('수학 수업을 다시 들어보세요.');
            break;
        default:
            console.log('계산결과에 이상이 있습니다.');

    }
}

//case3과 case5는 동일한 메세지를 보여줍니다.
//switch문에서 break문이 없는경우엔 조건에 상관없이 다음 case문이 실행되는 부작용이 발생
//위 옣시에서 case3이 참인경우엔 (*)로 표시한줄 아래의 코드가 실행되는데 그 아래줄에는 case5가 있고, break문도 없기떄문에 case5의 break문을 만날떄까지 코드는 계속 실행됨. 
//자료형의 중요성
//switch문은 일치비교로 조건을 확인하기 떄문에, 비교하려는값과 case문의 값의 형이 같아야만 실행할 수 있다.

//예시5

{
    let arg = prompt("값을 입력해주세요.");
    switch(arg) {
        case '0':
        case '1':
            alert('0이나 1을 입력하셨습니다.');
            break;
        case '2':
            alert('2를 입력하셨습니다.');
            break;
        case 3:
            alert('이 코드는 절대 실행되지 않습니다.');
            break;
        default:
            alert('알 수 없는 값을 입력하셨습니다.');
    }
}

//코드해석
//0이나 1을입력한경우 첫번째 alert문이 실행됨
//2를 입력한 경우에는 두번째 alert문이 실행됨
//3을 입력하더라도 세번째 alert문이 실행되지않음, prompt함수는 입력필드에 기재한 값을 문자열로 반환하기떄문에
//3을 입력하더라도 prompt 함수는 문자열 '3'을 반환함, 그러나 case문에선 입력한값과 숫자형 3을 비교하도록 짜여져있음
//따라서 비교하려는 형 자체가 다르기 떄문에 case 3은 절대 실행되지않고, 대신 default문이 실행됨

