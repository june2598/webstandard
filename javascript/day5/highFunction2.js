{
    const arr = [1, 2, 3];

    function f1(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(i);
        }
    }

    function f2(value, n) {
        return n * value;

    }

    function f3(arr, n, f2) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(f2(arr[i], n));
        }
        return result;
    }
    const result2 = f3(arr, 2, f2);
    console.log(result2);
}

// 이 코드는 배열의 각 요소에 대해 주어진 함수 f2를 적용하고, 그 결과를 새로운 배열로 반환하는 구조입니다. 각 함수의 역할을 간단히 설명하겠습니다.

// f1(arr): 주어진 배열 arr의 인덱스를 출력하는 함수입니다. 하지만 이 함수는 호출되지 않았습니다.

// f2(value, n): 두 개의 인수를 받아 value에 n을 곱한 값을 반환하는 함수입니다.

// f3(arr, n, f2): 배열 arr의 각 요소에 대해 f2 함수를 적용하고 그 결과를 새로운 배열 result에 저장한 후 반환하는 함수입니다.

// result2: f3 함수를 호출하여 [1, 2, 3] 배열의 각 요소에 2를 곱한 결과를 담고 있습니다. 최종적으로 result2는 [2, 4, 6]가 됩니다.

// 마지막으로 console.log(result2);를 통해 결과를 출력합니다.

// 결과적으로, 이 코드를 실행하면 [2, 4, 6]이 출력됩니다.