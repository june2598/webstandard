/* 고차 함수 : 매개값이 함수, or 반환값이 함수. (day2-function3 참조)*/
{
    const arr = [1, 2, 3];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], i, arr);
    }
}

console.log("-----------------------------");
{
    const arr = [1, 2, 3];
    let i = 0;
    for (const ele of arr) {
        console.log(ele, i++, arr);
    }

}

console.log("-----------------------------");

{
    const arr = [1, 2, 3];
    arr.forEach(function (ele, idx, arr) {
        console.log(ele, idx, arr);
    });
}
console.log("-----------------------------");
{
    const arr = [1, 2, 3];
    function f(ele,idx,arr){
        console.log(ele,idx,arr);
    }
    arr.forEach(f);
}


//결과 : 1 0 [1,2,3]  (배열 엘리먼트 1부터 순회, 요소의 index(위치) , 배열 그자체)
//       2 1 [1,2,3]
//       3 2 [1,2,3]
