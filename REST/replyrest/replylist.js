async function replyList(url) {
    try{
        const res = await fetch(url, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',   //요청데이터 메시지에 있는 데이터 타입
            'Accept': 'application/json'
            }
        });if(!res.ok){
            throw new Error(`응답오류 : ${res.status}`);
            }
            const json = await res.json();
            body.forEach(reply=>console.log(reply));
          } catch (err) {
            console.error(err.message);
          }
     }
     const url = `http://localhost:9070/bbs/${bid}`;
     replyList(url);


