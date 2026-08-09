import { Logo } from "@/shared/ui";

export default function Footer() {
  return (
    <footer className="bg-surface pb-28 pt-12">
      <div className="mx-auto flex max-w-wide flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8 lg:px-10">
        <div>
          <Logo idPrefix="footer-logo" className="h-4 w-auto text-fg" />
          <p className="mt-2 text-xs text-muted">
            &copy; {new Date().getFullYear()} 스타트업. All rights reserved.
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
        </div>
      </div>
    </footer>
  );
}
