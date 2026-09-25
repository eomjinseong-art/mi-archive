# 미션 임파서블 아카이브

문서 제목과 OG는 미션 임파서블 아카이브입니다. 패키지 이름은 `mi-archive`입니다.

1996년 《미션 임파서블》부터 2025년 《파이널 레코닝》까지, 극장판 8편을 정리하는
비공식 팬 아카이브입니다. Next.js App Router + TypeScript + Tailwind.

이미지는 위키미디어 공용에서 재사용이 확인된 라이선스만 씁니다. 포스터와 영화
스틸은 쓰지 않습니다. 라이선스 이미지가 없으면 플레이스홀더와 검색 링크를 둡니다.

사이트 주인의 실명은 적지 않습니다.

## 로컬 실행

```bash
npm install
npm run dev
```

공개 URL과 자매 사이트는 환경 변수로 바꿉니다. 예시는 `.env.example`에 있습니다.

```
NEXT_PUBLIC_SITE_URL=https://mi-archive.vercel.app
NEXT_PUBLIC_BOND_ARCHIVE_URL=https://bond-archive-two.vercel.app
NEXT_PUBLIC_FF_ARCHIVE_URL=https://ff-archive.vercel.app
NEXT_PUBLIC_SISTER_SITE_URL=https://car-parts-cpang.vercel.app
```

007 본드 아카이브의 실제 차량 페이지는 `bond-archive-two.vercel.app`에 있습니다.
`bond-archive.vercel.app`은 다른 사이트라 차량 주소로 쓰지 않습니다.
분노의 질주 아카이브는 `ff-archive.vercel.app`로 가정합니다.

영화 속 차량의 오토픽스 버튼은
`utm_source=mi-archive&utm_medium=cta&utm_campaign=mi-car`를 붙입니다.
헤더·푸터·홈의 자매 아카이브 링크는
`utm_source=mi-archive&utm_campaign=archive-network`입니다.

방문자 수는 Abacus `mi-archive` / `visits`입니다. 눈 아이콘과 숫자만 표시합니다.

## 스크립트

- `npm run dev` — 개발 서버
- `npm run build` — 프로덕션 빌드
- `npm start` — 빌드 결과 실행
