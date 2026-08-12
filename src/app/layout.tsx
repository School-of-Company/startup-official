import type { Metadata } from "next";
import "./globals.css";
import { BRAND } from "@/shared/config";
import { THEME_SCRIPT } from "@/features/theme-toggle";

const FONT_SCRIPT = `
(function () {
  function reveal() { document.documentElement.classList.add("fonts-loaded"); }
  if (!document.fonts) { reveal(); return; }
  var fallback = setTimeout(reveal, 3000);
  document.fonts.ready.then(function () {
    clearTimeout(fallback);
    reveal();
  }, reveal);
})();
`;

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
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: FONT_SCRIPT }} />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
