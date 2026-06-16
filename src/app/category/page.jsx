"use client";
import React from "react";
import { motion } from "framer-motion";
import { TbCode, TbPalette, TbDatabase, TbArrowUpRight, TbCpu, TbLayersIntersect } from "react-icons/tb";
import Link from "next/link";
import Swal from "sweetalert2";

export default function CategoryPage() {
  
  // High-tech categorized metadata bucket matching global portfolio schemas
  const categoryRegistryNodes = [
    {
      slug: "web-dev",
      name: "Web Development Nodes",
      icon: <TbCode className="text-2xl text-indigo-400" />,
      count: "14 Available Assets",
      desc: "Full-stack modular ecosystems containing raw Next.js structures, App Router boilerplate architectures, and optimized API routers configurations.",
      color: "from-indigo-600/20 to-transparent"
    },
    {
      slug: "ui-ux",
      name: "UI/UX Matrix Bundles",
      icon: <TbPalette className="text-2xl text-purple-400" />,
      count: "9 Active Templates",
      desc: "Premium, typography-focused Tailwind CSS components meshes designed strictly under modern minimalist SaaS framework guidelines.",
      color: "from-purple-600/20 to-transparent"
    },
    {
      slug: "backend",
      name: "Database Cluster Engines",
      icon: <TbDatabase className="text-2xl text-emerald-400" />,
      count: "6 Production Stacks",
      desc: "Deep backend layers orchestration setups featuring advanced MongoDB indexing strategies, runtime controllers tracking tools, and secure token vaults.",
      color: "from-emerald-600/20 to-transparent"
    }
  ];

  const triggerHandshakeAlert = (categoryName) => {
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      background: "#18181b",
      color: "#ffffff",
      icon: "success",
      title: `Routing parameters set to: ${categoryName}`,
      customClass: { popup: "border border-zinc-800 rounded-xl shadow-2xl" }
    });
  };

  return (
    // 🛠️ FIX: Tight responsive space layout constraints active completely (pt-24 pb-12)
    <main className="min-h-screen bg-[#09090b] pt-24 pb-12 px-6 max-w-7xl mx-auto relative overflow-hidden selection:bg-indigo-500/20">
      {/* Background Cyber Gradient Glow Blur Mesh Layer */}
      <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-purple-500/5 via-indigo-500/5 to-transparent blur-[130px] rounded-full pointer-events-none" />

      {/* CORE CAPTION HEADING ZONE */}
      <div className="border-b border-zinc-900 pb-6 mb-10 relative z-10">
        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full shadow-inner">
          Data Segment Registry
        </span>
        <h1 className="text-3xl font-black text-white tracking-tight mt-3">Architecture Categories</h1>
        <p className="mt-1 text-xs text-zinc-500 leading-relaxed max-w-xl font-normal antialiased">
          Select an isolated structural domain category to extract optimized asset packs, production schemas, and specialized runtime modules variables.
        </p>
      </div>

      {/* ASYMMETRIC GLASSMORPHIC HOVER GRID LAYOUT BOX CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {categoryRegistryNodes.map((cat, idx) => (
          <motion.div
            key={cat.slug}
            whileHover={{ y: -4, border: "1px solid rgba(255,255,255,0.08)" }}
            transition={{ type: "spring", stiffness: 350, damping: 24 }}
            className="bg-zinc-900/10 border border-zinc-900 rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 backdrop-blur-xl shadow-2xl"
          >
            {/* Ambient Background Gradient Corner Flare Mesh reflection */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`} />

            <div>
              {/* Icon Container Layout */}
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-900/80 flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform duration-300">
                {cat.icon}
              </div>

              {/* Counts Indicator Metadata Pill */}
              <span className="text-[9px] font-black tracking-widest text-zinc-500 uppercase bg-zinc-950 px-2 py-0.5 rounded border border-zinc-900 shadow-inner">
                {cat.count}
              </span>

              <h2 className="text-base font-black text-white tracking-tight mt-3 mb-2 group-hover:text-indigo-400 transition-colors duration-200">
                {cat.name}
              </h2>

              <p className="text-zinc-500 text-xs leading-relaxed font-normal antialiased">
                {cat.desc}
              </p>
            </div>

            {/* Link Dispatcher Router Pointing to Central Filter Grid */}
            <div className="mt-8 pt-4 border-t border-zinc-900/40 flex justify-end">
              <Link
                href="/items"
                onClick={() => triggerHandshakeAlert(cat.name)}
                className="inline-flex items-center gap-1.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white px-3.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer select-none"
              >
                <span>Initialize Pipeline</span>
                <TbArrowUpRight className="text-xs text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* System Status Metrics Footer Banner Overlay */}
      <div className="mt-12 bg-zinc-950/40 border border-zinc-900 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 backdrop-blur-sm">
        <div className="flex items-center gap-3 text-left">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
            <TbCpu className="text-base" />
          </div>
          <div>
            <h4 className="text-xs font-black text-white tracking-tight">Segment Isolation Active</h4>
            <p className="text-[10px] text-zinc-500 mt-0.5">Database taxonomy models are fully partitioned inside cluster routing maps structures safely.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-zinc-600 font-bold uppercase tracking-wider"><TbLayersIntersect className="text-indigo-500 text-sm" /> <span>EduFlex Index V2.9</span></div>
      </div>
    </main>
  );
}