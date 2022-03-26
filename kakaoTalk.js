const request = require("request");
const accessToken = "tFcr8OIN47i4J6dgN9JL9FrHHx_6a52OaY4jfAo9dJkAAAF_xjVFJg";
const headers = {
  "Content-Type": "application/x-www-form-urlencoded",
  Authorization: "Bearer " + accessToken,
};

function sendMessage(msg) {
  const dataString = `template_object={
    "object_type": "text",
    "text": "${msg}",
    "link": {
        "web_url": "https://developers.kakao.com",
        "mobile_web_url": "https://developers.kakao.com"
    },
    "button_title": "바로 확인"
}`;
  const options = {
    url: "https://kapi.kakao.com/v2/api/talk/memo/default/send",
    method: "POST",
    headers: headers,
    body: dataString,
  };
  request(options, (error, response, body) => {
    console.log(response.statusCode);
    if (!error && response.statusCode == 200) {
      console.log("메시지 전송 완료.");
    } else {
      console.log(error);
    }
  });
}

module.exports = {
  sendMessage: sendMessage,
};
