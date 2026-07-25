export type Project = {
  name: string;
  period: string;
  description: string;
  metric: string;
  href?: string;
};

export const PROJECTS: Project[] = [
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
