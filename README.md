# 무신사 상품 사이즈 재고 확인 알림

카카오 API에서 로그인 엑세스 토큰을 발급받아서 재고가 있을 시에 나와의 채팅으로 메시지를 보내주는 프로그램입니다.

```
node server.js
```

scheduler 간격은 2초 간격으로 하였고 무신사 해당 품목의 페이지에서 option1 태그를 찾아 option 목록들 정보를 받아  
jaego_yn 라는 값을 읽어 현재 재고 상태를 판단하였습니다.(재고있음:'Y', 재고없음:'N')

![img1 daumcdn](https://user-images.githubusercontent.com/74912530/160243787-227f988f-848e-428d-a14d-482954100502.png)
![img1 daumcdn](https://user-images.githubusercontent.com/74912530/160243789-f817b455-9b91-46be-9fd7-a1c7a8300624.png)

자세한 설명은 블로그로 포스팅했습니다.
https://cocoon1787.tistory.com/845


