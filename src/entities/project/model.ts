export type Project = {
  slug: string;
  name: string;
  stack: string[];
  description: string;
  detail?: string[];
  image: string;
  href?: string;
  storeLinks?: { ios?: string; android?: string };
  github?: { label: string; url: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "bitgoeul",
    name: "빛고을직업교육혁신지구",
    stack: ["Kotlin", "Spring Boot", "Next.js", "TypeScript", "Swift", "AWS"],
    description: "광주광역시 교육청 주관 취업동아리 활동 관리 서비스",
    detail: [
      "광주광역시 교육청에서 약 4500만 원 가량의 예산을 지급 받고 광주소프트웨어마이스터고등학교 스타트업 학생들과 함께 진행한 광주광역시 13개교 고교 취업동아리 활동들을 관리하는 서비스입니다.",
      "교육청 관계자님, 장학사님과 함께 워크숍 활동을 갖고, 설계부터 개발까지 관계자님들과 계속 소통하며 진행한 프로젝트입니다.",
      "현재 학생, 대학교수, 선생님 등 8가지 역할의 유저 3,000명 이상을 보유하고 있는 프로젝트입니다.",
    ],
    image: "/projects/빛고을.png",
    github: [
      { label: "Server", url: "https://github.com/School-of-Company/Bitgouel-Server" },
      { label: "Android", url: "https://github.com/School-of-Company/Bitgoeul-Android" },
      { label: "iOS", url: "https://github.com/School-of-Company/Bitgouel-iOS" },
      { label: "Frontend", url: "https://github.com/School-of-Company/Bitgouel-Frontend" },
      { label: "infrastructure-dev", url: "https://github.com/School-of-Company/bitgouel-infrastructure-dev" },
    ],
  },
  {
    slug: "expo",
    name: "EXPO",
    stack: ["Kotlin", "Spring Boot", "Next.js", "TypeScript", "PostgreSQL", "AWS"],
    description: "교원 연수 및 박람회 사전 신청, 등록 서비스",
    detail: [
      "광주광역시 교육청 외주 프로젝트로, 교육 행사·축전의 디지털 운영 효율화를 목표로 개발한 서비스입니다.",
      "AI·SW 체험 축전과 미래교육박람회 포함해 3만 명 이상의 실제 참가자를 대상으로 운영하며, 대규모 현장 사용 경험을 확보한 프로젝트입니다.",
      "관리자는 행사·축전을 생성하고 참가자 폼 및 만족도 조사를 동적으로 구성·배포할 수 있으며, 참가자는 문자로 전달된 QR 코드를 통해 출입을 인증하고 즉시 만족도 조사에 참여할 수 있습니다. 수집된 모든 데이터는 Excel로 자동 정리되어, 행사 운영 통계와 교육청 정책 의사결정에 활용될 수 있도록 설계했습니다.",
    ],
    image: "/projects/expo.png",
    github: [
      { label: "Server", url: "https://github.com/School-of-Company/Expo-Server" },
      { label: "Client", url: "https://github.com/School-of-Company/Expo-Client" },
      { label: "Android", url: "https://github.com/School-of-Company/Expo-Android" },
      { label: "Qr-Android", url: "https://github.com/School-of-Company/Expo-Qr-Android" },
      { label: "DevOps-V2", url: "https://github.com/School-of-Company/Expo-DevOps-V2" },
    ],
  },
  {
    slug: "gwangsan",
    name: "시민화폐 광산",
    stack: ["Java", "Spring Boot", "React Native", "NestJS", "Next.js", "MariaDB"],
    description: "광산구 주민 화합을 위한 지역 화폐 거래 관리 서비스",
    detail: [
      "시민화폐 광산 프로젝트는 광주광역시 광산구의 외주 프로젝트로, 지역 내에서 가상의 화폐 광산을 활용해 거래를 할 수 있도록 구축한 플랫폼입니다.",
      "사용자는 앱에서 거래 게시글과 실시간 채팅 기능을 통해 다른 사용자와 물건·서비스를 자유롭게 교환할 수 있으며, 관리자는 웹 페이지를 통해 가입 승인, 신고 처리, '광산' 지급 및 회수 등 운영 전반을 관리할 수 있도록 시스템이 설계되어 있습니다.",
    ],
    image: "/projects/gwangsan.png",
    storeLinks: {
      ios: "https://apps.apple.com/ca/app/%EC%8B%9C%EB%AF%BC%ED%99%94%ED%8F%90-%EA%B4%91%EC%82%B0/id6758655368",
      android: "https://play.google.com/store/apps/details?id=gwangsan.io.kr&hl=ko",
    },
    github: [
      { label: "Crossplatform", url: "https://github.com/School-of-Company/Gwangsan-Crossplatform" },
      { label: "Server", url: "https://github.com/School-of-Company/Gwangsan-Server" },
      { label: "Chatting-Server", url: "https://github.com/School-of-Company/Gwangsan-Chatting-Server" },
      { label: "Client-V2", url: "https://github.com/School-of-Company/Gwangsan-Client-V2" },
    ],
  },
  {
    slug: "gwangtalpe",
    name: "광탈페",
    stack: ["Next.js", "TypeScript", "Spring Boot", "MySQL", "Redis", "AWS"],
    description: "광주고등학생의회 주관 학생주도형 오디션 프로그램 관리 서비스",
    detail: [
      "광탈페 프로젝트는 광주광역시교육청 외주 프로젝트로, 프로그램의 전 과정을 한곳에서 통합 관리할 수 있도록 구축한 서비스입니다.",
      "사용자는 슬로건 응모, 좌석 예매, 결과 확인을 웹에서 진행할 수 있으며, 심사위원은 무대 평가와 결과 확인을 효율적으로 수행할 수 있도록 설계되었습니다.",
      "심사표는 엑셀로 자동 정리되어 다운로드 받을 수 있게 만들어졌습니다.",
    ],
    image: "/projects/gwangtalpe.png",
    href: "https://광탈페.kr",
    github: [
      { label: "Client", url: "https://github.com/School-of-Company/Gwangju-talent-festival-Client" },
      { label: "Server-V2", url: "https://github.com/School-of-Company/Gwangju-talent-festival-Server-V2" },
      { label: "DevOps", url: "https://github.com/School-of-Company/Gwangju-talent-festival-DevOps" },
    ],
  },
  {
    slug: "aikon",
    name: "Aikon",
    stack: ["React", "TypeScript", "Kotlin", "Spring Boot", "PostgreSQL", "Google Gemini"],
    description: "광주광역시교육청 AI교육원 운영 AI 캐릭터 생성 서비스",
    detail: [
      "Aikon은 광주광역시교육청 AI교육원과 함께 진행한 프로젝트로, 사용자가 등록한 얼굴 사진을 스타일별 AI 캐릭터 이미지로 변환해주는 서비스입니다.",
      "스튜디오 인물사진, 디즈니·주토피아풍, 한국 전통 한복, 픽사 3D, 지브리풍, 수채화 아트 등 6가지 스타일을 성별·연령대에 맞춰 제공합니다.",
      "생성된 캐릭터는 QR·패스 코드로 개별 확인할 수 있고, 전시 현장의 Wall 화면에 실시간으로 반영되어 행사장에서 바로 결과를 볼 수 있도록 설계했습니다.",
    ],
    image: "/projects/aikon.png",
    github: [
      { label: "Client", url: "https://github.com/Team-OTL/AIKON-Client" },
      { label: "Server", url: "https://github.com/Team-OTL/AIKON-Server" },
      { label: "AI", url: "https://github.com/Team-OTL/AIKON-AI" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
