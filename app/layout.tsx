import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './animations.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI art in web design.",
  description: "How to be inspired by art to create a beautiful, fancy, and relaxing website using AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es_MX">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
