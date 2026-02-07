import { ReactNode } from "react";

export function Badge({ children, variant = "default" }: { children: ReactNode; variant?: "default" | "progress" }) {
  const cls =
    variant === "progress"
      ? "bg-amber-500/15 text-amber-200 ring-1 ring-amber-500/25"
      : "bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-500/25";
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${cls}`}>{children}</span>;
}
