import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruben Varkey Alias - AI Engineer",
  description:
    "AI Engineer specializing in RAG, LLMs, and Computer Vision. Delivered AI/ML solutions at T-Mobile, Delta Air Lines, and the New York Yankees.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "RAG",
    "LLM",
    "Computer Vision",
    "PyTorch",
    "LangChain",
  ],
  authors: [{ name: "Ruben Varkey Alias" }],
  openGraph: {
    title: "Ruben Varkey Alias - AI Engineer",
    description:
      "AI Engineer specializing in RAG, LLMs, and Computer Vision",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
