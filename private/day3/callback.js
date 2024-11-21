{
function loadScript(src){
    //<script>태그를 만들고 페이지에 태그를 추가
    //태그가 페이지에 추가되면 src에 있는 스크립트를 로딩하고 실행
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}
//loadScript('/my/script.js');      //script.js엔 function newFunction() 가 있음.
//newFunction(); //함수가 존재하지 않는다는 에러 발생
}

//이때 스크립트는 비동기적으로 실행됩니다. 로딩은 지금당장 시작되더라도 실행은 함수가 끝난 후에야 되기떄문
//loadScript 아래의 코드는 스크립트 로딩이 끝날때까지 기다려주지 않는다.
//그런데 현재로서는 loadScript에서 스크립트 로딩이 완료되었는지 알 수 있는 방법이 없음

//원하는대로 스크립트 안의 함수나 변수를 사용하려면 스크립트 로딩이 끝났는지 여부를 알수 있어야한다.

{
function loadScript2(src, callback){
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);
}
//새롭게 불러온 스크립트에 있는 함수를 콜백함수 안에서 호출하면 원하는대로 외부 스크립트 안의 함수를 사용할 수 있다.
loadScript('/my/script.js', function() {
    //콜백함수는 스크립트 로드가 끝나면 실행됩니다.
    newFunction();// 이제 함수 호출이 제대로 동작합니다.

});
}

//case1)

{
    function loadScript3(src, callback){
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => callback(script);
        document.head.append(script);
    }

    loadScript('http://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
        alert(`${script.src}가 로드 되었습니다.`);
        alert( _ ); //스크립트에 정의된 함수
    });

}