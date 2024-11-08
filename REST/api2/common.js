const ajax = {
    post: async (url, payload) => {                  //요청데이터를 보통 payload라고 한다

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
            const json = await res.json();
            return json;
        } catch (err) {
            console.log(err.message);
        }
    },
    get: async url => {                  //요청데이터를 보통 payload라고 한다

        try {
            const res = await fetch(url, {               //await : 뒤에있는게 다 수행될때까지 기다려줌?
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',   //요청데이터 메시지에 있는 데이터 타입
                    'Accept': 'application/json',
                },
            });

            if (!res.ok) {
                throw new Error(`응답오류:${res.status}`);
            }
            const json = await res.json();
            return json;
        } catch (err) {
            console.log(err.message);
        }
    },
    patch: async (url, payload) => {

        try {
            const res = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',   //요청데이터 메시지에 있는 데이터 타입
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload) //payload가 js객체리터럴의 형태임 -> json포맷의 문자열로 변환
            });

            if (!res.ok) {
                throw new Error(`응답오류:${res.status}`);
            }
            const json = await res.json();
            return json;
        } catch (err) {
            console.log(err.message);
        }
    },
    delete: async (url, payload) => {
        let optional = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        };
        if (payload) {
            optional = {
                ...optional,
                body: JSON.stringify(payload)
            }
        }
        try {
            const res = await fetch(url, optional);

            if (!res.ok) {
                throw new Error(`응답오류:${res.status}`);
            }
            const json = await res.json();
            return json;
        } catch (err) {
            console.log(err.message);
        }
    }
}

export { ajax }
// ajax.delete(url);           //값을 안받은 부분은 undefined
// ajax.delete(url, payload);