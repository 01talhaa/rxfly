"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

export default function WhyFree() {
  const { t } = useLanguage();

  return (
    <section id="why-free" className="py-24 relative z-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm"
          >
            {/* Soft inner glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-[80px]" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                <HeartHandshake className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-6">
                  {t.whyFree.title}
                </h2>
                
                <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                  <p>{t.whyFree.content_p1}</p>
                  <p>{t.whyFree.content_p2}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
