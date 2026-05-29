"use client";

import { clearConsent } from "@/lib/consent";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function ManageCookiesButton({ className, children }: Props) {
  return (
    <button
      type="button"
      onClick={() => clearConsent()}
      className={className ?? "text-sm text-white/90 hover:text-green transition-colors underline-offset-2 hover:underline"}
    >
      {children ?? "Manage cookies"}
    </button>
  );
}
