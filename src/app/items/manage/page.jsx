"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbTrash, TbEdit, TbCpu, TbEye, TbLayersIntersect, TbCircleCheck } from "react-icons/tb";
import Link from "next/link";
import Swal from "sweetalert2";
import PrivateRoute from "@/components/PrivateRoute";

const INITIAL_MOCKED_REPOSITORY = [
  { id: 1, title: "Next.js 14 Complete Guide", price: 49.00, category: "Web Dev", serial: "XN-901-AX" },
  { id: 2, title: "E-Commerce React Template", price: 39.00, category: "UI/UX", serial: "RC-332-LM" },
  { id: 3, title: "Node.js Backend Bootcamp", price: 45.00, category: "Web Dev", serial: "ND-404-BK" }
];

export default function ManageItemsPage() {
  const [repository, setRepository] = useState(INITIAL_MOCKED_REPOSITORY);

  const handlePurgeSequence = (targetId, assetTitle) => {
    Swal.fire({
      title: "Confirm Data Purge?",
      text: `Are you absolute certain you want to erase resource node [${assetTitle}]? This action unlatches active index files records vectors permanently.`,
      icon: "warning",
      showCancelButton: true,
      background: "#09090b",
      color: "#ffffff",
      confirmButtonColor: "#f43f5e",
      cancelButtonColor: "#27272a",
      confirmButtonText: "Execute Purge Command",
      cancelButtonText: "Abort",
      customClass: { popup: "border border-zinc-800 rounded-[2rem]" }
    }).then((result) => {
      if (result.isConfirmed) {
        // Dynamic state mapping calculation exclusion loop filters out targeted identity string row
        setRepository(repository.filter((item) => item.id !== targetId));
        
        Swal.fire({
          title: "Memory Erased",
          text: "The targeted dataset pointer mapping variable has been completely excluded from live runtime matrix configurations.",
          icon: "success",
          background: "#09090b",
          color: "#ffffff",
          confirmButtonColor: "#6366f1"
        });
      }
    });
  };

  return (
    <PrivateRoute>
      <main className="min-h-screen bg-[#09090b] pt-24 pb-12 px-6 max-w-5xl mx-auto relative overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="border-b border-zinc-900 pb-5 mb-8 relative z-10">
          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            Cluster Database Management
          </span>
          <h1 className="text-2xl font-black text-white tracking-tight mt-3">Manage Core Products Registry</h1>
        </div>

        {/* HIGH-FIDELITY CORPORATE INTERFACE TABLE DATA LAYER EXPANSION */}
        <div className="w-full bg-zinc-950/20 border border-zinc-900 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl relative z-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-medium text-zinc-400">
              <thead>
                <tr className="border-b border-zinc-900 bg-zinc-950 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                  <th className="py-4 px-5">Resource Index String</th>
                  <th className="py-4 px-5">Product Target Identifier</th>
                  <th className="py-4 px-5">Segmentation Domain</th>
                  <th className="py-4 px-5">Cost Value</th>
                  <th className="py-4 px-5 text-right">Operations Pipeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900/50">
                <AnimatePresence mode="popLayout">
                  {repository.map((item) => (
                    <motion.tr key={item.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="hover:bg-zinc-900/20 transition-colors group">
                      <td className="py-4 px-5 font-mono text-zinc-500 font-bold tracking-tight">{item.serial}</td>
                      <td className="py-4 px-5 font-black text-white tracking-tight group-hover:text-indigo-400 transition-colors duration-200">{item.title}</td>
                      <td className="py-4 px-5">
                        <span className="bg-zinc-900 text-zinc-400 border border-zinc-800 px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider">{item.category}</span>
                      </td>
                      <td className="py-4 px-5 font-mono font-black text-zinc-200">${item.price.toFixed(2)}</td>
                      <td className="py-4 px-5 text-right inline-flex items-center gap-2 justify-end w-full pt-3">
                        <Link href={`/items/${item.id}`} className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 rounded-xl transition-all cursor-pointer shadow-md" title="Preview Live Node">
                          <TbEye className="text-sm" />
                        </Link>
                        <button type="button" onClick={() => handlePurgeSequence(item.id, item.title)} className="p-2 bg-zinc-950 border border-zinc-900 text-rose-400 hover:text-white hover:bg-rose-500 hover:border-transparent rounded-xl transition-all cursor-pointer shadow-md" title="Execute Data Purge">
                          <TbTrash className="text-sm" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {repository.length === 0 && (
            <div className="py-12 text-center bg-zinc-950/40">
              <TbLayersIntersect className="text-2xl text-zinc-700 mx-auto mb-2 animate-spin" />
              <h4 className="text-xs font-black text-white tracking-tight">Active Index Rows Flushed Clear</h4>
              <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mt-0.5">Database storage matrix currently registers zero live nodes.</p>
            </div>
          )}
        </div>

        {/* Operational Security Node Footprint Alert Row */}
        <div className="mt-8 text-left bg-zinc-950/40 p-4 border border-zinc-900 rounded-xl flex items-center justify-between text-[10px] text-zinc-600 font-bold uppercase tracking-wider relative z-10">
          <div className="flex items-center gap-2"><TbCpu className="text-indigo-500 text-base" /><span>Runtime synchronization telemetry links completely active.</span></div>
          <div className="flex items-center gap-1"><TbCircleCheck className="text-purple-500" /><span>Secure Context Lock Validated</span></div>
        </div>
      </main>
    </PrivateRoute>
  );
}