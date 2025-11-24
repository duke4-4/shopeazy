// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopEazy - Your One-Stop E-Commerce",
  description: "Mini e-commerce platform built for Uncommon.org assessment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
