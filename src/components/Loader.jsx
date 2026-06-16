"use client";
import React from "react";
import { motion } from "framer-motion";
import { TbCpu } from "react-icons/tb";

export default function Loader({ message = "Initializing Network Secure Nodes..." }) {
  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center px-6 relative overflow-hidden select-none">
      {/* Background Cyber Glow Aura reflection */}
      <div className="absolute w-[300px] h-[150px] bg-indigo-500/5 blur-[90px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative flex flex-col items-center gap-6 z-10">
        
        {/* HIGH-FIDELITY HARDWARE SPINNER MODULE */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Outer Segment Ring Layer */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-zinc-900 border-t-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
          />
          
          {/* Inner Counter Rotation Ring */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
            className="absolute w-10 h-10 rounded-full border border-zinc-900 border-b-purple-500/60"
          />

          {/* Central Anchor Microchip Asset */}
          <div className="text-indigo-400 text-lg">
            <TbCpu className="animate-pulse" />
          </div>
        </div>

        {/* TYPOGRAPHY STRING FEEDBACK INFRASTRUCTURE */}
        <div className="text-center">
          <p className="text-xs font-black text-white tracking-widest uppercase font-mono">
            Processing
          </p>
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-1 animate-pulse">
            {message}
          </p>
        </div>

      </div>
    </div>
  );
}