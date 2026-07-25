export type Track = {
  key: string;
  name: string;
  enName: string;
  description: string;
  stack: string[];
};

// 모집 분야는 아직 확정되지 않아, 우선 Frontend로만 채워둔 임시 상태입니다.
const FRONTEND: Omit<Track, "key"> = {
  name: "Frontend",
  enName: "Web",
  description:
    "실제 사용자가 쓰는 서비스의 화면을 만듭니다. Next.js와 TypeScript로 수천 명이 접속하는 프로덕트를 설계하고 구현합니다.",
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query"],
};

export const TRACKS: Track[] = [
  { key: "frontend-1", ...FRONTEND },
  { key: "frontend-2", ...FRONTEND },
  { key: "frontend-3", ...FRONTEND },
  { key: "frontend-4", ...FRONTEND },
];
