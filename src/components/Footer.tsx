"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8 relative z-10">
      <div className="container mx-auto px-6 lg:px-12 text-center text-slate-500 text-sm">
        {t.cta.footer}
      </div>
    </footer>
  );
}
