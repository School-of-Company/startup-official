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
    enName: "Web",
    description:
      "실제 사용자가 쓰는 서비스의 화면을 만듭니다. Next.js와 TypeScript로 수천 명이 접속하는 프로덕트를 설계하고 구현합니다.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query"],
  },
  {
    key: "backend",
    name: "Backend",
    enName: "Server",
    description:
      "안정적으로 트래픽을 감당하는 서버를 설계합니다. 인증, 배포, 데이터 모델링까지 실제 서비스 운영을 경험합니다.",
    stack: ["Spring", "Kotlin", "JPA", "MySQL", "Redis"],
  },
  {
    key: "devops",
    name: "DevOps",
    enName: "Infra",
    description:
      "서비스가 끊기지 않도록 인프라를 설계하고 자동화합니다. 배포 파이프라인부터 모니터링까지 운영의 안정성을 책임집니다.",
    stack: ["AWS", "Terraform", "Docker", "GitHub Actions", "Nginx"],
  },
  {
    key: "ai",
    name: "AI",
    enName: "Machine Learning",
    description:
      "데이터를 기반으로 서비스에 실질적인 가치를 더합니다. 모델 설계부터 서비스 연동까지 AI 기능을 직접 구현합니다.",
    stack: ["Python", "PyTorch", "FastAPI", "Pandas", "OpenAI API"],
  },
];
