
const resultEle = document.getElementById('result');
const btnsEle = document.querySelector('.btns');

btnsEle.addEventListener('mousedown', evt => {
    // console.log(evt.target);    //이벤트 타겟 = 이벤트소스
    // console.log(evt.currentTarget); //핸들러가 등록된 요소
    // console.log(evt.target.textContent);
    // 버튼 외 공백을 클릭하면 아래 로직을 수행안하도록 하기
    if (evt.target.tagName != 'BUTTON') {
        return;
    }
    //mousedown 할시 해당버튼 yellow
    evt.target.style.backgroundColor = 'yellow';

    
    const btnText = evt.target.textContent;


    // Error가 떴을때는 AC 버튼 말고 다른버튼은 로직을 수행 못하게
    if(btnText != 'AC' && resultEle.value == 'Error') return;

    //버튼 을 눌렀을때의 로직
    switch (btnText) {
        case 'AC':  //clear
            resultEle.value = '';
            break;
        case '=':   //계산결과
            // 입력값없이 맨땅에 =를 누를시, 에러가떠있을시 반응하지 않도록
            if (resultEle.value.length == '' || resultEle.value == 'Error') {
                return;
            }
            try {
                resultEle.value = eval(resultEle.value);
            } catch (err) {
                resultEle.value = 'Error';
            }
            break;
        default:   //그외
            resultEle.value += btnText; //공백제거후 저장 
    }
});

//마우스 버튼 뗄시 배경색 원상복귀
btnsEle.addEventListener('mouseup', evt => {
    evt.target.style.backgroundColor = '';
});
