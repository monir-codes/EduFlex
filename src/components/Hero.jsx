"use client";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa6";
import { TbArrowUpRight, TbCpu, TbShieldCheck, TbLayersIntersect } from "react-icons/tb";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Neon Aura Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Text Hierarchy & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Live Badge Component */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-[#a855f7] text-[11px] font-bold tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            New: AI-Powered Micro Courses are Live!
          </motion.div>

          {/* Main Title Clip Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Learn. Build. Sell. <br />
            All in <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500">One Platform.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed font-normal"
          >
            EduFlex is the all-in-one marketplace to discover micro-courses, digital assets & tech items from top creators worldwide.
          </motion.p>

          {/* CTA Buttons Layout Sync */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <Link href="/courses" className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-600/20 w-full sm:w-auto">
              Explore Courses &rarr;
            </Link>
            <Link href="/items" className="group flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-zinc-800 transition-all w-full sm:w-auto">
              Browse Items <TbArrowUpRight className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          </motion.div>

          {/* Trust Footprint Badge Matrix */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4 }}
            className="mt-10 flex items-center gap-3 border-t border-zinc-900/80 pt-6 w-full"
          >
            <div className="flex -space-x-2.5">
              <div className="w-7 h-7 rounded-full border border-zinc-950 bg-gradient-to-r from-indigo-500 to-purple-500" />
              <div className="w-7 h-7 rounded-full border border-zinc-950 bg-gradient-to-r from-emerald-500 to-blue-500" />
              <div className="w-7 h-7 rounded-full border border-zinc-950 bg-gradient-to-r from-pink-500 to-rose-500" />
            </div>
            <p className="text-xs text-zinc-500 font-medium"><span className="text-zinc-300 font-bold">50K+</span> learners trust EduFlex</p>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: Glassmorphic Developer 3D Grid Mockup */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
            className="w-full max-w-[440px] aspect-square bg-gradient-to-b from-zinc-900/60 to-zinc-950/40 border border-zinc-800/80 rounded-[2.5rem] p-6 shadow-2xl backdrop-blur-md relative overflow-hidden group hover:border-indigo-500/20 transition-all duration-500"
          >
            {/* Top Minimal Window Matrix Control Tags */}
            <div className="flex justify-between items-center pb-4 border-b border-zinc-900">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <span className="text-[10px] font-mono text-zinc-600">developer_mesh.jsx</span>
            </div>

            {/* Inner Cyber Visual Core Element */}
            <div className="mt-8 flex flex-col items-center justify-center relative h-56">
              <div className="absolute w-36 h-36 bg-indigo-600/10 rounded-full blur-2xl animate-pulse" />
              <div className="w-20 h-20 bg-zinc-950 border border-indigo-500/20 rounded-3xl flex items-center justify-center shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500">
                <TbCpu className="text-4xl text-indigo-400 animate-spin" style={{ animationDuration: '12s' }} />
              </div>
              <div className="mt-6 bg-zinc-950/80 border border-zinc-900 px-4 py-2 rounded-xl text-center relative z-10 backdrop-blur-sm">
                <p className="text-xs text-zinc-400 font-mono tracking-tight">&lt;Compile pipeline="success" /&gt;</p>
              </div>
            </div>

            {/* Overlay Micro Statistics Metric Pill */}
            <div className="absolute bottom-6 right-6 bg-zinc-900/90 border border-zinc-800 p-3 rounded-2xl flex items-center gap-3 shadow-xl backdrop-blur-md hover:border-purple-500/30 transition-all">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400"><TbLayersIntersect className="text-lg" /></div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Active Modules</p>
                <p className="text-sm font-extrabold text-white">256 Nodes</p>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}