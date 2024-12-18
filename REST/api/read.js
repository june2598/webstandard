async function read(url){
    try{
        const res = await fetch(url, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',   //요청데이터 메시지에 있는 데이터 타입
                'Accept': 'application/json',
            }
        });
        if (!res.ok) {
            throw new Error(`응답오류:${res.status}`);
        }
        const {header,body,totalCnt} = await res.json();      //구조분해 문법
        console.log(header,body,totalCnt);
        if (header.rtcd == '00') {
            console.log(`조회된 상품 : ${body}`);
        }else if(header.rtcd =='01'){
            console.log(header.rtmsg);
        }
    }catch(err){
        console.log(err.message);
    }
}

const pid = 321;
const url = `http://localhost:9080/api/products/${pid}`;
read(url);