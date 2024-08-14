import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import React from "react";

const roboto = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
});

export const metadata: Metadata = {
  title: "Justine Upano | Developer",
  description:
    "Building things that meet user needs, and drive meaningful engagement. ReactJS Developer at New Stars Solutions Inc.",
  applicationName: "Portfolio blog",
  authors: [{ name: "Justine Upano" }],
  keywords: [
    "portfolio, my, developer, page, reactjs, nextjs, typescript, javascript, tailwind, justine upano",
  ],
  creator: "Justine Upano",
  icons: {
    icon: "/icons/blob.svg",
    apple: "/icons/blob.svg",
    other: [
      { rel: "icon", type: "svg", url: "/icons/blob.svg" }, // SVG as favicon
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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
