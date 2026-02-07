import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Omar Rehan · Frontend Engineer",
  description:
    "Frontend-focused software engineer building modern web apps with React, Next.js, and Tailwind CSS.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Omar Rehan · Frontend Engineer",
    description:
      "Frontend-focused software engineer building modern web apps with React, Next.js, and Tailwind CSS.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Rehan · Frontend Engineer",
    description:
      "Frontend-focused software engineer building modern web apps with React, Next.js, and Tailwind CSS.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
