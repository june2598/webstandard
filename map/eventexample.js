//지도를 불러옴

var map = new naver.maps.Map('map', {
    zoom: 5,
    center: new naver.maps.LatLng(37.3614483, 127.1114883)
});


// 마커리스트에 빈배열, 메뉴레이어 정의 및 스타일, 초기에는 숨겨져있음 (display:none;)
var markerList = [];
var menuLayer = $('<div style="position:absolute;z-index:10000;background-color:#fff;border:solid 1px #333;padding:10px;display:none;"></div>');



map.getPanes().floatPane.appendChild(menuLayer[0]); // menuLayer[0] : jQuery객체에서 DOM요소로 변환 된 것, jQuery의 첫번째 요소에 접근하기 위해 인덱스 사용. flotePane 레이어에 menuLayer 추가


//클릭 이벤트리스너 : 클릭이 일어난 위치 위/경도 좌표 e.coord를 이용, 새로운 마커를 생성하고 그 마커를 지도에 추가하는 함수
naver.maps.Event.addListener(map, 'click', function(e) {
    var marker = new naver.maps.Marker({
        position: e.coord,
        map: map
    });

    markerList.push(marker);
});

//지도에서 키다운이 일어날때 이벤트리스너 : 
naver.maps.Event.addListener(map, 'keydown', function(e) {
    //누른 키의 이벤트정보를 가져와서 저장
    var keyboardEvent = e.keyboardEvent,
        keyCode = keyboardEvent.keyCode || keyboardEvent.which;

        //esc의 키 코드(27)를 변수 esc에 저장
    var ESC = 27;

    //누른 키가 esc키라면 esc키의 기본동작을 막음
    if (keyCode === ESC) {
        keyboardEvent.preventDefault();

        //마커 리스트를 돌면서 마커들을 지도에서 다 제거함
        for (var i=0, ii=markerList.length; i<ii; i++) {
            markerList[i].setMap(null);
        }

        //마커 다 지우고 마커리스트 빈 배열로 초기화
        markerList = [];

        //메뉴 레이어 숨김
        menuLayer.hide();
    }
});

//마우스 다운이벤트 : 마우스다운 일어나면 메뉴 레이어를 숨김
naver.maps.Event.addListener(map, 'mousedown', function(e) {
    menuLayer.hide();
});

//마우스 우클릭 이벤트 : 우클릭 지점의 좌표정보를 html형식으로 생성하는듯
naver.maps.Event.addListener(map, 'rightclick', function(e) {
    var coordHtml =
        'Coord: '+ '(우 클릭 지점 위/경도 좌표)' + '<br />' +
        'Point: ' + e.point + '<br />' +
        'Offset: ' + e.offset;

        //메뉴 레이어를 보이게함(기존에는 display:none;), 메뉴레이어 위치설정 : 이벤트 일어난 x,y좌표
    menuLayer.show().css({
        left: e.offset.x,
        top: e.offset.y
    }).html(coordHtml);

    //콘솔에 클릭한 지점의 위/경도 좌표를 표시해주는용도로 추정
    console.log('Coord: ' + e.coord.toString());
});
