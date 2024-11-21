async function commentAdd(url, payload) {
    try{
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(payload) //
        });

        if(!res.ok) {
            throw new Error(`응답오류:${res.status}`);
        }

        const data = await res.json();

        if (data.rtcd == '00') {
            console.log(`Comment : ${payload.comment}`);

        }else{
            console.log(`오류코드 : ${data.rtcd}`);
        }
    }catch(err){
        console.log(err.message);

    }
    
}

const bid = 201; 
const url = `http://localhost:9070/bbs/${bid}/`;
const payload = {
    "comment" : "이것은 첫 댓글입니다."
};
commentAdd(url,payload);