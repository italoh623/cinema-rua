import type { Metadata } from "next";
import { sometypeMono, favela } from "@/font/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nome da Página",
  description: "Cinema de rua",
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
