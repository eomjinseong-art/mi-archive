# 미션 임파서블 아카이브

화면 제목은 「미션 임파서블 아카이브」입니다. 패키지 이름은 `mi-archive`입니다.

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
NEXT_PUBLIC_AUTOPIX_URL=https://car-parts-cpang.vercel.app
```

차량 카드의 오토픽스 링크는 `utm_source=mi-archive`를 붙입니다. 헤더와 푸터의
본드 필름 아카이브 링크도 같은 출처 값을 씁니다.

방문자 수는 Abacus `mi-archive` / `visits`입니다. 눈 아이콘과 숫자만 표시합니다.

## 스크립트

- `npm run dev` — 개발 서버
- `npm run build` — 프로덕션 빌드
- `npm start` — 빌드 결과 실행
