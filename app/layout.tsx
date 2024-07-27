import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justine Upano | Developer",
  description:
    "Discover my journey to becoming a professional developer. Explore key milestones, projects, and how my skills have evolved over time.",
  applicationName: "Portfolio blog",
  authors: [{ name: "Justine Upano" }],
  keywords: [
    "portfolio, my, developer, page, reactjs, nextjs, typescript, javascript, tailwind, justine upano",
  ],
  creator: "Justine Upano",
  icons: {
    icon: "/icons/icon.png",
    apple: "/icons/icon.png",
    other: [
      { rel: "icon", type: "image/png", url: "/icons/icon.png" }, // SVG as favicon
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
