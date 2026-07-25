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
    name: "광탈페",
    period: "광주학생탈렌트페스티벌",
    description:
      "광주교육청의 외주를 받아서 만든 청소년 오디션 프로그램의 운영 효율성을 높이기 위해 개발한 웹 서비스입니다.",
    metric: "www.광탈페.kr",
    href: "https://광탈페.kr",
  },
  {
    name: "시민화폐 광산",
    period: "시민화폐, 광산",
    description: "가상의 화폐 '광산'을 거래할 수 있는 광산구 주민 대상 플랫폼입니다.",
    metric: "시민화폐 광산 앱(안드로이드, iOS)",
  },
];
