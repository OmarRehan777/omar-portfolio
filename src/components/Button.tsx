import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
};

export function Button({ href, children, variant = "primary", external }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60";
  const styles =
    variant === "primary"
      ? "bg-zinc-100 text-zinc-950 hover:bg-white"
      : "bg-white/0 text-zinc-100 hover:bg-white/5 ring-1 ring-white/10";
  const rel = external ? "noreferrer noopener" : undefined;
  const target = external ? "_blank" : undefined;

  return (
    <Link className={`${base} ${styles}`} href={href} rel={rel} target={target}>
      {children}
    </Link>
  );
}
