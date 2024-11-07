// {
//     function showMessage() {
//         alert('안녕하세요!');
//     }

//     showMessage();  //함수 호출
// }

//함수 선언의 기본방식

// function name(parameter1, parameter2, ... prameterN) {
//함수 본문
//}

//함수의 주요 용도 : 중복코드 피하기


//지역 변수
//함수 내에서 선언한 지역변수는 함수 내에서만 접근이 가능합니다.

//예시1)

{
    function showMessage() {
        let message = '안녕하세요!'; //지역변수

        console.log(message);
    }

    showMessage();

    // console.log(message); //ReferenceError : message is not defined
}
console.log('--------------------------------------------------------');
//외부 변수
//함수 내부에서 함수 외부의 변수인 외부변수에 접근할 수 있습니다.
//예시2
{
    let userName = 'John';

    function showMessage() {
        let message = 'Hello, ' + userName;
        console.log(message);
    }
    showMessage();
}
console.log('--------------------------------------------------------');
//함수에선 외부 변수에 접근하는 것뿐만 아니라, 수정도 할 수 있습니다.
//예시3
{
    let userName = 'John';

    function showMessage() {
        userName = "Bob"; // 1)외부변수를 수정함

        let message = 'Hello' + userName;

        console.log(message);
    }

    console.log(userName); // 함수 호출 전이므로 John이 출력됨
    showMessage();
    console.log(userName); // 함수에 의해 Bob으로 값이 바뀜
}
console.log('--------------------------------------------------------');
// 외부 변수는 지역변수가 없는 경우에만 사용할수 있습니다.
// 함수 내부에 외부변수와 동일한 이름을 가진 변수가 선언되었다면, 내부변수는 외부변수를 가림
// 예시를 통해 외부변수가 내부변수에 의해 가려지는것을 확인

//예시4
{
    let userName = 'John';

    function showMessage() {
        let userName = 'Bob';//같은 이름을 가진 지역변수를 선언
        let message = 'Hello' + userName;// Bob
        console.log(message);
    }

    //함수는 내부변수인 userName만사용합ㄴ디ㅏ.
    showMessage();
    console.log(userName);//함수는 외부변수에 접근하지 않습니다.
}
console.log('--------------------------------------------------------');
// 위 예시의 userName처럼 함수 외부에 선언된 변수는 전역변수라고 부른다.
// 전역변수는 같은 이름을 가진 지역변수에 의해 가려지지만 않는다면, 모든 함수에서 접근할 수 있다.
// 변수는 연관되는 함수 내에서 선언하고, 전역변수는 되도록 사용하지 않는 것이 좋다.
// 비교적 최근에 작성된 코드들은 대부분 전역변수를 사용하지않거나, 최소한으로 사용함

//매개변수
//매개변수(parameter)를 이용하면 임의의 데이터를 함수 안에 전달할 수 있다.
//매개변수는 인자(parameter)라고 불리기도 합니다.
//아래 예시에서 함수 showMessage는 매개변수 from과 text를 가진다

//예시5
{
    function showMessage(from, text) {
        console.log(from + ': ' + text);
    }

    showMessage('Ann', 'Hello!');
    showMessage('Ann', "What's up?");

}
console.log('--------------------------------------------------------');

//예시6

{
    function showMessage(from, text) {
        from = '*' + from + '*'; //from 을 좀더 멋지게 꾸며줌
        console.log(from + ': ' + text);
    }
    let from = "Ann";
    showMessage(from, "Hello"); // *Ann*: Hello

    //함수는 복사된 값을 사용하기 때문에 바깥의 "from"은 값이 변하지않음
    console.log(from); //Ann
}
console.log('--------------------------------------------------------');
//함수 호출시 매개변수에 인수를 전달하지 않으면 그 값은 undefined가 됨
//매개변수에 값을 전달하지 않아도 그 값이 undefined가 되지 않게 하려면 함수를 선언할때 = 를 사용해 기본값을 설정해주면 됨

{
    function showMessage(from, text = "no text given") {
        console.log(from + ": " + text);

    }
    showMessage("Ann"); // Ann: no text given

    //text가 값을 전달받지 못해도, undefined 대신 기본값 no text given이 할당됨
    //매개변수에 값을 전달해도 그 값이 undefined와 엄격히 일치한다면 기본값이 할당됨

    showMessage("Ann", undefined); // Ann: no text given
}
console.log('--------------------------------------------------------');
//아래와 같은 복잡한 표현식도 기본값으로 설정가능

function showMessage(from, text = anotherFunction()) {
    //anotherFunction()은 text값이 없을떄만 호출됨
    //anotherFunction()의 반환값이 text의 값이 됨
}
console.log('--------------------------------------------------------');
//매개변수 기본값 평가시점
//함수를 호출할떄마다 기본값을 평가함, 해당하는 매개변수가 없을때만 기본값을 평가
//위 예시에서는 매개변수 text에 값이 전달되는 경우 anotherFunction()은 호출되지 않음
//반면 text에 값이 없는경우 showMessage()를 호출할 때마다 anotherFunction()이 호출됨

//매개변수 기본값을 설정하는 또 다른 방법

//가끔은 함수를 선언할때가 아닌 함수 선언 후에 매개변수 기본값을 설정하는 것이 더 적절할 경우도 있다.
// 이런 경우엔 함수를 호출할때 매개변수를 undefined와 비교하여 매개변수가 전달되었는지를 확인

{
    function showMessage(text) {
        //...
        if (text === undefined) { // 매개변수가 생략되었다면
            text = '빈 문자열';
        }
        console.log(text);
    }
    showMessage();// '빈 문자열'
}
console.log('--------------------------------------------------------');
// if문을 쓰는것이 아닌 논리연산자 ||를 사용할수도 있다.
// 매개변수가 생략되었거나 빈문자열("")이 넘어오면 변수에 '빈 문자열' 이 할당
{
    function showMessage(text) {
        text = text || '빈 문자열';
        console.log(text);
    }
    showMessage();
}
console.log('--------------------------------------------------------');
//반환 값
// 함수를 호출 했을때 함수를 호출한 그곳에 특정 값을 반환할수있다. 이때 이 틍정값을 반환값 (return value)라 부른다.
// 인수로 받은 두 값을 더해주는 간단한 함수를 만들어 반환값에 대해 살펴보자

{
    function sum(a, b) {
        return a + b;
    }

    let result = sum(1, 2);
    console.log(result);    //3
}

//지시자 return은 함수 내 어디서든 사용가능, 실행 흐름이 지시자 return을 만나면 함수실행은 즉시 중단되고 함수를 호출한 곳에 값을 반환
//위 예시에서는 반환값을 result에 할당하였다.

//아래와 같이 함수 하나에 여러개의 return문이 올수도 있습니다.

{
    function checkAge(age) {
        if (age >= 18) {
            return true;
        } else {
            return confirm('보호자의 동의를 받으셨나요?');
        }
    }
    let age = prompt('나이를 알려주세요', 18);

    if (checkAge(age)) {
        alert('접속 허용');
    } else {
        alert('접속 차단');
    }
}

//아래와 같이 지시자 return만 명시하는 것도 가능, 이런 경우는 함수가 즉시 종료됩니다.

{
    function showMovie(age) {
        if (!checkAge(age)) {
            return;
        }

        console.log('영화 상영'); //(*)
    }
}

//위 예시에서 checkAge(age)가 false를 반환하면 (*)로 표시한 줄은 실행이 안되기 떄문에 함수 showMovie는 경고창을 보여주지 않습니다.

//return문이 없거나 return 지시자만 있는 함수는 undefined를 반환
//return문이 없는 경우 : undefined반환
{
    function doNothing() {
        alert(doNothing() === undefined); //true;
    }
}

//return 지시자만 있는경우 : undefined 반환, return은 return undefined와 동일하게 동작함

{
    function doNothing() {
        return;
    }
    alert(doNothing() === undefined);//true
}

//return과 값사이에 절대 줄을 삽입하지 말것
//반환하려는 값이 긴 표현식인 경우, 아래와 같이 지시자 return과 반환하려는 값 사이에 새줄을 넣어 코드를 작성하고 싶을수도있다.

//{
//     return
//     (some + long + expression + or + whatever * f(a)+f(b))
// }

//자바스크립트는 return문 끝에 자동으로 세미콜론을 넣기 떄문에 위 코드느 아래처럼 동작함
//{
//     return;
//     (some + long + expression + or + whatever * f(a)+f(b))
// }

//따라서 반환하려고 했던 표현식을 반환하지 못하고 아무것도 반환하지 않는것처럼됨
//표현식을 여러줄에 걸쳐 작성하고 싶다면, 표현식이 return 지시자가 있는 줄에서 시작하도록 작성하거나. 아래와 같이 여는 괄호를 return 지시자와 같은 줄에 써줘도 괜찮음

// return (
//     some + long + expression
//     + or + 
//     whatever * f(a) + f(b)
// )

//이렇게 하면 의도한 대로 표현식을 반환할 수 있다.


// 함수 == 주석

//함수는 간결하고, 한가지 기능만 수행할 수 있게 만들어야함
//함수가 길어지면 함수를 잘게 쪼갤때가 되었다는 신호로 받아들이는게 좋음
//함수를 간결하게만들면 테스트와 디버깅이 쉬워짐. 그리고 함수 그 자체로 주석의 역할까지한다.

//같은동작을 하는 함수 showPrimes(n)을 두개 만들어 비교
//showPrimes(n)은 n까지의 소수(prime numbers)를 출력해줍니다.
// 예시1 : 레이블을 사용해 반복문을 작성
{
    function showPrimes(n) {
        nextPrime: for (let i = 2; i < n; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue nextPrime;
            }
            alert(i);//소수
        }
    }
}

//예시2 : 소수인지 아닌지 여부를 검증하는 코드를 따로 분리해 isPrime(n)이라는 함수에 넣어서 작성
{
    function showPrimes(n) {
        for (let i = 2; i < n; i++) {
            if (!isPRime(i)) continue;

            alert(i); //a prime

        }
    }
    function isPrime(n) {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
}