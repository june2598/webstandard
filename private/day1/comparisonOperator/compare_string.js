// 자바스크립트는 ‘사전’ 순으로 문자열을 비교합니다. '사전편집(lexicographical)'순이라고 불리기도 하는 이 기준을 적용하면 사전 뒤쪽의 문자열은 사전 앞쪽의 문자열보다 크다고 판단됩니다.

// 실제 단어를 사전에 실을 때 단어를 구성하는 문자 하나하나를 비교하여 등재 순서를 정하는 것과 같이 자바스크립트도 문자열을 구성하는 문자 하나하나를 비교해가며 문자열을 비교합니다.

{
    console.log('Z' > 'A');//true
    console.log('Glow' > 'Glee');//true
    console.log('Bee' > 'Be') //true

    //     문자열 비교 시 적용되는 알고리즘은 다음과 같습니다.

    // 1. 두 문자열의 첫 글자를 비교합니다.
    // 2. 첫 번째 문자열의 첫 글자가 다른 문자열의 첫 글자보다 크면(작으면), 첫 번째 문자열이 두 번째 문자열보다 크다고(작다고) 결론 내고 비교를 종료합니다.
    // 3. 두 문자열의 첫 글자가 같으면 두 번째 글자를 같은 방식으로 비교합니다.
    // 4. 글자 간 비교가 끝날 때까지 이 과정을 반복합니다.
    // 5. 비교가 종료되었고 문자열의 길이도 같다면 두 문자열은 동일하다고 결론 냅니다. 비교가 종료되었지만 두 문자열의 길이가 다르면 길이가 긴 문자열이 더 크다고 결론 냅니다.

    // 예시의 'Z' > 'A'는 위 알고리즘의 첫 번째 단계에서 비교 결과가 도출됩니다. 반면, 문자열 'Glow'와 'Glee'는 복수의 문자로 이루어진 문자열이기 때문에, 아래와 같은 순서로 문자열 비교가 이뤄집니다.

    // 1. G는 G와 같습니다.
    // 2. l은 l과 같습니다.
    // 3. o는 e보다 크기 때문에 여기서 비교가 종료되고, o가 있는 첫 번째 문자열 'Glow'가 더 크다는 결론이 도출됩니다.
}


{
    // 다른 형을 가진 값 간의 비교
    // 비교하려는 값의 자료형이 다르면 자바스크립트는 이 값들을 숫자형으로 바꿉니다.

    console.log('2' > 1); //true, 문자열 '2'가 숫자 2로 변환됨
    console.log('01' == 1); //true, 문자열 '01'이 숫자 1로 변환됨

    //불린값의 경우 true는 1 false는 0으로 변형됨

    console.log(true == 1);//true
    console.log(false == 0);//true

    let a = 0;
    alert(Boolean(a)); // false

    let b = "0";
    alert(Boolean(b)); // true

    alert(a == b); // true!
}

{
    //일치 연산자
    //동등연산자 == 은 0과 false를 구분하지 못한다.

    console.log(0 == false);//true

    //피연산자가 빈문자열일때도 마찬가지이다
    console.log('' == false);//true

    //0과 false를 구별하기 -> 일치연산자 === 사용하면 형변환없이 값을 비교함
    //이는 자료형의 동등여부까지 검사하기 때문에 피연산자 a와 b의 형이 다를경우 a===b는 즉시 false
    console.log(0 === false);//false

}
{
    // null이나 undefined를 다른 값과 비교할 땐 예상치 않은 일들이 발생합니다. 
    // 일단 몇 가지 규칙을 먼저 살펴본 후, 어떤 예상치 않은 일들이 일어나는지 구체적인 예시를 통해 살펴보도록 하겠습니다.

    console.log(null===undefined); //false

    // 동등 연산자 ==를 사용하여 null과 undefined를 비교
    // 동등 연산자를 사용해 null과 undefined를 비교하면 특별한 규칙이 적용돼 true가 반환됩니다. 
    // 동등 연산자는 null과 undefined를 '각별한 커플’처럼 취급합니다. 
    // 두 값은 자기들끼리는 잘 어울리지만 다른 값들과는 잘 어울리지 못합니다.

    console.log(null==undefined); //true

}

{
    console.log(5>4); //true
    console.log("apple" > "pineapple"); //true
    console.log("2" > "12"); //true
    console.log(undefined ==null);//true
    console.log(undefined===null);//false
    console.log(null =="\n0\n");//false
    console.log(null === +"\n0\n");//false
}