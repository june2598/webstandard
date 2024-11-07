const arr = [
    { name: '홍길동1', age: 10, blood: 'A', height: 160, weight: 60, gender: 'male' },
    { name: '홍길동2', age: 20, blood: 'A', height: 170, weight: 70, gender: 'female' },
    { name: '홍길동3', age: 30, blood: 'B', height: 180, weight: 80, gender: 'male' },
    { name: '홍길동4', age: 40, blood: 'O', height: 190, weight: 90, gender: 'female' }
];

{
    //문1) 여성 키의 평균을 구하시오
    const femaleOnly = arr.filter(person => person.gender == 'female');
    const femaleAvgHeight =femaleOnly.reduce((sum, person) => sum += person.height, 0) / femaleOnly.length;
    console.log(`여성키평균 : ${femaleAvgHeight}`);
}
{
    //문2) 남성중 키가 제일 큰 사람의 이름은?
    const maleMaxHeightName = arr.filter(person => person.gender == 'male')
        .reduce((max, person) => (person.height > max.height) ? person : max);
    console.log(`가장키큰남자 : ${maleMaxHeightName.name}`);

}
{
    //문3) 여성이 포함되어 있는가?
    const result = arr.some(person => person.gender == 'female');
    console.log(`여성존재유무 : ${result}`);

}
{
    //문4) 남성의 이름만 배열의 요소로 추출하기
    const menOnly = arr.filter(person => person.gender == 'male')
        .map(person => person.name);
    console.log(menOnly);

}
{
    //문5) 모든 여성은 키가 160 이상이다? 참이면 그렇다, 거짓이면 아니다 출력
    const result = arr.filter(person => person.gender == 'female')
        .every(person => person.height >= 160);

    const result2 = (result) ? '그렇다' : '아니다' ;
    console.log(result2);

        // if(result){
        //     console.log('그렇다');
        // }else{
        //     console.log('아니다');
        // }
}