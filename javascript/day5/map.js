{
    //function(ele,idx,arr) 화살표함수, 실행문 하나면 중괄호 생략가능, 리턴문 하나면 리턴단어도 생략가능
    //map : 배열을 반환해줌
    const arr = [1, 2, 3];

    const arr2 = arr.map(ele => ele * 2
    );

    console.log(arr2);

}
{
    const arr = [
        {
            name: '홍길동1',
            age: 10,
            blood: 'A',
            height: 160,
            weight: 60,
            gender: 'male'
        },
        {
            name: '홍길동2',
            age: 20,
            blood: 'A',
            height: 170,
            weight: 70,
            gender: 'female'
        },
        {
            name: '홍길동3',
            age: 30,
            blood: 'B',
            height: 180,
            weight: 80,
            gender: 'male'
        },
        {
            name: '홍길동4',
            age: 40,
            blood: 'O',
            height: 190,
            weight: 90,
            gender: 'female'
        }
    ];

    //person 자리에는 문맥에 맞는 적절한 변수명 넣으면됨
    //map - 반환값 : 배열
    const result = arr.map(person => person.name);
    console.log(result); //['홍길동1','홍길동2','홍길동3','홍길동4',]

    //filter - 반환값 : 배열 특정조건을 만족하는 값들을 필터링
    const result2 = arr.filter(person => person.gender == 'male');
    console.log(result2);

    //find - 반환값 : 배열의 요소   처음찾은 하나
    const result3 = arr.find(person => person.gender == 'male');
    console.log(result3);
    //findindex - 반환값 : 처음에 일치하는 배열 요소의 index를 반환
    const result4 = arr.findIndex(person => person.gender == 'male');
    console.log(result4);
    //some - 반환타입이 boolean : 하나라도 참이면 true
    const result5 = arr.some(person => person.gender == 'male');
    console.log(result5);
    //every - 반환타입이 boolean : 모두다 참이어야만 true
    const result6 = arr.every(person => person.gender == 'male');
    console.log(result6);
    //reduce 배열의 각 요소를 누적하여 단일 값으로 줄이는 데 사용. 
    // arr.reduce : 나중에
    //forEach : 반환값이 없음
    arr.forEach(ele=>console.log(ele));
    arr.forEach(console.log);


}
