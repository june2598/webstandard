{   /*일반함수 */
    function avg(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        const avg = sum / arr.length;
        // console.log(`sum=${sum}`);
        // console.log(`avg=${avg}`);
        return avg;
    }
    const arr = [1, 2, 3, 4, 5];
    const result = avg(arr);
    console.log(`평균=${result}`);
}
{
    /*함수 표현식 */
    const avg = function (arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        const avg = sum / arr.length;
        return avg;
    }
   console.log(`평균=${avg([1, 2, 3, 4, 5])}`);
}

{
    /*화살표 함수*/
    const avg = (arr)=>{
        let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
    const avg = sum / arr.length;
    return avg;
    };
    console.log(`평균=${avg([1, 2, 3, 4, 5])}`);
}