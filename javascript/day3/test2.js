const btnEle = window.document.querySelector('button');
btnEle.addEventListener('click',function(){
    window.alert('hi');
    console.log('안녕');
    btnEle.style.backgroundColor='yellow';
});

const submitEle = window.document.querySelector('input[type=submit]');
submitEle.addEventListener('click',function(evt){
    evt.preventDefault();// 현재 요소의 기본 이벤트 (submit)제거
    //1) 입력필드값 읽어들이기
    const idEle = window.document.querySelector('#id');
    console.log(idEle.value);
    //2) 10자가 넘어가는지 체크
    if(idEle.value.length > 5){
        //2-1) 5자 초과
        // window.alert('아이디는 5자를 초과할 수 없습니다.');
        const errEle = document.querySelector('.err-msg-off');
        // errEle.style.display = 'block';
        // errEle.style.color = 'red';
        // errEle.style.fontWeight = 'bold';

        // errEle.classList.remove('err-msg-off');  //class값 삭제
        // errEle.classList.add('err-msg-on');  //class값 추가

        errEle.classList.replace('err-msg-off','err-msg-on'); //class값 교체
        if(errEle.classList.contains('err-msg-off')){
            console.log('존재!');
        }else{
            console.log('미존재!');
        }
    }else{
       const formEle = document.querySelector('form');
       formEle.submit();
    }

    //2-2) 10자 미만
});
