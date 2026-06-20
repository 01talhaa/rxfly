"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.6a5.44 5.44 0 0 0-1.5-3.89 5.07 5.07 0 0 0-.15-3.83s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.89c0 5.07 3 6.26 6 6.6a4.8 4.8 0 0 0-1 3.24v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Navbar() {
  const { locale, t, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-fuchsia-500 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all">
             <span className="text-white font-bold text-sm">Rx</span>
          </div>
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            RxFly
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
          {[
             { name: t.nav.features, href: "#features" },
             { name: t.nav.architecture, href: "#modes" },
             { name: t.nav.whyFree, href: "#why-free" },
             { name: t.nav.faq, href: "#faq" },
          ].map((link, i) => (
             <Link key={i} href={link.href} className="text-slate-300 hover:text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-all">
                {link.name}
             </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* <Link
            href="https://github.com"
            target="_blank"
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </Link> */}
          
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-all font-medium border border-white/10 rounded-full px-4 py-2 hover:bg-white/5 bg-slate-900/50"
          >
            <Globe className="w-4 h-4 text-purple-400" />
            <span className="text-xs uppercase tracking-wider">{locale === 'en' ? 'EN | বাং' : 'বাং | EN'}</span>
          </button>
          
           <Link
            href="#download"
            className="hidden md:inline-flex items-center gap-2 bg-white text-slate-950 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-slate-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            {t.nav.download} <ChevronRight className="w-4 h-4" />
          </Link>
          
          {/* Hamburger (Mobile) */}
          <button 
            className="lg:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -20 }}
           className="lg:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-2 shadow-2xl"
        >
          {[
             { name: t.nav.features, href: "#features" },
             { name: t.nav.architecture, href: "#modes" },
             { name: t.nav.whyFree, href: "#why-free" },
             { name: t.nav.faq, href: "#faq" },
          ].map((link, i) => (
             <Link 
               key={i} 
               href={link.href} 
               onClick={() => setMobileMenuOpen(false)} 
               className="text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-colors font-medium border border-transparent hover:border-white/10"
             >
                {link.name}
             </Link>
          ))}
          <div className="h-px w-full bg-white/10 my-2" />
          <Link 
            href="#download" 
            onClick={() => setMobileMenuOpen(false)} 
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-6 py-4 rounded-xl font-bold w-full mt-2"
          >
            {t.nav.download} <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
}
