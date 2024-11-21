async function addReply (url, payload) {
  
  try {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload)
    });
         if(!res.ok){
         throw new Error(`응답오류 : ${res.status}`);
         }
         const json = await res.json();
         return json;
       } catch (err) {
         console.error(err.message);
       }
  }

  const bid = "현재 게시글 번호";
  const url = `http://localhost:9070/bbs/${bid}`;
  const payload = {
    comment : "작성한 댓글내용" 
};

//   댓글 작성버튼 누르면 이게 호출되야함
  addReply(url, payload);
  