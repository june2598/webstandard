/* 
문제1: 배열의 최대값을 찾는 함수
주어진 숫자 배열에서 최대값을 찾아 반환하는 함수를 정의하세요.
함수는 세가지 방식으로 정의해야 합니다.: 함수 선언문, 함수표현식, 화살표함수
*/

{
    /*함수 선언문 */
    function maxValue(arr) {
        let maxNum = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maxNum) {
                maxNum = arr[i];
            } 
        }
        return maxNum;
    }
    const arr = [10, 8, 2, 3];
    console.log(maxValue(arr));
}

{
    /*함수 표현식*/
    const maxValue = function(arr){
        let maxNum = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maxNum) {
                maxNum = arr[i];
            } 
        }
        return maxNum;
    }
}console.log(maxValue([10,8,2,3]));

{
    /*화살표 함수*/
    const maxValue = (arr)=>{
        let maxNum = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maxNum) {
                maxNum = arr[i];
            } 
        }
        return maxNum;
    }

}console.log(maxValue([10,8,2,3]));