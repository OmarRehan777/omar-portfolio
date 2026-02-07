export type Project = {
	title: string;
	status?: "In Progress" | "Live";
	description: string;
	highlights: string[];
	stack: string[];
	repoUrl: string;
	liveUrl?: string;
	image: string; // /projects/...
};

export const portfolio = {
	name: "Omar Rehan",
	title: "Software Engineer · Frontend developer (React / Next.js)",
	location: "Cairo, Egypt",
	email: "omarrehan7777777@gmail.com",
	phoneIntl: "+20 115 901 8058",
	whatsappUrl: "https://wa.me/201159018058",
	githubUrl: "https://github.com/OmarRehan777",
	linkedinUrl: "https://www.linkedin.com/in/omarrehan/",
	cvPath: "https://drive.google.com/uc?export=download&id=1kj6hbNh6TPNvDnSv_xCZOZi2OwOm_NyI",

	summary: [
		"Frontend-focused software engineer specialized in building responsive, user-friendly web apps using React, Next.js, and Tailwind CSS.",
		"Backed by a Computer & Systems Engineering foundation with strong problem-solving skills and a clean, pragmatic approach to TypeScript.",
	],

	strengths: [
		"Systematic UI thinking (table-first, data-dense admin layouts)",
		"Pragmatic TypeScript adoption (without over-engineering)",
		"Strong CS foundation (DSA, OOP, OS & networking basics)",
		"Teaching & mentorship (Python instructor experience)",
	],

	skills: {
		frontend: [
			"HTML5",
			"CSS3",
			"JavaScript (ES6+)",
			"TypeScript",
			"React",
			"Next.js (App Router)",
			"Tailwind CSS",
			"REST API Integration",
			"Vitest",
		],
		uiux: ["Figma", "Material UI (MUI)"],
		tools: ["Git", "GitHub", "Postman", "Vite"],
		cs: [
			"Python",
			"OOP",
			"Data Structures & Algorithms",
			"OS & Networking Concepts",
			"SQL / NoSQL Basics",
		],
	},

	experience: [
		{
			role: "Voluntary Technical Instructor",
			org: "Ain Shams University",
			period: "2023 & 2024",
			bullets: [
				"Delivered Python fundamentals to junior students across multiple cohorts with a focus on problem-solving.",
				"Simplified core CS concepts and guided hands-on coding sessions.",
				"Helped students set up dev environments and reviewed code for improvement.",
			],
		},
	],

	projects: [
		{
			title: "Order Management Dashboard",
			status: "In Progress",
			description:
				"A modern admin dashboard for managing and reviewing orders. Built with Next.js App Router and TypeScript, designed for data-dense workflows and responsive layouts.",
			highlights: [
				"Table-first, data-dense admin UI with route-driven navigation state.",
				"Order details views with structured, scannable information.",
				"Pragmatic TypeScript migration (clean typings without over-engineering).",
			],
			stack: ["Next.js", "TypeScript", "Tailwind CSS"],
			repoUrl:
				"https://github.com/OmarRehan777/order-management-dashboard",
			image: "/projects/order-management/OMD thumbnail.png",
		},
		{
			title: "Smart To‑Do List",
			status: "Live",
			description:
				"Task management app built with React Hooks and Context API, featuring a clean UI and practical task filtering.",
			highlights: [
				"Context-based state management for tasks.",
				"Simple filtering experience (All / Pending / Completed).",
				"Polished UI with Material UI components.",
			],
			stack: ["React", "Context API", "MUI"],
			repoUrl: "https://github.com/OmarRehan777/todo-list-react",
			liveUrl: "https://omarrehan777.github.io/todo-list-react/",
			image: "/projects/todo/todo-list-react-mockup.png",
		},
		{
			title: "Simple Weather App",
			status: "Live",
			description:
				"Real-time weather app consuming external APIs with a responsive UI. Uses Axios for fetching and supports environment-based API keys.",
			highlights: [
				"API integration with Axios and clean loading flow.",
				"Responsive layout across devices.",
				"Simple, focused UX for quick weather checks.",
			],
			stack: ["React", "Axios", "API"],
			repoUrl: "https://github.com/OmarRehan777/simple-weather-app",
			liveUrl: "https://omarrehan777.github.io/simple-weather-app/",
			image: "/projects/weather/SimpleWeatherAPI.png",
		},
		{
			title: "Sticky Wall",
			status: "Live",
			description:
				"Notes app using Vanilla JavaScript with CRUD operations and LocalStorage persistence.",
			highlights: [
				"CRUD operations for sticky notes.",
				"LocalStorage persistence for a lightweight offline experience.",
				"Simple, fast, no-framework build.",
			],
			stack: ["JavaScript", "LocalStorage", "CRUD"],
			repoUrl: "https://github.com/OmarRehan777/Sticky-wall",
			liveUrl: "https://omarrehan777.github.io/Sticky-wall/",
			image: "/projects/sticky/Sticky-wall JS.png",
		},
	] as Project[],
};
