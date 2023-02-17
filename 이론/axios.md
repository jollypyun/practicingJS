# Axios
## 역할
- Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
- 즉, B/E, F/E랑 통신을 쉽게하기 위해서 Ajax와 더불어서 사용
- Vanila JS에는 fetch가 있지만 프레임워크에서는 Ajax를 사용하고자 할 때 axios를 사용하는 편

## 특징
- 운영환경에 따라 브라우저의 XMLHttpRequeset 객체, Node.js의 http api 사용
- Promise API 사용
- request, response 데이터의 변형
- HTTP 요청을 취소할 수 있다.
- HTTP request, response를 자동적으로 JSON 형태로 변경

## axios vs fetch
|axios|fetch|
|:---:|:---:|
|따로 설치 필요|빌트인|
|XSRF 보호|별도 보호 없음|
|data 속성 사용|body 속성 사용|
|data는 object 포함|body는 문자열화|
|status 200, statusText가 'OK'이면 성공|응답객체가 ok속성을 포함하면 성공|
|자동적으로 JSON 데이터 형식으로 변환|.json() 메서드를 사용해야 변환|
|요청을 취소하거나 타임아웃이 가능|지원하지 않음|
|HTTP 요청을 가로챌 수 있다.|지원하지 않음|
|download 진행에 대한 기본적인 지원|지원하지 않음|
|fetch에 비해 더 많은 브라우저에 지원된다.|Chrome 42+, Firefox 39+, Edge 14+, Safari 10.1+ 이상에 지원|

## 설치
```
npm install axios
```

## 출처
- https://inpa.tistory.com/entry/AXIOS-%F0%9F%93%9A-%EC%84%A4%EC%B9%98-%EC%82%AC%EC%9A%A9