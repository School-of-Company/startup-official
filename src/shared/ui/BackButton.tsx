"use client";

import type { ReactNode } from "react";

export default function BackButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <button type="button" onClick={() => window.history.back()} className={className}>
      {children}
    </button>
  );
}
