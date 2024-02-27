import type { Metadata } from "next";
import { Sometype_Mono } from "next/font/google";
import "./globals.css";

const mainFontFamily = Sometype_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: '--font-sometype-mono'
})

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
      <body className={mainFontFamily.className}>{children}</body>
    </html>
  );
}
