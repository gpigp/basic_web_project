<h1> 최소 개발 기준 </h1>

HTML<br>
~~• Form의 서로 다른 type의 input 3개 이상 사용~~<br>
• List 또는 Table 1개 이상 사용<br>
• Semantic Element ‘header’, ‘nav’, ‘footer’ 필수 사용<br><br>

CSS<br>
▪ Attribute Selector 2개 이상, Combinator 5개 이상, ~~Pseudo-class 2개 이상, Pseudo-element 2개 이상 사용~~<br>
▪ Float와 Clear 속성 사용 필수<br>
▪ 모바일 환경 대응 (Media Query 사용, width: 900px 기준)<br><br>

JavaScript<br>
• DOM을 사용해 HTML Element나 CSS Property 5개 이상 바꾸기<br>
• 입력 format 오류, 네트워크 연결 오류 등의 예외 처리 기능 구현<br><br>

서로 다른 사용자 기능 시나리오 3개 이상 구현<br>
▪ jQuery/AJAX/JSON 기능 활용<br>
▪ Node.js를 활용한 local webserver를 사용하는 경우, web server의 기능은 routing 과
API server로부터 받은 data를 forwarding하는 역할만 구현 할 것<br>
• 예를 들어, local websever 상에서 OPEN API로 얻은 JSON 결과를 parsing하지 말 것<br>

---

<h1> COMMAND SCRIPT </h1>
<h3> localhost:3000/main.html connect </h3>
```
cd /PATH/CONTAIN/JSONFILE
node openapi.js
```
<br>
<h3> API </h3>
```html:main.html
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=키입력&libraries=services,clusterer,drawing">
```
<br>
```json:openapi.js
var options = {
    'method': 'GET',
    'url': 'https://apis.data.go.kr/3330000/HeaundaePubToiletInfoService/getPubToiletList?serviceKey=키입력&pageNo=1&numOfRows=500&resultType=json',
    'headers': {
    }
};

var options = {
    'method': 'GET',
    'url': 'http://apis.data.go.kr/3330000/HeaundaeParkingInfoService/getParkingLotList?serviceKey=키입력&pageNo=1&numOfRows=500&resultType=json',
    'headers': {
    }
};
```