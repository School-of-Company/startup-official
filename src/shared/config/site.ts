// 이 파일에 있는 값만 바꾸면 전체 사이트에 반영할 수 있습니다.

export const BRAND = "스타트업";
export const GENERATION = "5세대"; // 스타트업 동아리 자체 기수 (5세대)

// 지원하기 버튼이 이동할 외부 지원 폼 URL. .env의 NEXT_PUBLIC_APPLY_URL로 관리합니다.
export const APPLY_URL = process.env.NEXT_PUBLIC_APPLY_URL ?? "";

// 모집 마감(KST). 실시간 카운트다운의 기준 시각입니다. .env의 NEXT_PUBLIC_APPLICATION_DEADLINE으로 관리합니다.
export const APPLICATION_DEADLINE =
  process.env.NEXT_PUBLIC_APPLICATION_DEADLINE ?? "2026-08-31T23:59:00+09:00";
