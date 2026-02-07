import { ReactNode } from "react";

export function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-18">
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? <p className="mt-2 max-w-2xl text-sm sm:text-base text-zinc-300/80">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
