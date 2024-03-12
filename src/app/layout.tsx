import type { Metadata } from "next";
import { sometypeMono, favela } from "@/font/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cinema de rua",
  description: "Cinema de rua",
  assets: "./images/carousel/carousel-1.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${sometypeMono.variable} ${favela.variable}`}>{children}</body>
    </html>
  );
}
