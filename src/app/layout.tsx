import type { Metadata } from "next";
import { Inter, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
// Next/Font supports Noto Sans Bengali or Noto Serif Bengali. I will just use Inter to keep it elegant or use local. Next font has Bengali support.
// We'll stick to Inter as requested, but Inter doesn't have native perfect Bengali. Oh wait over here Noto is better. Let's stick to Inter and Outfit as requested.
const outfit = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "RxFly by PQRIX TECH - Free Pharmacy POS",
  description: "The Ultimate Free Pharmacy POS Software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-50 antialiased overflow-x-hidden min-h-screen`}>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
