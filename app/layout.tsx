import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lilita_One } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const lilitaOne = Lilita_One({
  weight: "400", 
  subsets: ["latin"], 
  fallback: ["sans-serif"],
  variable: '--font-lilita-one'
})

export const metadata: Metadata = {
  title: "The unpretentious blog",
  description: "Just overthink it!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={`${lilitaOne.variable}`}>
      <body className={`bg-neutral-100 ${inter.className}`}>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
