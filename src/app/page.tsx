import Image from "next/image";
import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { Section } from "@/components/Section";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { Download, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

function BentoCard({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 shadow-glow">
			<p className="text-sm font-semibold tracking-tight">{title}</p>
			<div className="mt-3 text-sm text-zinc-200/80 leading-relaxed">
				{children}
			</div>
		</div>
	);
}

export default function Page() {
	return (
		<main id="top" className="min-h-screen">
			<Nav />

			{/* Background */}
			<div className="pointer-events-none fixed inset-0 -z-10">
				{/* Base */}
				<div className="absolute inset-0 bg-[#070A12]" />
				{/* Premium dark aurora glows */}
				<div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_18%_12%,rgba(99,102,241,0.22),transparent_45%),radial-gradient(900px_circle_at_78%_18%,rgba(236,72,153,0.18),transparent_48%),radial-gradient(900px_circle_at_55%_88%,rgba(245,158,11,0.10),transparent_52%)]" />
				{/* Subtle grid */}
				<div className="absolute inset-0 opacity-25 [background-size:24px_24px] [background-image:theme(backgroundImage.grid-fade)]" />
				{/* Vignette */}
				<div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_20%,transparent_35%,rgba(7,10,18,0.85)_75%,rgba(7,10,18,1)_100%)]" />
			</div>

			{/* HERO */}
			<header className="pt-16 sm:pt-20">
				<Container>
					<div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
						<div>
							<p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-zinc-200/80 ring-1 ring-white/10">
								<span className="h-2 w-2 rounded-full bg-emerald-300/80" />
								Available for Frontend roles · React / Next.js
							</p>

							<h1 className="mt-5 text-3xl sm:text-5xl font-semibold tracking-tight">
								{portfolio.name}
								<span className="block mt-2 text-zinc-200/80 text-xl sm:text-2xl font-medium">
									{portfolio.title}
								</span>
							</h1>

							<p className="mt-5 max-w-2xl text-sm sm:text-base text-zinc-200/80 leading-relaxed">
								{portfolio.summary.join(" ")}
							</p>

							<div className="mt-6 flex flex-wrap gap-3">
								<Button href={portfolio.cvPath} external>
									<Download className="h-4 w-4" />
									Download CV
								</Button>
								<Button href="#contact" variant="ghost">
									<Mail className="h-4 w-4" />
									Contact
								</Button>
							</div>

							<div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-300/75">
								<span className="inline-flex items-center gap-2">
									<MapPin className="h-4 w-4" />
									{portfolio.location}
								</span>
								<a
									className="inline-flex items-center gap-2 hover:text-zinc-50 transition"
									href={`tel:${portfolio.phoneIntl.replace(/\s/g, "")}`}
								>
									<Phone className="h-4 w-4" />
									{portfolio.phoneIntl}
								</a>
							</div>
						</div>

						<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 shadow-glow">
							<div className="flex items-center gap-4">
								<div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-zinc-900 ring-1 ring-white/10">
									<Image
										src="/profile-placeholder.png"
										alt="Profile"
										width={100}
										height={100}
										className="h-full w-full object-cover"
									/>
								</div>
								<div>
									<p className="text-sm font-semibold tracking-tight">
										Quick Links
									</p>
									<p className="mt-1 text-sm text-zinc-200/70">
										GitHub · LinkedIn · WhatsApp
									</p>
								</div>
							</div>

							<div className="mt-5 grid gap-2">
								<a
									className="rounded-2xl bg-white/0 ring-1 ring-white/10 hover:bg-white/5 transition px-4 py-3 text-sm"
									href={portfolio.githubUrl}
									target="_blank"
									rel="noreferrer noopener"
								>
									{portfolio.githubUrl.replace(
										"https://",
										"",
									)}
								</a>
								<a
									className="rounded-2xl bg-white/0 ring-1 ring-white/10 hover:bg-white/5 transition px-4 py-3 text-sm"
									href={portfolio.linkedinUrl}
									target="_blank"
									rel="noreferrer noopener"
								>
									{portfolio.linkedinUrl.replace(
										"https://",
										"",
									)}
								</a>
								<a
									className="rounded-2xl bg-white/0 ring-1 ring-white/10 hover:bg-white/5 transition px-4 py-3 text-sm"
									href={portfolio.whatsappUrl}
									target="_blank"
									rel="noreferrer noopener"
								>
									wa.me/201159018058
								</a>
							</div>
						</div>
					</div>

					{/* Bento strengths */}
					{/* <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
						{portfolio.strengths.map((s) => (
							<BentoCard key={s} title="Strength">
								{s}
							</BentoCard>
						))}
					</div> */}
				</Container>
			</header>

			<Container>
				<Section
					id="about"
					title="About"
					subtitle="A quick snapshot of how I work and what I optimize for."
				>
					<div className="grid gap-4 lg:grid-cols-3">
						<div className="lg:col-span-2 rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 shadow-glow">
							<p className="text-sm text-zinc-200/80 leading-relaxed">
								I build modern frontend experiences that stay
								clean under real-world requirements: data-dense
								UIs, responsive admin layouts, and pragmatic
								TypeScript. I care about clarity, predictable
								structure, and UI that helps users move fast
								without friction.
							</p>
							<p className="mt-4 text-sm text-zinc-200/80 leading-relaxed">
								Right now, I’m actively developing an Order
								Management Dashboard (Next.js App Router),
								focusing on table-first layout patterns and
								route-driven UI state.
							</p>
						</div>

						<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 shadow-glow">
							<p className="text-sm font-semibold tracking-tight">
								What you’ll get
							</p>
							<ul className="mt-3 space-y-2 text-sm text-zinc-200/80">
								<li className="flex gap-2">
									<span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-300/80" />{" "}
									Clean components & consistent spacing.
								</li>
								<li className="flex gap-2">
									<span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-300/80" />{" "}
									Strong responsiveness by default.
								</li>
								<li className="flex gap-2">
									<span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-300/80" />{" "}
									Practical code and readable structure.
								</li>
							</ul>
						</div>
					</div>
				</Section>

				<Section
					id="skills"
					title="Skills"
					subtitle="The tools and fundamentals I’m most confident building with."
				>
					<div className="grid gap-4 md:grid-cols-2">
						<BentoCard title="Frontend">
							{portfolio.skills.frontend.join(" · ")}
						</BentoCard>
						<BentoCard title="UI / UX">
							{portfolio.skills.uiux.join(" · ")}
						</BentoCard>
						<BentoCard title="Tools & DevOps">
							{portfolio.skills.tools.join(" · ")}
						</BentoCard>
						<BentoCard title="CS Foundation">
							{portfolio.skills.cs.join(" · ")}
						</BentoCard>
					</div>
				</Section>

				<Section
					id="projects"
					title="Projects"
					subtitle="Selected work with clear scope, features, and links."
				>
					<div className="grid gap-5 lg:grid-cols-2">
						{portfolio.projects.map((p, idx) => (
							<ProjectCard
								key={p.title}
								project={p}
								index={idx}
							/>
						))}
					</div>
				</Section>

				<Section
					id="experience"
					title="Experience"
					subtitle="Leadership, mentorship, and real teaching impact."
				>
					<div className="grid gap-4">
						{portfolio.experience.map((e) => (
							<div
								key={e.role}
								className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 shadow-glow"
							>
								<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
									<h3 className="text-lg font-semibold tracking-tight">
										{e.role}
									</h3>
									<p className="text-sm text-zinc-300/70">
										{e.period}
									</p>
								</div>
								<p className="mt-1 text-sm text-zinc-200/70">
									{e.org}
								</p>
								<ul className="mt-4 space-y-2 text-sm text-zinc-200/85">
									{e.bullets.map((b) => (
										<li key={b} className="flex gap-2">
											<span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-300/80" />
											<span className="leading-relaxed">
												{b}
											</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</Section>

				<Section
					id="contact"
					title="Contact"
					subtitle="Fastest ways to reach me. (WhatsApp is usually best.)"
				>
					<div className="grid gap-4 lg:grid-cols-3">
						<div className="lg:col-span-2 rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 shadow-glow">
							<div className="flex flex-wrap gap-3">
								<Button href={`mailto:${portfolio.email}`}>
									<Mail className="h-4 w-4" />
									Email
								</Button>
								<Button
									href={portfolio.whatsappUrl}
									variant="ghost"
									external
								>
									<MessageCircle className="h-4 w-4" />
									WhatsApp
								</Button>
								<Button
									href={portfolio.githubUrl}
									variant="ghost"
									external
								>
									GitHub
								</Button>
								<Button
									href={portfolio.linkedinUrl}
									variant="ghost"
									external
								>
									LinkedIn
								</Button>
							</div>

							<div className="mt-6 grid gap-3 text-sm text-zinc-200/80">
								<div className="rounded-2xl bg-white/0 ring-1 ring-white/10 px-4 py-3">
									<span className="text-zinc-300/70">
										Email:
									</span>{" "}
									{portfolio.email}
								</div>
								<div className="rounded-2xl bg-white/0 ring-1 ring-white/10 px-4 py-3">
									<span className="text-zinc-300/70">
										Phone:
									</span>{" "}
									{portfolio.phoneIntl}
								</div>
							</div>
						</div>

						<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 shadow-glow">
							<p className="text-sm font-semibold tracking-tight">
								Download
							</p>
							<p className="mt-2 text-sm text-zinc-200/70 leading-relaxed">
								Prefer a PDF? Grab my latest CV here.
							</p>
							<div className="mt-4">
								<Button href={portfolio.cvPath} external>
									<Download className="h-4 w-4" />
									Download CV
								</Button>
							</div>
						</div>
					</div>
				</Section>
			</Container>

			<Footer />
		</main>
	);
}
