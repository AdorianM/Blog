import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The unpretentious blog",
  description: "Just overthink it!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header className="sticky top-0 z-50">
      <div>
        <div className="text-center bg-neutral-700 p-4">
          <Link href="/">
            <h1 className="text-3x1 text-yellow-400 hover:underline font-bold">
              {metadata.title?.toString()}
            </h1>
          </Link>
          <p className="text-neutral-400">{metadata.description}</p>
        </div>
        <ScrollProgressBar />
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="text-center text-slate-400 border-t border-slate-400 mt-6 mx-48 py-6">
        <h1>Developed by</h1>
        <div className="font-extralight w-auto">
          <p>two</p>
        </div>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <body className={`bg-neutral-100 ${inter.className}`}>
        <div>
          <Header />
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
