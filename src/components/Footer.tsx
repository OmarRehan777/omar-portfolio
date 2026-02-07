import { Container } from "./Container";
import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-zinc-300/80">
          <p>
            © {new Date().getFullYear()} {portfolio.name}. Built with Next.js.
          </p>

        </div>
      </Container>
    </footer>
  );
}
