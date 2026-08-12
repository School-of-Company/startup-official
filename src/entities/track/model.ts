export type Track = {
  key: string;
  name: string;
  enName: string;
  description: string;
  stack: string[];
};

export const TRACKS: Track[] = [
  {
    key: "frontend",
    name: "Frontend",
    enName: "Web & App",
    description:
      "실제 사용자가 쓰는 서비스의 화면을 만듭니다. Next.js와 TypeScript로 수천 명이 접속하는 프로덕트를 설계하고 구현하며, React Native(Expo)로 iOS·Android 앱까지 함께 만듭니다.",
    stack: ["Next.js", "React", "React Native", "Expo", "TypeScript", "Tailwind CSS", "TanStack Query"],
  },
  {
    key: "backend",
    name: "Backend",
    enName: "Server",
    description:
      "서비스의 근간이 되는 서버와 API를 설계합니다. 안정적인 아키텍처와 데이터베이스 구조로 트래픽을 견디는 시스템을 만듭니다.",
    stack: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "Redis"],
  },
  {
    key: "devops",
    name: "DevOps",
    enName: "Infrastructure",
    description:
      "서비스가 끊김 없이 배포되고 운영되도록 인프라를 구축합니다. CI/CD와 모니터링으로 개발 생산성과 안정성을 높입니다.",
    stack: ["Docker", "AWS", "GitHub Actions", "Kubernetes", "Terraform"],
  },
  {
    key: "ai",
    name: "AI",
    enName: "Artificial Intelligence",
    description:
      "최신 AI 모델과 LLM을 활용해 제품에 지능을 더합니다. 데이터를 다루고 모델을 실험하며 실제 서비스에 적용합니다.",
    stack: ["Python", "PyTorch", "LangChain", "OpenAI API", "FastAPI"],
  },
  {
    key: "design",
    name: "Design",
    enName: "UI/UX",
    description:
      "제품의 사용자 경험과 인터페이스를 디자인합니다. 사용자 리서치와 프로토타이핑으로 서비스의 첫인상과 사용성을 만들어갑니다.",
    stack: ["Figma", "Design System", "Prototyping", "User Research", "Motion"],
  },
];
