
    /* 화살표 함수 */
    let add = (x, y) =>{
        console.log('화살표함수')
        return x + y;
    };
    console.log(add(10,20))

    add = (x, y) => {
        return x+y;
    };
    console.log(add(10,20));

    /*화살표 함수는 주로 실행문이 1개인 경우 사용 */
    /*실행문이 1개면 중괄호{}, return문 생략가능 */
    add = (x,y) => x+y;
    console.log(add(10,20));
    