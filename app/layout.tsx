import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justine Upano | Developer",
  description:
    "Passionate developer specializing in crafting elegant and functional web applications. Skilled in ReactJS, JavaScript, and creating intuitive user experiences. Explore my portfolio to see projects that showcase my dedication to clean code and innovative solutions.",
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
