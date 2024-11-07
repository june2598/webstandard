const btnEle = document.querySelector('button');
//case1)함수 선언문
// function h_click(evt){
//     console.log(evt);
//     console.log(evt.target); //'이벤트 타겟' = btnEle 
//     console.log(btnEle);
//     console.log(evt.currentTarget); //'핸들러가 등록된 요소' =btnEle
// };

// //case2 함수 표현식
// const h_click = function(evt){
//     console.log(evt);
//     console.log(evt.target); //'이벤트 타겟' = btnEle
//     console.log(btnEle); 
//     console.log(evt.currentTarget); //'핸들러가 등록된 요소' =btnEle
// };

//case3) 화살표 함수

const h_click = evt => {
    console.log(evt);
    console.log(evt.target); //'이벤트 타겟' = btnEle 
    console.log(btnEle);
    console.log(evt.currentTarget); //'핸들러가 등록된 요소' =btnEle
    // evt.target.style.backgroundColor = 'yellow';
};

const h_mousedown = evt => {
    evt.target.style.backgroundColor = 'blue';
};
const h_mouseup = evt => {
    evt.target.style.backgroundColor = 'green';
};
const h_mouseenter = evt => {
    evt.target.style.backgroundColor = 'pink';
};
const h_mouseleave = evt => {
    evt.target.style.backgroundColor = 'orange';
};

btnEle.addEventListener('click', h_click, false);
btnEle.addEventListener('mousedown', h_mousedown, false);
btnEle.addEventListener('mouseup', h_mouseup, false);
btnEle.addEventListener('mouseenter', h_mouseenter, false);
btnEle.addEventListener('mouseleave', h_mouseleave, false);