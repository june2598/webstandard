const btnsEle = document.querySelectorAll('button');
// console.log(btnsEle);
for (let i=0; i<btnsEle.length; i++){
    console.log(btnsEle[i].textContent);
}

console.log("----------------------");
for(let ele of btnsEle){
    console.log(ele.textContent);
}

console.log("----------------------");

//배열로 바꿔줌
Array.from(btnsEle).forEach((ele)=>{
    // console.log(ele);
    console.log(ele.textContent);
});

console.log("----------------------");
Array.from(document.querySelectorAll('button')).forEach((ele)=>{
    // console.log(ele);
    console.log(ele.textContent);
});

//구조분해
console.log("----------------------");
Array.from(btnsEle).forEach(({textContent:txt})=>{
    console.log(txt);
})
