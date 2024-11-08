async function deleteProduct(url, pid){

    try{
        const res = await fetch(url, {
            method:'DELETE',
            headers: {
            'Content-Type': 'application/json',   //요청데이터 메시지에 있는 데이터 타입
            'Accept': 'application/json',
            }
        });

        if(!res.ok){
            throw new Error(`응답오류:${res.status}`);
        }
        const {header,body,totalCnt} = await res.json();
        console.log(header,body,totalCnt);
        if (header.rtcd =='00'){
            console.log(`삭제된 상품번호 : ${pid}`);
        }
    }catch(err){
        console.log(err.message);
    }
}
const pid = 382;
const url = `http://localhost:9080/api/products/${pid}`;
deleteProduct(url,pid);