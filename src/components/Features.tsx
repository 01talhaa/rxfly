"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Zap, WifiOff, Box, ShieldCheck } from "lucide-react";

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: t.features.f1Title,
      desc: t.features.f1Desc,
    },
    {
      icon: <WifiOff className="w-6 h-6 text-blue-400" />,
      title: t.features.f2Title,
      desc: t.features.f2Desc,
    },
    {
      icon: <Box className="w-6 h-6 text-green-400" />,
      title: t.features.f3Title,
      desc: t.features.f3Desc,
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-fuchsia-400" />,
      title: t.features.f4Title,
      desc: t.features.f4Desc,
    },
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((opt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all group"
            >
              <div className="w-14 h-14 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {opt.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{opt.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {opt.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
