export type Project = {
  name: string;
  period: string;
  description: string;
  metric: string;
  href?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "빛고을직업교육혁신지구",
    period: "Bitgouel",
    description:
      "광주광역시교육청과 함께 만든 특성화고 학생 취업·진로활동 관리 플랫폼입니다.",
    metric: "13개교 · 3,000+명 이용",
    href: "https://bitgouel.vercel.app",
  },
  {
    name: "EXPO",
    period: "교원연수 · 전시 플랫폼",
    description: "교원 연수 및 전시 사전예약을 위한 플랫폼을 기획부터 배포까지 직접 운영했습니다.",
    metric: "30,000+명 참여",
  },
  {
    name: "시민화폐 광산",
    period: "Gwangsan",
    description: "광산구 지역화폐를 거래할 수 있는 주민 대상 플랫폼입니다.",
    metric: "광산구 지역화폐 플랫폼",
  },
  {
    name: "광탈페",
    period: "광주 고등학생 오디션 페스티벌",
    description:
      "광주 고등학생 학생회 연합과 함께 만든 오디션·페스티벌 참가 신청 플랫폼입니다.",
    metric: "실사용 서비스 운영 중",
    href: "https://광탈페.kr",
  },
];
