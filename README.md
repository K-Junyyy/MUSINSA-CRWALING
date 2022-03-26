# 무신사 품목 조회 크롤링 후

# 재입고 시 카톡으로 알림보내기 (나에게 메시지 보내기)

카카오 API에서 로그인 엑세스 토큰을 발급받아서 재고가 있을 시에 나와의 채팅으로 메시지를 보내는 서비스입니다.
accessToken 받는 곳 : https://developers.kakao.com/tool/rest-api/open/post/v2-api-talk-memo-default-send
<br><br>
access Token 받는 곳에서 요청 - 인증앱이 "developers-sample"로 샘플로 주어질 텐데 그 글씨 옆에 목록표시 눌러서
자기가 만든 애플리케이션 목록으로 바꿔준 후 토큰을 발급받으시면 됩니다.
<br><br>
(이것 외에도 카카오 로그인, 동의항목에서 카카오톡 메시지 전송 "선택 동의" 체크 등등 해야하는 작업이 있을 수도 있습니다.)

```
node server.js
```

scheduler 간격은 2초 간격으로 하였고 무신사 해당 품목의 페이지에서 option1 태그를 찾아 option 목록들 정보를 받아  
jaego_yn 라는 값을 읽어 현재 재고 상태를 판단하였습니다.(재고있음:'Y', 재고없음:'N')
