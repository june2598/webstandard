// const arr = [
//     {
//         name: '홍길동1',
//         age: 10,
//         blood: 'A',
//         height: 160,
//         weight: 60,
//         gender: 'male'
//     },
//     {
//         name: '홍길동2',
//         age: 20,
//         blood: 'A',
//         height: 170,
//         weight: 70,
//         gender: 'female'
//     },
//     {
//         name: '홍길동3',
//         age: 30,
//         blood: 'B',
//         height: 180,
//         weight: 80,
//         gender: 'male'
//     },
//     {
//         name: '홍길동4',
//         age: 40,
//         blood: 'O',
//         height: 190,
//         weight: 90,
//         gender: 'female'
//     }
// ];


{
    //reduce - 반화나값: 단일값(acc), 용도 : 모든 요소를 순회하면서 누적된 단일값으로 
    // 두번째 매개값이 없음 : 배열의 맨처음 요소를 acc로 사용
    const arr = [1, 2, 3, 4, 5];
    const result = arr.reduce((acc, ele, idx, arr) => {
        console.log(acc, ele, idx, arr);
        return acc += ele;
    });
    console.log(result); //배열 [1,2,3,4,5]의 합 = 15

    console.log('---------------------')
    //두번째 매개값 : acc의 초기값
    const result2 = arr.reduce((acc, ele, idx, arr) => {
        console.log(acc, ele, idx, arr);
        return acc += ele;
    }, 10);
    console.log(result2);
    console.log('---------------------')
}

{
    //배열의 합계
    const arr = [1, 2, 3, 4, 5];
    const result = arr.reduce((acc, ele) => acc += ele);
    console.log(result);
    console.log('---------------------')
    const result2 = arr.reduce((acc, ele) => acc += ele, 10);
    console.log(result2);
}
console.log('---------------------');
{
    //최대값
    const arr = [1, 2, 3, 4, 5];
    const result = arr.reduce((acc, ele) => (acc < ele) ? ele : acc);
    console.log(result);
}

{
    //최소값
    //삼항연산자 사용
    const arr = [1, 2, 3, 4, 5];
    const result2 = arr.reduce((acc, ele) => (acc > ele) ? ele : acc);
    //     if (acc > ele) {
    //         acc = ele;
    //     }
    //     return acc;
    // });
    console.log(result2);
}