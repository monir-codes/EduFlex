"use client";
import { motion } from "framer-motion";
import { TbRocket, TbStack, TbShieldCheckered, TbArrowUpRight, TbUsers, TbActivity } from "react-icons/tb";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    { 
      icon: <TbRocket className="text-xl text-indigo-400" />, 
      title: "The Mission", 
      desc: "Empowering engineers to acquire production-ready mental models and architecture frameworks through high-fidelity digital learning assessment nodes." 
    },
    { 
      icon: <TbStack className="text-xl text-purple-400" />, 
      title: "Curated Stack", 
      desc: "Hand-picked code ecosystems, components kits, optimized database aggregation vectors, and premium minimalist SaaS design structures." 
    },
    { 
      icon: <TbShieldCheckered className="text-xl text-emerald-400" />, 
      title: "Secure Node", 
      desc: "Advanced cryptographic security checking routines ensuring safe independent developer source transactions globally." 
    }
  ];

  const metrics = [
    { label: "Active Nodes", count: "48,290+", trend: "+12% this week" },
    { label: "Data Pipeline", count: "99.98%", trend: "Operational status" },
  ];

  return (
    <main className="min-h-screen bg-[#09090b] pt-36 pb-24 px-6 relative overflow-hidden">
      {/* Background Deep Neon Aurora Radial Blur Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-indigo-600/10 via-purple-600/5 to-transparent blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER SECTION WITH ANIMATED TEXT MARKERS */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-[10px] font-black uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
            Core Infrastructure Matrix
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight mt-5 leading-[1.15]"
          >
            Engineering the Next Layer of <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500">Tech Marketplaces.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-sm text-zinc-500 leading-relaxed font-normal"
          >
            EduFlex removes the structural friction between raw source assets and professional scaling. We provide an ecosystem optimized strictly for high-fidelity performance.
          </motion.p>
        </div>

        {/* HIGH-INTERACTIVE VALUE GRID (HOVER REVOLUTION) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {values.map((v, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              whileHover={{ y: -6, border: "1px solid rgba(99, 102, 241, 0.25)" }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-8 bg-zinc-900/10 border border-zinc-900 rounded-[2rem] backdrop-blur-md relative group overflow-hidden transition-all duration-300 shadow-2xl"
            >
              {/* Subtle dynamic neon corner hover flash overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-11 h-11 rounded-2xl bg-zinc-950 border border-zinc-900/80 flex items-center justify-center mb-6 group-hover:border-indigo-500/20 group-hover:bg-zinc-900 transition-all duration-300">
                {v.icon}
              </div>
              <h3 className="text-sm font-black text-white tracking-tight mb-3 group-hover:text-indigo-400 transition-colors duration-200">{v.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-normal">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* EXTRA INTERACTIVE META ANALYSIS ROW */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-b from-zinc-900/30 to-zinc-950/20 border border-zinc-900 p-8 rounded-[2.5rem] backdrop-blur-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-400">
              <TbActivity className="text-indigo-400 text-base" /> Operational Status Node
            </div>
            <h4 className="text-lg font-extrabold text-white mt-2 tracking-tight">Vercel & Next.js Edge Optimized Runtime Engine</h4>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
              Every system transaction is verified dynamically using client-side hooks, reducing latency parameters by up to 40% globally.
            </p>
            <Link href="/items" className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-white mt-5 transition-all group/lnk">
              Explore dynamic mesh system <TbArrowUpRight className="group-hover/lnk:translate-x-0.5 group-hover/lnk:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Side metrics inside About layout box */}
          <div className="md:col-span-6 grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <div key={i} className="bg-zinc-950/60 border border-zinc-900/80 p-5 rounded-2xl hover:border-zinc-800 transition-colors">
                <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{m.label}</p>
                <h5 className="text-xl font-black text-white mt-1.5 font-mono tracking-tight">{m.count}</h5>
                <span className="text-[10px] text-emerald-400 font-medium block mt-1">{m.trend}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </main>
  );
}