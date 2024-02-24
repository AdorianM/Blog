import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lilita_One } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });
const lilitaOne = Lilita_One({
  weight: "400", 
  subsets: ["latin"], 
  fallback: ["sans-serif"],
  variable: '--font-lilita-one'
})

export const metadata: Metadata = {
  title: "Future Camel",
  applicationName: "FutureCamel",
  authors: [
    { name: "OldDew", url: "https://www.youtube.com/channel/UC4Tv4nxn8yZjyZKMvs_NvAg"},
    { name: "Future Camel" }
  ],
  keywords: [
    "Future Camel", "Vampire Solitaire", "Game Development", "Indie Games", "Game Studio", "Game Development Studio"
  ],
  robots: "index, follow",
  category: "Game Development",
  publisher: "Future Camel",
  description: "Indie game development studio. We make games, talk about the game development process and share our experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={`${lilitaOne.variable}`}>
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleTagManager gtmId="G-B09K5PFDXD" />
    </html>
  );
}
