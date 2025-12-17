import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EdgesOf Solutions - Practical Enterprise AI for Real-World Impact",
  description: "Software-only, enterprise-grade AI solutions that work on top of your existing data, documents, and systems—delivering measurable value without operational disruption.",
  keywords: "Enterprise AI, Document Intelligence, Knowledge Management, AI Solutions, Research Automation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}