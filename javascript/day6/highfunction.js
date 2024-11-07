const arr = [
    { name: '홍길동1', age: 10, blood: 'A', height: 160, weight: 60, gender: 'male' },
    { name: '홍길동2', age: 20, blood: 'A', height: 170, weight: 70, gender: 'female' },
    { name: '홍길동3', age: 30, blood: 'B', height: 180, weight: 80, gender: 'male' },
    { name: '홍길동4', age: 40, blood: 'O', height: 190, weight: 90, gender: 'female' }
];
//배열의 고차함수를 이용하여 코드를 구현하시오

{
    //문1) 평균나이를 구하시오
    //case1)
    const avgAge = arr.reduce((sum, person) => sum += person.age, 0) / arr.length;
    console.log(`나이 : ${avgAge}`);

}
console.log('----------------------------------------');
{
    //문2) 남성과 여성의 수를 구하시오

    //case1)
    const maleCnt = arr.filter(person => person.gender == 'male');
    const femaleCnt = arr.filter(person => person.gender == 'female');
    console.log(`남성: ${maleCnt.length}명, 여성: ${femaleCnt.length}명`);
    //case2)
    const count = arr.reduce((acc, person) => {
        console.log(acc, person);
        acc[person.gender] = (acc[person.gender] || 0) + 1;
        return acc;
    }, {});
    console.log(count);
    console.log(`남성: ${count['male']}명, 여성: ${count['female']}명`);
}
{
    //case3)
    const count = arr.map(person => ({ name: person.name, gender: person.gender }))
        .reduce((count, person) => {
            count[person.gender] = (count[person.gender] || 0) + 1;
            return count;
        }, {});
    console.log(count);
    console.log(`남성: ${count['male']}, 여성: ${count['female']}`);
}

console.log('----------------------------------------');
{
    //문3) 이름과 나이를 요소로 갖는 배열로 변환하시오
    const result = arr.map(person => ({ name: person.name, age: person.age }));
    console.log(result);
}

console.log('----------------------------------------');
{
    //문4) 몸무게가 가장 많은 사람의 키는?

    //case1)
    const maxWeight_height = arr.reduce((max, person) => (person.weight > max.weight) ? person : max);
    console.log(maxWeight_height.height);

    //case2)
    const maxWeightPerson = arr.reduce((acc, ele) => acc.weight < ele.weight ? ele : acc, arr[0]);
    console.log(`키 : ${maxWeightPerson.height}`);
}