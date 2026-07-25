import { BRAND } from "@/shared/config";

export default function Footer() {
  return (
    <footer className="border-t border-border pb-28 pt-12">
      <div className="mx-auto flex max-w-wide flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8 lg:px-10">
        <div>
          <p className="text-sm font-semibold">{BRAND}</p>
          <p className="mt-2 text-xs text-muted">
            광주소프트웨어마이스터고등학교 실전 중심 스타트업 동아리
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-muted">
          <a
            href="https://github.com/School-of-Company"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-fg"
          >
            GitHub
          </a>
          <a
            href="mailto:companyofschool@gmail.com"
            className="transition-colors hover:text-fg"
          >
            companyofschool@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
