async function add(url, payload) {                  //요청데이터를 보통 payload라고 한다

    try {
        const res = await fetch(url, {               //await : 뒤에있는게 다 수행될때까지 기다려줌?
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',   //요청데이터 메시지에 있는 데이터 타입
                'Accept': 'application/json',
            },
            body: JSON.stringify(payload) //payload가 js객체리터럴의 형태임 -> json포맷의 문자열로 변환
        });

        if (!res.ok) {
            throw new Error(`응답오류:${res.status}`);
        }

        const {header,body,totalCnt} = await res.json();      //구조분해 문법
        console.log(header,body,totalCnt);
        if (header.rtcd == '00') {
            console.log(`생성된 상품번호 : ${body.productId}`);


        }
    } catch (err) {
        console.log(err.message);
    }
}
const url = 'http://localhost:9080/api/products';
const payload = {                           //js 객체 리터럴
    "pname": "의자",
    "quantity": "10",
    "price": "100"
};
add(url, payload);
console.log(1);