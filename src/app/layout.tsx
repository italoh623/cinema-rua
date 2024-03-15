import type { Metadata } from "next";
import { sometypeMono, favela } from "@/font/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cinema de rua",
  description: "O projeto busca sensibilizar a população e os governantes sobre a importância de preservar esses locais históricos, não apenas como espaços para assistir a filmes, mas também como símbolos de memória coletiva, arte e diversidade cultural.",
  openGraph: {
    images: "./images/carousel/carousel-1.png",
  },
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
