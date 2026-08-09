// 이 파일에 있는 값만 바꾸면 전체 사이트에 반영할 수 있습니다.

export const BRAND = "스타트업";
export const GENERATION = "5세대"; // 스타트업 동아리 자체 기수 (5세대)

export const APPLY_URL: string | null = null; // 자체 지원서 페이지(/apply)를 사용 중이라 항상 null입니다.

// 모집 마감(KST). 실시간 카운트다운의 기준 시각입니다. .env의 NEXT_PUBLIC_APPLICATION_DEADLINE으로 관리합니다.
export const APPLICATION_DEADLINE =
  process.env.NEXT_PUBLIC_APPLICATION_DEADLINE ?? "2026-08-31T23:59:00+09:00";

export function isApplicationDeadlinePassed() {
  return Date.now() >= new Date(APPLICATION_DEADLINE).getTime();
}
