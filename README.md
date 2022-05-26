<h1> COMMAND SCRIPT </h1>
<br>
<h3> localhost:3000/main.html connect </h3>
~~~
cd /PATH/CONTAIN/JSONFILE
node openapi.js
~~~
<br>
<h3> API </h3>
~~~
# main.html
src="//dapi.kakao.com/v2/maps/sdk.js?appkey=키입력&libraries=services,clusterer,drawing">

# openapi.js
'url': 'https://apis.data.go.kr/3330000/HeaundaePubToiletInfoService/getPubToiletList?serviceKey=키입력&pageNo=1&numOfRows=500&resultType=json'

'url': 'http://apis.data.go.kr/3330000/HeaundaeParkingInfoService/getParkingLotList?serviceKey=키입력&pageNo=1&numOfRows=500&resultType=json'
~~~
<br>
<h1> 최소개발기준 </h1>

HTML
~~• Form의 서로 다른 type의 input 3개 이상 사용~~
• List 또는 Table 1개 이상 사용
• Semantic Element ‘header’, ‘nav’, ‘footer’ 필수 사용
▪ CSS
▪ Attribute Selector 2개 이상, Combinator 5개 이상, ~~Pseudo-class 2개 이상, Pseudo-element 2개 이상 사용~~
▪ Float와 Clear 속성 사용 필수
▪ 모바일 환경 대응 (Media Query 사용, width: 900px 기준)
▪ JavaScript
• DOM을 사용해 HTML Element나 CSS Property 5개 이상 바꾸기
• 입력 format 오류, 네트워크 연결 오류 등의 예외 처리 기능 구현

서로 다른 사용자 기능 시나리오 3개 이상 구현
▪ jQuery/AJAX/JSON 기능 활용
▪ Node.js를 활용한 local webserver를 사용하는 경우, web server의 기능은 routing 과
API server로부터 받은 data를 forwarding하는 역할만 구현 할 것
• 예를 들어, local websever 상에서 OPEN API로 얻은 JSON 결과를 parsing하지 말 것