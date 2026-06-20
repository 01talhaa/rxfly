"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Monitor, Server, Network } from "lucide-react";

export default function Modes() {
  const { t } = useLanguage();

  const modes = [
    {
      icon: <Monitor className="w-8 h-8 text-fuchsia-400" />,
      title: "Standalone",
      desc: t.modes.standalone,
    },
    {
      icon: <Server className="w-8 h-8 text-purple-400" />,
      title: "Server",
      desc: t.modes.server,
    },
    {
      icon: <Network className="w-8 h-8 text-blue-400" />,
      title: "Terminal",
      desc: t.modes.terminal,
    },
  ];

  return (
    <section id="modes" className="py-24 bg-slate-900/50 border-y border-white/5 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t.modes.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
           {/* Desktop Connecting Line */}
           <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent dashed-line" />

          {modes.map((mode, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-slate-950 border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(168,85,247,0.2)] z-10">
                {mode.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{mode.title}</h3>
              <p className="text-slate-400 max-w-[280px]">{mode.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .dashed-line {
           background-image: linear-gradient(to right, white 50%, transparent 50%);
           background-size: 10px 1px;
           background-color: transparent;
           opacity: 0.2;
        }
      `}</style>
    </section>
  );
}
