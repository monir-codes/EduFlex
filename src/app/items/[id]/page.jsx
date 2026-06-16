"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion"; 
import { TbArrowLeft, TbStarFilled, TbCreditCard, TbCheck, TbCpu, TbActivity, TbShieldLock, TbCircleDot } from "react-icons/tb";
import Link from "next/link";
import Swal from "sweetalert2";

const PRODUCT_REPOSITORY = {
  1: { title: "Next.js 14 Complete Guide", provider: "CodingLab", price: 49.00, oldPrice: 79.00, discount: "38% OFF", rating: 4.9, reviews: "1.4K", category: "Web Dev", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60", desc: "Build modern full-stack apps with Next.js, Tailwind CSS & TypeScript from scratch. Includes deep dives into App Router layouts, server components, and edge rendering configurations optimized for premium deployment pipelines." },
  2: { title: "E-Commerce React Template", provider: "ThemeMarket", price: 39.00, oldPrice: 59.00, discount: "33% OFF", rating: 4.8, reviews: "1.1K", category: "UI/UX", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60", desc: "A premium, production-optimized React marketplace layout framework template with complex state filters handling, absolute cart architectures, dark theme structures sync, and fully hardware-accelerated animations vectors." },
  3: { title: "Node.js Backend Bootcamp", provider: "DevAcademy", price: 45.00, oldPrice: 69.00, discount: "34% OFF", rating: 4.7, reviews: "900", category: "Web Dev", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop&q=60", desc: "Deep dive backend engineering orchestration pipeline layer. Covers structural API composition, advanced MongoDB indexing, aggregation nodes routing setups, and scalable Redis caching clusters integration systems." }
};

export default function ItemDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Overview");

  const currentItem = PRODUCT_REPOSITORY[id] || PRODUCT_REPOSITORY[1];
  const tabs = ["Overview", "Specifications", "Reviews Matrix", "FAQs"];

  const getDynamicTabContent = () => {
    switch(activeTab) {
      case "Specifications":
        return `Architecture Framework: Next.js Node Ecosystem. Compiled optimization engines checked. Compatible with dynamic framework variables configurations.`;
      case "Reviews Matrix":
        return `Audited Rating Index Evaluated at ${currentItem.rating}/5.0 based on ${currentItem.reviews} automated pipeline checks records.`;
      case "FAQs":
        return `Includes immediate structural files extraction, updates distribution channels networks, and production support guidelines templates.`;
      default:
        return currentItem.desc;
    }
  };

  const handlePurchaseInitialization = () => {
    Swal.fire({
      title: "Handshake Authorized",
      text: `Gateway pipeline activated for asset contract package [${currentItem.title}] evaluated at $${currentItem.price.toFixed(2)}.`,
      icon: "success",
      background: "#09090b",
      color: "#ffffff",
      confirmButtonColor: "#6366f1",
      confirmButtonText: "Instantiate Network Secure Payment",
      customClass: {
        popup: "border border-zinc-800 rounded-[2rem]",
        confirmButton: "rounded-xl font-bold px-5 py-3 text-xs tracking-tight"
      }
    });
  };

  return (
    <main className="min-h-screen bg-[#09090b] pt-24 pb-12 px-6 max-w-7xl mx-auto relative overflow-hidden selection:bg-indigo-500/30 selection:text-white">
      {/* Dynamic Ambient Blur Background Mesh */}
      <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.07] pointer-events-none" />

      {/* BACK NAVIGATION EMBEDDED BUTTON PILL */}
      <div className="mb-6 relative z-10">
        <Link 
          href="/items" 
          className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-zinc-500 hover:text-white transition-all bg-zinc-900/20 hover:bg-zinc-900/50 border border-zinc-900 px-4 py-2 rounded-xl backdrop-blur-md group"
        >
          <TbArrowLeft className="text-sm group-hover:-translate-x-0.5 transition-transform" /> 
          <span>Central Registry Grid</span>
        </Link>
      </div>

      {/* TWO COLUMN ASSET DETAILS SPLIT VIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* LEFT COLUMN ELEMENT CANVAS CONTAINER */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="w-full aspect-[16/10] bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden relative shadow-[0_30px_100px_rgba(0,0,0,0.8)] group hover:border-indigo-500/20 transition-all duration-700 ease-out">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent z-10 pointer-events-none" />
            <img src={currentItem.img} alt={currentItem.title} className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out" />
            
            <div className="absolute top-4 left-4 flex gap-1.5 z-20">
              <span className="bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-[9px] font-black uppercase tracking-widest text-indigo-400 px-3 py-1.5 rounded-lg shadow-xl">
                {currentItem.category}
              </span>
              <span className="bg-purple-500/10 backdrop-blur-md border border-purple-500/20 text-[9px] font-black uppercase tracking-widest text-purple-400 px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" />
                Certified Node
              </span>
            </div>
          </div>

          {/* INTERNAL STRUCTURAL TAB CONTROLLERS */}
          <div className="flex border-b border-zinc-900/60 overflow-x-auto gap-2 pt-2 scrollbar-none">
            {tabs.map((tab) => (
              <button 
                key={tab} type="button" onClick={() => setActiveTab(tab)} 
                className={`text-xs font-bold pb-3 px-4 relative transition-colors whitespace-nowrap cursor-pointer ${activeTab === tab ? "text-indigo-400 font-black tracking-tight" : "text-zinc-500 hover:text-zinc-300"}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.span layoutId="detailActiveIndicator" className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]" />
                )}
              </button>
            ))}
          </div>

          {/* DYNAMIC DESCRIPTION VIEW LAYOUT SHEET BOX */}
          <div className="bg-zinc-900/10 border border-zinc-900 p-6 rounded-2xl backdrop-blur-md min-h-[150px] shadow-2xl relative overflow-hidden group hover:border-zinc-800 transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 to-transparent pointer-events-none" />
            <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2">
              <TbCpu className="text-indigo-400 text-sm" /> Infrastructure Runtime Logs
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed font-normal antialiased">{getDynamicTabContent()}</p>
          </div>
        </div>

        {/* RIGHT COLUMN ELEMENT GATEWAY PANEL CONTAINER */}
        <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900/40 via-zinc-950/20 to-transparent border border-zinc-900 rounded-3xl p-6 backdrop-blur-xl shadow-3xl relative overflow-hidden flex flex-col justify-between min-h-[460px] group hover:border-zinc-800/80 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-indigo-600/[0.02] blur-2xl pointer-events-none" />
          
          <div>
            <span className="text-[9px] font-black uppercase tracking-widest bg-zinc-950 text-zinc-500 border border-zinc-900 px-2.5 py-1 rounded-md mb-4 inline-block shadow-inner">
              Secure Asset Deployment
            </span>
            <h1 className="text-xl md:text-2xl font-black text-white tracking-tight leading-snug mt-1">{currentItem.title}</h1>
            
            <div className="flex items-center gap-2 mt-4 text-xs border-b border-zinc-900 pb-4">
              <div className="w-5 h-5 rounded-md bg-zinc-950 border border-zinc-900 text-[8px] font-black text-indigo-400 flex items-center justify-center shadow-inner">ID</div>
              <span className="text-zinc-500 font-bold tracking-tight">Core Registry: <span className="text-zinc-200 font-black">{currentItem.provider}</span></span>
            </div>
            
            <div className="flex items-center gap-2 mt-4 text-[10px] bg-zinc-950/30 border border-zinc-900/60 p-2.5 rounded-xl">
              <div className="flex text-amber-400 gap-0.5"><TbStarFilled /></div>
              <span className="font-black text-zinc-300 font-mono text-xs">{currentItem.rating}</span>
              <span className="text-zinc-600 font-bold uppercase tracking-wider text-[9px]">({currentItem.reviews} audits checked)</span>
            </div>
            
            <div className="mt-5 bg-zinc-950 border border-zinc-900/80 p-5 rounded-2xl flex items-baseline justify-between shadow-inner relative overflow-hidden">
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-black text-white font-mono tracking-tighter">${currentItem.price.toFixed(2)}</span>
                <span className="text-zinc-600 line-through text-xs font-mono font-bold">${currentItem.oldPrice.toFixed(2)}</span>
              </div>
              <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-black px-2.5 py-1 rounded-lg border border-emerald-500/20 shadow-md font-mono">{currentItem.discount}</span>
            </div>

            {/* RESOURCE CLAUSE ITEM RECOVERY CHECKLIST */}
            <div className="mt-5 flex flex-col gap-3 bg-zinc-950/10 p-4 border border-zinc-900/40 rounded-2xl">
              {["Continuous Instant Cloud Extraction Access", "Included Architectural Asset Licensing Agreement", "Validated Against Vercel Edge Execution Protocol", "Lifetime Updates Array Pull Sequences"].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-indigo-500/5 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <TbCheck className="text-[10px] text-indigo-400 font-black" />
                  </div>
                  <span className="text-xs text-zinc-400 font-medium tracking-tight truncate antialiased">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CORE BUTTON TRIGGER */}
          <button 
            type="button" onClick={handlePurchaseInitialization}
            className="w-full flex items-center justify-center gap-2.5 bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-xl font-black text-xs tracking-wider uppercase transition-all shadow-xl shadow-indigo-600/20 mt-6 active:scale-[0.99] cursor-pointer select-none border border-transparent group-hover:shadow-indigo-500/10"
          >
            <TbActivity className="text-base animate-pulse text-indigo-200" /> Deploy Contract Protocol &rarr;
          </button>
        </div>

      </div>

      {/* Footer Endorsement Clause */}
      <div className="mt-12 text-center text-[10px] text-zinc-600 font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 relative z-10">
        <TbShieldLock className="text-indigo-400 text-sm" />
        <span>SSL Secured Transaction Encryption Node</span>
      </div>
    </main>
  );
}