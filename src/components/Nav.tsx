"use client";

import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-50 ${scrolled ? "backdrop-blur bg-zinc-950/65 ring-1 ring-white/10" : "bg-transparent"}`}>
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="#top" className="font-semibold tracking-tight hover:opacity-90">
            {portfolio.name}
          </a>

          <div className="hidden md:flex items-center gap-5 text-sm text-zinc-200/80">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-zinc-50 transition">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button href={portfolio.githubUrl} variant="ghost" external>
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </Button>
            <Button href={portfolio.linkedinUrl} variant="ghost" external>
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </Button>
            <Button href={`mailto:${portfolio.email}`} variant="ghost">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Email</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
