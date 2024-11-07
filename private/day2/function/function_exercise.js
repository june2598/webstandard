{
    function checkAge(age) {
        if (age > 18) {
            return true;
        } else {
            return confirm('보호자의 동의를 받으셨나요');
        }
    }
}

{
    function checkAge(age) {
        if (age > 18) {
            return true;
        }
        return confirm('보호자의 동의를 받으셨나요');
    }
}

//위 두개는 동일한 동작을 합니다.


{
    function checkAge(age) {
        if (age > 18) {
            return true;
        } else {
            return confirm('보호자의 동의를 받으셨나요');
        }
    }
}

{
    function checkAge(age) {
        return (age > 18) ? true : confirm('보호자의 동의를 받으셨나요');
    }
}

{
    function checkAge(age) {
        return (age > 18) || confirm('보호자의 동의를 받으셨나요');
    }
}

// 위 셋은 동일한 동작을 합니다.

//a와 b중 작은 값을 반환해주는 함수 min(a,b)를 만들기
{
    function min(a, b) {
        return (a <= b) ? a : b;
    }
}

{
    function min(a, b) {
        if (a <= b) {
            return a;
        } else {
            return b;
        }
    }
}

//x의 n제곱을 반환해주는 함수, pow(x,n)을 만들기, x의 n제곱은 x를 n번곱해서 만들수있다.
{
    function pow(x, n) {
        let getValueX = prompt('x를 입력하십시오', 1);
        let getValueN = prompt('n을 입력하십시오', 1);
        let result = 1;
        if (n > 0) {
            for (let i = 0; i < n; i++) {
                result = result*x;
            }
            return result;
        }else{
            alert('자연수를 입력해주세요');
        }

    }
}