const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/',(req, res) => res.send("Hello!"))

app.get('/restapi', function(req, res){
    var request = require('request');
    process.env.NODE_TLS_REJECT_UNAUTHORIZED="0";
    var options = {
        'method': 'GET',
        'url': 'https://apis.data.go.kr/3330000/HeaundaePubToiletInfoService/getPubToiletList?serviceKey=키입력&pageNo=1&numOfRows=500&resultType=json',
        'headers': {
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        // console.log(response.body);
        res.send(response.body);
    });
})

app.get('/parkapi', function(req, res){
    var request = require('request');
    process.env.NODE_TLS_REJECT_UNAUTHORIZED="0";
    var options = {
        'method': 'GET',
        'url': 'http://apis.data.go.kr/3330000/HeaundaeParkingInfoService/getParkingLotList?serviceKey=키입력&pageNo=1&numOfRows=500&resultType=json',
        'headers': {
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        // console.log(response.body);
        res.send(response.body);
    });
})          

app.get('/restroom', function(req, res) {
    res.send("GET restroom")
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
