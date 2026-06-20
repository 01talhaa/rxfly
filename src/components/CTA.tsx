"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="download" className="py-32 relative z-10 flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            {t.cta.text.split('.')[0]}.
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.cta.text.substring(t.cta.text.indexOf('.') + 1)}
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center gap-3 bg-white text-purple-950 px-10 py-5 rounded-full font-bold text-xl transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
          >
            <Download className="w-6 h-6" />
            {t.hero.cta}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
