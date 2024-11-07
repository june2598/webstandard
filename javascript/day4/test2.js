/*주어진 문자열에서 모음의 개수를 세는 함수
주어진 문자열에서 모음 (a,e,i,o,u)의 개수를 세어 반환하는 함수를 정의하세요.
함수는 세가지 방식으로 정의해야 합니다.: 함수선언문, 함수표현식, 화살표함수 */
{
    /*함수 선언문*/
    function countVowels(strArry) {
        let cntOfVowels = 0;
        const vowels = ['a','e','i','o','u'];
        for (i = 0; i < strArry.length; i++) {
            for (j = 0; j < vowels.length; j++) {
                if (strArry[i] == vowels[j]) {
                    cntOfVowels++;
                }
            }
        }
        return cntOfVowels;
    }
    console.log(countVowels('inewppauxx'));
}

{
    function countVowels2(strArry) {
        let cntOfVowels = 0;
        const vowels = 'aeiou';
        strArry = 'strArry'.toLowerCase;
        for (i = 0; i < strArry.length; i++) {
            if (vowels.includes(strArry[i])) {
                cntOfVowels++;
            }
        }
        return cntOfVowels;
    }
    console.log(countVowels('inewppauxx'));
}