# 본드 필름 아카이브

GitHub / Vercel 프로젝트 이름은 `bond-archive`입니다. 화면 제목은 한국어
「본드 필름 아카이브」입니다.

한국에서 007을 정리하는 팬 아카이브. Next.js App Router + TypeScript + Tailwind.
이미지는 위키미디어 공용 등 재사용이 확인된 라이선스와, 사용자가 확보한 게티
초상을 사용합니다.

한국에서 007을 정리하는 팬 아카이브. Next.js App Router + TypeScript + Tailwind.

## 로컬 실행

```bash
npm install
npm run dev
```

자매 사이트 URL은 환경 변수로 바꿉니다.

```
NEXT_PUBLIC_SISTER_SITE_URL=https://british-motors.vercel.app
```

기본값은 위 주소입니다. 차량 CTA는
`utm_source=bond-archive&utm_medium=cta&utm_campaign=bond-car` 를 붙입니다.

## 스크립트

- `npm run dev` — 개발 서버
- `npm run build` — 프로덕션 빌드
- `npm start` — 빌드 결과 실행
