"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { TbArrowLeft, TbStarFilled, TbCreditCard, TbCheck, TbCpu, TbActivity, TbShieldLock } from "react-icons/tb";
import Link from "next/link";
import Swal from "sweetalert2";

// 📚 Global Synchronized Dataset Repository Matrix for Courses Pipeline
const COURSES_DATABASE_REPOSITORY = {
  101: { title: "MERN Stack Production Bootcamp", provider: "Rumman Dev Node", price: 89.00, oldPrice: 149.00, discount: "40% OFF", rating: 4.9, reviews: "1.4K", category: "Web Dev", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60", desc: "Master full-stack orchestration layout pipelines. Learn enterprise schema architecture validation setups, advanced API router processing rules, and token access authentication chains directly in production." },
  102: { title: "Advanced Tailwind UI Systems Mastery", provider: "Design Core Labs", price: 29.00, oldPrice: 49.00, discount: "41% OFF", rating: 4.8, reviews: "1.1K", category: "UI/UX", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60", desc: "Build typography-focused fluid interfaces adhering strictly to high-converting minimalist SaaS visual guidelines. Implement micro-interaction structures and professional components grids balances." },
  103: { title: "Firebase Enterprise Security Architecture", provider: "SecOps Network", price: 55.00, oldPrice: 99.00, discount: "44% OFF", rating: 4.7, reviews: "900", category: "Web Dev", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60", desc: "Secure runtime applications configurations. Deep dive into conditional route parameters checks middleware execution, server token keys validation, and encryption data handshake parameters storage layers." },
  104: { title: "Next.js Edge Framework Architecture", provider: "VercelVibes Academy", price: 79.00, oldPrice: 129.00, discount: "38% OFF", rating: 5.0, reviews: "2.1K", category: "Web Dev", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60", desc: "Optimize caching freeze runtime pipelines globally. Deploy middleware routers systems context mapping directly on global variables network components safely for absolute high-speed execution." },
  105: { title: "React Native High-Performance Bundles", provider: "Native Core Engine", price: 69.00, oldPrice: 119.00, discount: "42% OFF", rating: 4.8, reviews: "850", category: "UI/UX", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60", desc: "Compile fluid multi-platform layouts native variables nodes. Architecture state handling sync matrices loops inside secure container contexts targeting real-world responsive mobile viewpoints grids." },
  106: { title: "Framer Motion Fluid Interface Curves", provider: "Animation Nexus", price: 39.00, oldPrice: 65.00, discount: "40% OFF", rating: 4.9, reviews: "1.3K", category: "UI/UX", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60", desc: "Orchestrate luxury transition models. Deep parse layout changes scaling springs, structural gestures tracking nodes, and complex canvas exit pop layout matrix state variables controllers perfectly." }
};

export default function CourseDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Overview");

  // Fetch course node matching parameter or fall back to baseline record 
  const currentItem = COURSES_DATABASE_REPOSITORY[id] || COURSES_DATABASE_REPOSITORY[101];

  const tabs = ["Overview", "Specifications", "Reviews Matrix", "FAQs"];

  // 🛠️ CLONED MATCHING LOGIC: Same dynamic tab content filter as items details layout
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
    // 🛠️ EXACT CLONED STYLE MATCH: Spacing strictly bound down to premium tight standard dimensions
    <main className="min-h-screen bg-[#09090b] pt-24 pb-12 px-6 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-indigo-600/[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* BACK NAVIGATION EMBEDDED BUTTON PILL */}
      <div className="mb-6">
        <Link 
          href="/courses" 
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-white transition-colors bg-zinc-900/40 border border-zinc-900 px-4 py-2 rounded-xl backdrop-blur-md group"
        >
          <TbArrowLeft className="text-sm group-hover:-translate-x-0.5 transition-transform" /> 
          <span>Return to Central Registry Grid</span>
        </Link>
      </div>

      {/* TWO COLUMN ASSET DETAILS HIGH-FIDELITY SPLIT VIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* LEFT COLUMN ELEMENT CANVAS CONTAINER */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="w-full aspect-[16/10] bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden relative shadow-2xl group hover:border-indigo-500/20 transition-all duration-500">
            <img src={currentItem.img} alt={currentItem.title} className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out" />
            <div className="absolute top-4 left-4 flex gap-1.5">
              <span className="bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-[9px] font-black uppercase tracking-widest text-indigo-400 px-3 py-1 rounded-lg shadow-md">
                {currentItem.category}
              </span>
              <span className="bg-purple-500/10 backdrop-blur-md border border-purple-500/20 text-[9px] font-black uppercase tracking-widest text-purple-400 px-3 py-1 rounded-lg shadow-md">
                ⚡ Certified Node
              </span>
            </div>
          </div>

          {/* INTERNAL STRUCTURAL TAB CONTROLLERS SLIDER */}
          <div className="flex border-b border-zinc-900/80 overflow-x-auto gap-1 pt-2 scrollbar-none">
            {tabs.map((tab) => (
              <button 
                key={tab} type="button" onClick={() => setActiveTab(tab)} 
                className={`text-xs font-bold pb-2.5 px-4 relative transition-colors whitespace-nowrap cursor-pointer ${activeTab === tab ? "text-indigo-400 font-black" : "text-zinc-500 hover:text-zinc-300"}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.span layoutId="detailActiveIndicator" className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* DYNAMIC DESCRIPTION VIEW LAYOUT SHEET BOX */}
          <div className="bg-zinc-900/10 border border-zinc-900/60 p-6 rounded-2xl backdrop-blur-md min-h-[140px]">
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <TbCpu className="text-indigo-400" /> Operational Context Matrix
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed font-normal">{getDynamicTabContent()}</p>
          </div>
        </div>

        {/* RIGHT COLUMN ELEMENT GATEWAY PANEL CONTAINER */}
        <div className="lg:col-span-5 bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 backdrop-blur-md shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/[0.01] to-transparent pointer-events-none" />
          
          <div>
            <h1 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight">{currentItem.title}</h1>
            <div className="flex items-center gap-2 mt-3 text-xs border-b border-zinc-900 pb-4">
              <div className="w-5 h-5 rounded-md bg-indigo-600/10 border border-indigo-500/20 text-[9px] text-indigo-400 font-black flex items-center justify-center">PX</div>
              <span className="text-zinc-400 font-bold">Node Identity Provider: <span className="text-zinc-200 font-black">{currentItem.provider}</span></span>
            </div>
            
            <div className="flex items-center gap-1.5 mt-4 text-[10px]"><div className="flex text-amber-400"><TbStarFilled /></div><span className="font-bold text-zinc-300 font-mono">{currentItem.rating}</span><span className="text-zinc-600 font-medium">({currentItem.reviews} system operations audits checked)</span></div>
            
            <div className="mt-5 bg-zinc-950/60 border border-zinc-900 p-4 rounded-xl flex items-baseline gap-2.5">
              <span className="text-3xl font-black text-white font-mono tracking-tighter">${currentItem.price.toFixed(2)}</span>
              <span className="text-xs text-zinc-600 line-through font-mono">${currentItem.oldPrice.toFixed(2)}</span>
              <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded border border-emerald-500/20 shadow-inner font-mono">{currentItem.discount}</span>
            </div>

            {/* RESOURCE CLAUSE ITEM RECOVERY CRITERIAS CHECKLIST */}
            <div className="mt-5 flex flex-col gap-2.5 bg-zinc-950/20 p-4 border border-zinc-900 rounded-xl">
              {["Continuous Instant Cloud Extraction Access", "Included Architectural Asset Licensing Agreement", "Validated Against Vercel Edge Execution Protocol", "Lifetime Updates Array Pull Sequences"].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0"><TbCheck className="text-[10px] text-indigo-400 font-bold" /></div>
                  <span className="text-xs text-zinc-400 font-medium tracking-tight truncate">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CORE TRANSACTION DEPLOYMENT ACTION CALL BUTTON TRIGGER */}
          <button 
            type="button" onClick={handlePurchaseInitialization}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white py-3.5 rounded-xl font-black text-xs tracking-tight uppercase transition-all shadow-lg shadow-indigo-600/10 mt-6 active:scale-[0.99] cursor-pointer select-none border border-transparent"
          >
            <TbActivity className="text-base animate-pulse" /> Initialize Deployment Protocol Sequence &rarr;
          </button>
        </div>

      </div>

      {/* Footer Bottom Grid Accent Endorsement Clause */}
      <div className="mt-12 text-center text-[9px] text-zinc-600 font-medium flex items-center justify-center gap-1"><TbShieldLock className="text-indigo-400 text-xs" /><span>Secure transaction handshakes automatically signed via standard cryptographic data layers.</span></div>
    </main>
  );
}