//이 부분은 선생님의 도움을 받거나 나중에 따로 더볼것
async function dels(url, pids) {
    try {
        // 각 pid에 대해 DELETE 요청을 보냅니다.
        const deleteRequests = pids.map(pid => {        //pids.map(...): pids 배열의 각 요소에 대해 fetch 요청을 생성. map 메소드는 배열의 각 요소를 변환하여 새로운 배열을 반환
            return fetch(`${url}/${pid}`, {             //${url}/${pid}: 요청할 URL을 동적으로 생성. 예를 들어, http://localhost:9080/api/products/321와 같은 형식.
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
        });

        const res = await Promise.all(deleteRequests);  // Promise.all은 배열의 모든 Promise가 완료될 때까지 기다리고, 결과를 배열로 반환. 이 부분에서 모든 요청이 병렬로 처리된다.

        // 각 응답을 처리합니다.
        res.forEach(res => {
            if (!res.ok) {
                throw new Error(`삭제 실패: ${res.status}`);
            }
        });
            console.log('모든 항목이 성공적으로 삭제되었습니다.');
    } catch (err) {
        console.log(err.message);
    }

}
const pids = [321, 383, 183];
const url = 'http://localhost:9080/api/products';
dels(url, pids);
