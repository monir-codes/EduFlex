"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { TbPlus, TbPackage, TbCurrencyDollar, TbTag, TbFileText, TbPhoto, TbActivity, TbShieldLock, TbEye, TbCircleDot } from "react-icons/tb";
import Swal from "sweetalert2";
import PrivateRoute from "@/components/PrivateRoute";

export default function AddItemPage() {
  // --- Input State Parameter Management Matrices ---
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Web Dev");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // --- Premium SweetAlert2 Toast Feedback Hub ---
  const showToastNotification = (titleText, iconType = "success") => {
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      background: "#18181b",
      color: "#ffffff",
      icon: iconType,
      title: titleText,
      customClass: {
        popup: "border border-indigo-500/20 rounded-xl shadow-lg"
      }
    });
  };

  const handlePublishAsset = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const assetPayloadNode = { title, price: Number(price), category, image, desc, timestamp: new Date().toISOString() };
      console.log("Publishing Target Data Schema Variable Matrix:", assetPayloadNode);

      showToastNotification(`Asset [${title || "Node"}] successfully registry sync!`, "success");

      // Flush fields elements
      setTitle(""); setPrice(""); setImage(""); setDesc("");
    } catch (error) {
      console.error(error);
      showToastNotification("Database replication protocol rejected.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PrivateRoute>
      {/* 🛠️ PREMIUM GRID SPACE TUNING: pt-24 pb-12 tight responsive parameters focus */}
      <main className="min-h-screen bg-[#09090b] pt-24 pb-12 px-6 max-w-6xl mx-auto relative overflow-hidden selection:bg-indigo-500/30">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-transparent blur-[140px] rounded-full pointer-events-none" />

        {/* SECTION CAPTION HEADER LAYER */}
        <div className="border-b border-zinc-900 pb-5 mb-10 relative z-10">
          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full shadow-inner">
            Resource Provision Pipeline
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight mt-3">Spawning Data Workspace</h1>
          <p className="mt-1 text-xs text-zinc-500 font-normal antialiased">Compile data tokens variable parameters array directly into cloud storage.</p>
        </div>

        {/* HIGH-FIDELITY ASYMMETRIC DUAL LAYOUT PANEL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* LEFT SECTION PANELS: CONTROLLERS INPUT FORM INTERFACE SHEET */}
          <div className="lg:col-span-7 bg-zinc-950/40 border border-zinc-900 p-6 rounded-3xl backdrop-blur-xl shadow-2xl relative group hover:border-zinc-800/80 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/10 to-transparent pointer-events-none" />
            <h3 className="text-xs font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              <TbActivity className="text-indigo-400 animate-pulse text-sm" /> Configuration Form Controllers
            </h3>

            <form onSubmit={handlePublishAsset} className="flex flex-col gap-4">
              
              <div className="relative">
                <TbPackage className="absolute left-4 top-4 text-zinc-500 text-base" />
                <input 
                  type="text" required placeholder="Asset title string parameter identifier..." value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  className="w-full bg-zinc-950 border border-zinc-900 rounded-xl pl-12 pr-4 py-3.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/40 hover:border-zinc-800 transition-colors font-medium shadow-inner" 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <TbCurrencyDollar className="absolute left-4 top-4 text-zinc-500 text-base" />
                  <input 
                    type="number" required placeholder="Cost evaluation value..." value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    className="w-full bg-zinc-950 border border-zinc-900 rounded-xl pl-12 pr-4 py-3.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/40 hover:border-zinc-800 transition-colors font-medium shadow-inner" 
                  />
                </div>

                <div className="relative flex items-center bg-zinc-950 border border-zinc-900 rounded-xl pl-12 pr-4 shadow-inner hover:border-zinc-800 transition-colors">
                  <TbTag className="absolute left-4 top-4 text-zinc-500 text-base" />
                  <select 
                    value={category} onChange={(e) => setCategory(e.target.value)} 
                    className="w-full bg-transparent text-xs text-zinc-400 focus:outline-none cursor-pointer py-3.5 font-medium appearance-none"
                  >
                    <option value="Web Dev" className="bg-zinc-950 text-white">Web Dev Segment</option>
                    <option value="UI/UX" className="bg-zinc-950 text-white">UI/UX Matrix</option>
                    <option value="Backend" className="bg-zinc-950 text-white">Database Clusters</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <TbPhoto className="absolute left-4 top-4 text-zinc-500 text-base" />
                <input 
                  type="url" required placeholder="Dynamic asset validation image reference link URL..." value={image} 
                  onChange={(e) => setImage(e.target.value)} 
                  className="w-full bg-zinc-950 border border-zinc-900 rounded-xl pl-12 pr-4 py-3.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/40 hover:border-zinc-800 transition-colors font-medium shadow-inner" 
                />
              </div>

              <div className="relative">
                <TbFileText className="absolute left-4 top-4 text-zinc-500 text-base" />
                <textarea 
                  required rows="4" placeholder="Detailed engineering specs documentation properties markdown strings blocks..." value={desc} 
                  onChange={(e) => setDesc(e.target.value)} 
                  className="w-full bg-zinc-950 border border-zinc-900 rounded-xl pl-12 pr-4 py-3.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/40 hover:border-zinc-800 transition-colors font-medium shadow-inner resize-none" 
                />
              </div>

              <button 
                type="submit" disabled={submitting} 
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-xl font-black text-xs tracking-wider uppercase transition-all shadow-xl shadow-indigo-600/10 active:scale-[0.99] disabled:opacity-40 cursor-pointer select-none border border-transparent mt-2"
              >
                {submitting ? <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" /> : <><TbPlus className="text-sm" /> Compile Real-Time Core Node</>}
              </button>
            </form>
          </div>

          {/* RIGHT SECTION PANELS: REAL-TIME PREMIUM DYNAMIC PREVIEW CANVAS VIBE ACCENT */}
          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900/30 to-transparent border border-zinc-900 rounded-3xl p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[430px] sticky top-28 group hover:border-zinc-800 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-indigo-600/[0.01] blur-xl pointer-events-none" />
            
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 bg-zinc-950 border border-zinc-900 px-2.5 py-1 rounded-md mb-5 inline-flex shadow-inner items-center gap-1.5">
                <TbEye className="text-indigo-400 text-xs" /> Live Render Engine Matrix
              </span>
              
              {/* Dynamic Image Wrapper placeholder */}
              <div className="w-full aspect-[16/10] bg-zinc-950 border border-zinc-900/80 rounded-2xl overflow-hidden mb-4 relative shadow-inner">
                {image ? (
                  <img src={image} alt="Dynamic node representation renderer preview metadata" className="w-full h-full object-cover animate-fade-in" />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-700 text-[10px] font-bold uppercase tracking-wider gap-1.5 bg-zinc-950/40">
                    <TbPhoto className="text-xl text-zinc-800" /> Pipeline Empty Image URL
                  </div>
                )}
                <div className="absolute bottom-3 left-3 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-[8px] font-black uppercase tracking-widest text-indigo-400 px-2.5 py-1 rounded-md">
                  {category || "Unassigned"}
                </div>
              </div>

              <h2 className="text-base font-black tracking-tight text-white line-clamp-1 empty:h-5">
                {title || <span className="text-zinc-700">Variable String Placeholder Title...</span>}
              </h2>
              
              <div className="mt-4 bg-zinc-950 border border-zinc-900/60 p-4 rounded-xl flex items-baseline justify-between shadow-inner">
                <span className="text-2xl font-black text-white font-mono tracking-tighter">
                  ${price ? Number(price).toFixed(2) : "0.00"}
                </span>
                <span className="bg-indigo-500/10 text-indigo-400 text-[8px] font-black px-2 py-0.5 rounded border border-indigo-500/20 uppercase tracking-widest shadow-md">
                  Active Token Evaluated
                </span>
              </div>

              <div className="mt-4 p-4 border border-zinc-900/60 rounded-xl bg-zinc-950/20 min-h-[85px]">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1 flex items-center gap-1.5">
                  <TbCircleDot className="text-indigo-500 text-xs animate-pulse" /> Description String Logs
                </p>
                <p className="text-zinc-500 text-xs font-normal leading-relaxed line-clamp-2">
                  {desc || "Waiting for documentation configuration string input parameters injection inside the left control form sheet block elements..."}
                </p>
              </div>
            </div>

            {/* Bottom Guarantee Indicator block row */}
            <div className="mt-6 text-center text-[9px] text-zinc-600 font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 pt-4 border-t border-zinc-900/40">
              <TbShieldLock className="text-indigo-400 text-sm" />
              <span>SSL Cryptographic Data Handshake Core Secured</span>
            </div>
          </div>

        </div>
      </main>
    </PrivateRoute>
  );
}