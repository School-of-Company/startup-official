import type { Metadata } from "next";
import "./globals.css";
import { BRAND } from "@/shared/config";
import { THEME_SCRIPT } from "@/features/theme-toggle";

export const metadata: Metadata = {
  title: `${BRAND} — 실전 중심 스타트업 동아리`,
  description:
    `광주소프트웨어마이스터고 ${BRAND} 동아리 신입 부원(GSM 10기) 공개 채용. 실제 사용자를 위한 서비스를 기획, 개발, 배포까지 직접 경험하세요.`,
  openGraph: {
    title: `${BRAND} — 실전 중심 스타트업 동아리`,
    description: "GSM 10기 신입 부원 공개 채용. 실제 사용자를 위한 서비스를 기획부터 배포까지.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">{children}</body>
    </html>
  );
}
