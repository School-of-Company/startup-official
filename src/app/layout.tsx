import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { pretendard } from "./fonts";
import { BRAND } from "@/shared/config";
import { THEME_SCRIPT } from "@/features/theme-toggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.schoolofcompany.com"),
  title: {
    default: BRAND,
    template: `${BRAND} | %s`,
  },
  description: `${BRAND}에서 10기 인원을 대상으로 5세대 팀원을 모집합니다`,
  openGraph: {
    title: `${BRAND}`,
    description: `${BRAND}에서 10기 인원을 대상으로 5세대 팀원을 모집합니다`,
    siteName: BRAND,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning className={pretendard.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
