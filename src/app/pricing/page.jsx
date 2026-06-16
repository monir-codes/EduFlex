"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { TbCircleCheck, TbBolt, TbHexagon3D, TbShieldLock, TbCircleX, TbLayersIntersect } from "react-icons/tb";
import Swal from "sweetalert2";

export default function PricingPage() {
  // Dynamic scaling configurations node pointer matrix array
  const [nodeCapacity, setNodeCapacity] = useState(2); // Steps: 1=5K, 2=20K, 3=100K, 4=Enterprise Infinite

  const capacitiesDict = {
    1: { users: "5,000 Learners", basePrice: 19, OldPrice: 29, tier: "Developer Sandbox" },
    2: { users: "25,000 Learners", basePrice: 49, OldPrice: 79, tier: "Growth Infrastructure" },
    3: { users: "100,000 Learners", basePrice: 129, OldPrice: 199, tier: "Cluster Dedicated Node" },
    4: { users: "Infinite Learners", basePrice: 499, OldPrice: 799, tier: "Global Edge Registry" }
  };

  const currentSelection = capacitiesDict[nodeCapacity];

  const triggerCheckout = (tierName, priceValue) => {
    Swal.fire({
      title: "Initializing Encrypted Checkout",
      text: `Gateway handshake initialization established for standard model [${tierName}] evaluated at $${priceValue}/mo.`,
      icon: "info",
      background: "#09090b",
      color: "#ffffff",
      confirmButtonColor: "#6366f1",
      confirmButtonText: "Propose Protocol Transaction",
      customClass: {
        popup: "border border-zinc-800 rounded-[2rem]",
        confirmButton: "rounded-xl font-bold px-5 py-3 text-xs tracking-tight transition-transform"
      }
    });
  };

  return (
    <main className="min-h-screen bg-[#09090b] pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Cyber Mesh Glow Aura Overlay */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* UPPER TYPOGRAPHY LAYOUT SECTION */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full shadow-inner">
            Resource Allocation Mesh
          </span>
          <h1 className="text-4xl font-black text-white tracking-tight mt-5 leading-[1.15]">
            Predictable Scaling <br />
            Built for <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500">Modern Teams.</span>
          </h1>
          <p className="mt-3 text-xs text-zinc-500 leading-relaxed font-normal">
            No unpredictable request parameters. Drag the optimization metrics tool below to dynamically calculate exact architecture limits costs.
          </p>
        </div>

        {/* 🎛️ DYNAMIC SLIDER HARDWARE CONTROLLER MATRIX BLOCK */}
        <div className="max-w-3xl mx-auto bg-zinc-950 border border-zinc-900 p-8 rounded-[2rem] shadow-2xl backdrop-blur-md mb-12 relative overflow-hidden group hover:border-zinc-800 transition-colors duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/[0.01] to-purple-600/[0.01] pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-zinc-900 pb-5 mb-6">
            <div>
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Active Scalability Target</p>
              <h3 className="text-xl font-black text-white mt-1 tracking-tight font-mono">{ currentSelection.users}</h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-indigo-400 font-bold bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full uppercase tracking-wider">{currentSelection.tier}</span>
            </div>
          </div>

          <input 
            type="range" min="1" max="4" step="1"
            value={nodeCapacity} onChange={(e) => setNodeCapacity(Number(e.target.value))}
            className="w-full h-1.5 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-indigo-500 focus:outline-none"
          />
          <div className="flex justify-between text-[10px] text-zinc-600 font-bold uppercase mt-3 px-1">
            <span>Sandbox</span><span>Growth</span><span>Dedicated Cluster</span><span>Infinite Edge</span>
          </div>
        </div>

        {/* HIGH-FIDELITY TWIN TIER CARDS RESPONSIVE GRID PLACEMENT BOX */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch mb-20">
          
          {/* CARD TIER 1: Standard Plan Options */}
          <motion.div 
            whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 350, damping: 24 }}
            className="p-8 bg-zinc-900/10 border border-zinc-900 rounded-[2.5rem] backdrop-blur-xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300 shadow-2xl"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-400"><TbHexagon3D className="text-xl" /></div>
                <div>
                  <h4 className="text-base font-black text-white tracking-tight">Standard Package Vector</h4>
                  <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider mt-0.5">{currentSelection.tier}</p>
                </div>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed font-normal mb-8 min-h-[36px]">Optimized baseline resource configuration arrays targeting professional creators and dynamic developer stacks.</p>
              
              <div className="mb-8 pb-6 border-b border-zinc-900/60 flex items-baseline gap-2">
                <span className="text-5xl font-black text-white tracking-tighter font-mono">${currentSelection.basePrice}</span>
                <span className="text-zinc-600 line-through text-sm font-mono">${currentSelection.OldPrice}</span>
                <span className="text-zinc-600 text-xs font-bold uppercase tracking-wider">/ mo</span>
              </div>

              <div className="flex flex-col gap-3.5 mb-8">
                {["Access to selected source assets packs", "Standard cluster deployment routines", "99.9% Edge SLA runtime guarantees", "Full email support infrastructure response"].map((f, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0"><TbCircleCheck className="text-indigo-400 text-xs font-bold" /></div>
                    <span className="text-xs text-zinc-400 font-medium tracking-tight truncate">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <button type="button" onClick={() => triggerCheckout(currentSelection.tier, currentSelection.basePrice)} className="w-full bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-xs font-black py-4 rounded-xl tracking-tight uppercase active:scale-[0.99] transition-all cursor-pointer shadow-md select-none">Initialize Provision Process &rarr;</button>
          </motion.div>

          {/* CARD TIER 2: Enterprise Scaling Options */}
          <motion.div 
            whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 350, damping: 24 }}
            className="p-8 bg-gradient-to-b from-indigo-500/[0.03] to-transparent border border-indigo-500/20 rounded-[2.5rem] backdrop-blur-xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300 shadow-2xl"
          >
            <span className="absolute top-5 right-6 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-widest shadow-inner">⚡ Unlimited Matrix</span>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-indigo-500/20 flex items-center justify-center text-indigo-400"><TbBolt className="text-xl animate-pulse" /></div>
                <div>
                  <h4 className="text-base font-black text-white tracking-tight">Full Scale Architecture</h4>
                  <p className="text-[10px] font-bold text-purple-400 uppercase tracking-wider mt-0.5">Enterprise Multi Cluster</p>
                </div>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed font-normal mb-8 min-h-[36px]">Dedicated absolute resource limits isolation mapping vectors built for large corporate learning clusters networks.</p>
              
              <div className="mb-8 pb-6 border-b border-zinc-900/60 flex items-baseline gap-1">
                <span className="text-5xl font-black text-white tracking-tighter font-mono">${(currentSelection.basePrice * 2.8).toFixed(0)}</span>
                <span className="text-zinc-600 text-xs font-bold uppercase tracking-wider">/ mo flat</span>
              </div>

              <div className="flex flex-col gap-3.5 mb-8">
                {["Infinite source elements extraction bundles", "Dedicated multi-region backend clusters setups", "Custom identity providers single sign-on hooks", "Personal operations engineer assignment node", "24/7/365 Tier-1 core network live hotlines"].map((f, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0"><TbCircleCheck className="text-purple-400 text-xs font-bold" /></div>
                    <span className="text-xs text-zinc-400 font-medium tracking-tight truncate">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <button type="button" onClick={() => triggerCheckout("Enterprise Multi-Cluster", (currentSelection.basePrice * 2.8).toFixed(0))} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black py-4 rounded-xl tracking-tight uppercase active:scale-[0.99] transition-all cursor-pointer shadow-lg shadow-indigo-600/20 select-none border border-transparent">Deploy Full Infrastructure Network</button>
          </motion.div>
        </div>

        {/* 🏢 CORPORATE COMPARISON MATRIX TABLE (THE ULTIMATE PROFESSIONAL VIBE ACCENT) */}
        <div className="mt-24 border-t border-zinc-900 pt-16">
          <div className="mb-8 text-left flex items-center gap-2"><TbLayersIntersect className="text-indigo-400 text-xl" /><h3 className="text-lg font-black text-white tracking-tight">Detailed Feature Matrix Protocol</h3></div>
          <div className="w-full bg-zinc-900/10 border border-zinc-900/80 rounded-3xl overflow-hidden backdrop-blur-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs font-medium text-zinc-400">
                <thead>
                  <tr className="border-b border-zinc-900 bg-zinc-950/40 text-[10px] font-black text-zinc-500 uppercase tracking-widest"><th className="py-4 px-6">Capability Metric Node</th><th className="py-4 px-6">Sandbox Plan</th><th className="py-4 px-6 text-indigo-400">Growth Infrastructure</th><th className="py-4 px-6 text-right">Enterprise Cluster</th></tr>
                </thead>
                <tbody className="divide-y divide-zinc-900/50">
                  <tr className="hover:bg-zinc-900/20"><td className="py-4 px-6 font-bold text-zinc-300">Monthly asset extractions limits</td><td className="py-4 px-6 font-mono">15 Packs</td><td className="py-4 px-6 font-mono text-zinc-200">150 Packs</td><td className="py-4 px-6 text-right font-mono text-indigo-400">Unlimited</td></tr>
                  <tr className="hover:bg-zinc-900/20"><td className="py-4 px-6 font-bold text-zinc-300">Next.js boilerplate configurations vector</td><td className="py-4 px-6"><TbCircleCheck className="text-zinc-600 text-base" /></td><td className="py-4 px-6"><TbCircleCheck className="text-indigo-500 text-base" /></td><td className="py-4 px-6 text-right inline-flex pt-4 pr-6"><TbCircleCheck className="text-purple-500 text-base" /></td></tr>
                  <tr className="hover:bg-zinc-900/20"><td className="py-4 px-6 font-bold text-zinc-300">Custom user naming dataset update hooks</td><td className="py-4 px-6"><TbCircleX className="text-zinc-800 text-base" /></td><td className="py-4 px-6"><TbCircleCheck className="text-indigo-500 text-base" /></td><td className="py-4 px-6 text-right inline-flex pt-4 pr-6"><TbCircleCheck className="text-purple-500 text-base" /></td></tr>
                  <tr className="hover:bg-zinc-900/20"><td className="py-4 px-6 font-bold text-zinc-300">Firebase identity metadata synchronization</td><td className="py-4 px-6"><TbCircleX className="text-zinc-800 text-base" /></td><td className="py-4 px-6"><TbCircleX className="text-zinc-800 text-base" /></td><td className="py-4 px-6 text-right inline-flex pt-4 pr-6"><TbCircleCheck className="text-purple-500 text-base" /></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom Shield Guarantee */}
        <div className="mt-16 text-center text-[10px] text-zinc-600 font-medium flex items-center justify-center gap-1.5"><TbShieldLock className="text-indigo-400 text-xs" /><span>SSL Secured Bank-Level Data Tunnel Encryption active for all global cloud gateway purchases.</span></div>

      </div>
    </main>
  );
}