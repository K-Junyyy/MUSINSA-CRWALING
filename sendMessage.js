var request = require("request");
require("dotenv").config(); // .env 파일에서 환경변수 불러오기
const { accessToken } = process.env;
var headers = {
  "Content-Type": "application/x-www-form-urlencoded",
  Authorization: "Bearer " + accessToken,
};

var dataString = `template_object={
        "object_type": "text",
        "text": "폼목이 재입고 되었습니다.",
        "link": {
            "web_url": "https://developers.kakao.com",
            "mobile_web_url": "https://developers.kakao.com"
        },
        "button_title": "바로 확인"
    }`;

var options = {
  url: "https://kapi.kakao.com/v2/api/talk/memo/default/send",
  method: "POST",
  headers: headers,
  body: dataString,
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  } else {
    console.log(error);
    console.log("===");
    console.log(body);
  }
}

request(options, callback);
