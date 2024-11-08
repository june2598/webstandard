async function update(url, pid, payload) {
    try{
        const res = await fetch(url, {
            method:'PATCH',
            headers:{
                'Content-Type': 'application/json',   //요청데이터 메시지에 있는 데이터 타입
                'Accept': 'application/json'
            },
            body:JSON.stringify(payload)
        });
        if (!res.ok) {
            throw new Error(`응답오류:${res.status}`);
        }

        const {header,body,totalCnt} = await res.json();      //구조분해 문법
        console.log(header,body,totalCnt);
        if (header.rtcd == '00') {
            console.log(`수정된 상품번호 : ${body.productId}`);
        }
    }catch(err){
        console.log(err.message);
    }
}
const pid = 201;
const url = `http://localhost:9080/api/products/${pid}`;
const payload = {
    "pname": "태블릿",
    "quantity": "1",
    "price": "35000"
};
update(url,pid,payload);
