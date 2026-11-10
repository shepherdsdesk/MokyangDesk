# 목양 데스크 · Mokyang Desk

### 🌐 사이트 주소

**[https://mokyangdesk.com](https://mokyangdesk.com)**

(도메인 연결 전 임시 주소: [https://shepherdsdesk.github.io/MokyangDesk/](https://shepherdsdesk.github.io/MokyangDesk/))

---

교구 목회자가 현장에서 직접 쓰며 만든 도구들을 소개하는 대문 홈페이지입니다.

| 도구 | 하는 일 | 바로 가기 |
|---|---|---|
| 렉시오 Lexio | 설교 작성 · 성경 연구 | [홈페이지](https://shepherdsdesk.github.io/lexio/) |
| 쉐퍼드 데스크 Shepherd's Desk | 메모 · 일정 · 심방 기록 | [홈페이지](https://shepherdsdesk.github.io/shepherds-desk/) |
| 오늘의 네컷 | 교회 포토부스 | [소개](https://mokyangdesk.com/four-cuts.html) · [포토부스 열기](https://shepherdsdesk.github.io/photobooth/) |
| 365 기도동행 | 기도제목 창구 | [소개](https://mokyangdesk.com/prayer-walk.html) |
| 잇다 it,da | 사랑방 주일보고 | [소개](https://mokyangdesk.com/itda.html) · [설치 방법](https://mokyangdesk.com/itda-install.html) · [앱 열기](https://shepherdsdesk.github.io/itda/) |

## 파일 구성

| 파일 | 역할 |
|---|---|
| index.html | 목양 데스크 (대문) |
| four-cuts.html | 오늘의 네컷 소개 |
| prayer-walk.html | 365 기도동행 소개 |
| itda.html | 잇다 소개 |
| itda-install.html | 잇다 설치 설명서 |
| CNAME | 도메인 연결용 (mokyangdesk.com) — 지우지 마세요 |
| robots.txt | 검색 로봇에게 사이트를 모두 읽어도 된다고 알림 |
| sitemap.xml | 검색 엔진에 페이지 목록을 알려 주는 지도 |

## 주소 바꾸기

각 html 파일 맨 아래 `var LINKS = { ... }` 부분만 고치면 됩니다.
주소가 비어 있는 버튼은 화면에 '준비 중'으로 표시됩니다.

- four-cuts.html → `download`(포토부스 열기), `guide`(사용 설명서)
- prayer-walk.html → `copy`(사본 만들기), `guide`(설치 설명서)
- itda.html · itda-install.html → `copy`(잇다 배포용 시트 사본 주소)

## 검색 등록 확인 코드 넣기

네이버 서치어드바이저나 구글 서치 콘솔에서 받은 확인 코드는 각 html 파일 위쪽의
`naver-site-verification`, `google-site-verification` 줄에 넣고 그 줄의 `<!--`, `-->`를 지우면 됩니다.

---

만든 사람 이세진 목사
