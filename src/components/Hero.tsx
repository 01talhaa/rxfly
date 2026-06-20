"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Download, MonitorPlay, Box, Plus, ShoppingCart, ArrowRight } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            v1.0 is now live
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            {t.hero.tagline.replace('POS', '')}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent"> POS </span>
            {t.hero.tagline.includes('POS') ? '' : ''}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg lg:text-xl text-slate-400 mb-10 leading-relaxed md:pr-12"
          >
            {t.hero.description}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#download"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)] animate-pulse-slow"
            >
              <Download className="w-5 h-5" />
              {t.hero.cta}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* 3D Mockup Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative lg:h-[600px] flex items-center justify-center perspective-1000"
        >
          <motion.div 
            animate={{ 
              y: [-10, 10, -10],
              rotateX: [2, -2, 2],
              rotateY: [-2, 2, -2]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full aspect-[4/3] bg-slate-900/80 backdrop-blur-2xl border border-white/10 border-t-white/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),auto,0_0_50px_rgba(168,85,247,0.15)] relative overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Sleek Pharmacy POS UI Mock */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-fuchsia-500/5 mix-blend-overlay" />
            
            {/* Mac-like Window controls */}
            <div className="absolute top-0 w-full h-12 bg-white/[0.02] border-b border-white/5 flex items-center px-4 gap-2 z-10">
               <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
               <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
               <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
               <div className="ml-6 px-3 py-1 flex items-center bg-white/5 rounded-md border border-white/5">
                  <div className="h-2 w-24 bg-white/20 rounded-full" />
               </div>
            </div>

            {/* Application Layout */}
            <div className="absolute top-12 inset-x-0 bottom-0 flex p-4 gap-4 z-0">
               {/* Sidebar */}
               <div className="hidden sm:flex w-16 lg:w-20 rounded-xl bg-white/[0.03] border border-white/10 flex-col items-center py-5 gap-5 shadow-inner">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] mb-2">
                     <span className="text-white font-bold text-sm text-shadow">Rx</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shadow-sm" />
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center" />
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center" />
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center" />
               </div>

               {/* Main POS Area */}
               <div className="flex-1 flex gap-4">
                  {/* Item Grid */}
                  <div className="flex-1 rounded-xl bg-white/[0.02] border border-white/5 p-4 flex flex-col gap-4 relative overflow-hidden">
                     {/* Decorative light sweep */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px]" />
                     
                     <div className="flex justify-between items-center mb-2 px-1">
                        <h3 className="text-white/80 font-bold text-sm">All Medicines</h3>
                        <span className="text-white/40 text-xs">845 items</span>
                     </div>
                     
                     <div className="grid grid-cols-2 md:grid-cols-3 gap-3 relative z-10" >
                        {[
                           { name: 'Napa 500mg', price: '20.00' },
                           { name: 'Seclo 20mg', price: '70.00' },
                           { name: 'Sergel 20mg', price: '80.00' },
                           { name: 'Alatrol 10mg', price: '45.00' },
                           { name: 'Monas 10mg', price: '120.00' },
                           { name: 'Maxpro 20mg', price: '65.00' }
                        ].map((item, i) => (
                          <div key={i} className="bg-white/[0.03] rounded-xl p-3 border border-white/10 relative overflow-hidden group hover:border-purple-500/40 hover:bg-white/[0.06] transition-all flex flex-col justify-between">
                             <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 border border-white/5 rounded-lg mb-2 flex items-center justify-center">
                               <Box className="w-5 h-5 text-white/50" />
                             </div>
                             <div className="text-white/90 font-medium text-xs mb-0.5 truncate">{item.name}</div>
                             <div className="text-purple-300/80 text-[10px] font-semibold">৳ {item.price}</div>
                             <div className="absolute bottom-3 right-3 w-6 h-6 bg-white/10 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-purple-500 hover:scale-110 transition-all cursor-pointer">
                               <Plus className="w-3 h-3 text-white" />
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>

                  {/* Cart / Checkout (Receipt layout) */}
                  <div className="hidden md:flex w-48 lg:w-56 bg-gradient-to-b from-white/[0.06] to-white/[0.01] rounded-xl border border-white/10 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex-col relative overflow-hidden">
                     <h3 className="text-white/80 font-medium text-sm mb-4 flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4 text-purple-400" /> Current Order
                     </h3>
                     <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-1">
                        {[
                           { name: 'Napa 500mg', qty: 2, price: '40.00' },
                           { name: 'Seclo 20mg', qty: 1, price: '70.00' },
                           { name: 'Alatrol 10mg', qty: 1, price: '45.00' }
                        ].map((item, idx) => (
                           <div key={idx} className="flex justify-between items-start bg-white/[0.03] p-2.5 rounded-lg border border-white/5 group hover:bg-white/[0.06] transition-colors">
                              <div className="flex flex-col">
                                 <span className="text-white/90 text-xs font-medium">{item.name}</span>
                                 <span className="text-white/40 text-[10px] mt-0.5">Qty: {item.qty}</span>
                              </div>
                              <span className="text-white/80 text-xs font-medium">৳{item.price}</span>
                           </div>
                        ))}
                     </div>
                     <div className="mt- auto pt-4 border-t border-white/20 border-dashed">
                        <div className="flex justify-between items-center mb-1 text-white/50 text-xs">
                           <span>Subtotal</span>
                           <span>৳155.00</span>
                        </div>
                        <div className="flex justify-between items-center mb-4 text-white/50 text-xs text-green-400/80">
                           <span>Discount (5%)</span>
                           <span>-৳7.75</span>
                        </div>
                        <div className="flex justify-between items-center mb-6">
                           <span className="text-white/80 text-sm font-medium">Total</span>
                           <span className="text-purple-400 text-lg font-bold">৳147.25</span>
                        </div>
                        <div className="w-full py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-xl text-center shadow-[0_0_20px_rgba(192,132,252,0.4)] hover:shadow-[0_0_30px_rgba(192,132,252,0.6)] transition-shadow cursor-pointer flex justify-center items-center gap-2">
                           <span className="text-white font-bold text-sm">Pay Now</span>
                           <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
