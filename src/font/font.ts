import { Sometype_Mono } from "next/font/google";
import localFont from "next/font/local";

export const sometypeMono = Sometype_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: '--sometypeMono-font'
})

export const favela = localFont({
  src: "../../public/fonts/favelatype.otf",
  variable: '--favela-font'
})