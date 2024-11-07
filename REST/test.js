{
function f(){
    console.log(`f함수 호출됨`);
    for(let i=0; i<=1000000000; i++){};
    return 1;
}

const result = f();
console.log(result);
console.log(1);
}
console.log('--');
{
    async function f(){
        console.log(`f함수 호출됨`);
        for(let i=0; i<=1000000000; i++){}
    }
    const result = f();
console.log(result);
console.log(1);
}