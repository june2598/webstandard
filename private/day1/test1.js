let admin;
let name;
name = "John";

admin = name;
alert(admin);

let ourPlanetName = 'Earth'; // 변수명은 최대한 외부에서 봐도 판별하기쉽게,
let currentUserName = 'john'; // userName이라고 간단하게 명명해도 되지만, 좀더 구체적으로 정보를 알수있게

//대문자 상수의 올바른 사용
const birthday = '18.04.1982';
const age = someCode(birthday);

// 대문자 상수는 '하드코딩'한 값의 별칭을 만드는데 주로 사용, 실행전에 이미 값을 알고 있고 코드에서 직접 그 값을 쓰는 경우에 사용
// 따라서 birthday가 그런 경우에 해당, 대문자 상수로 적합하다.
// 반면 age는 런타임에 평가됨, 올해의 나이와 내년의 나이가 다르다. 상수는 코드가 실행될떄마다 바뀌지 않아야하는값
// 이런관점에서 age는 birthday보다 덜 상수스럽고, 런타임에 계산된다. 따라서 age는 대문자 상수에 적합하지 않다.

