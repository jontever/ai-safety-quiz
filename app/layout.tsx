import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Safety Practice Quiz",
  description:
    "Practice quiz covering AI safety, security, governance, and ethics across 10 modules. Test your knowledge with exam-style multiple choice questions.",
  keywords: [
    "AI safety",
    "AI security",
    "generative AI",
    "machine learning",
    "AI governance",
    "practice quiz",
    "certification prep",
  ],
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
