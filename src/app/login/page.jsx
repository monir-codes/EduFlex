"use client";
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

import useAuth from "@/hooks/useAuth";

import {
  TbMail,
  TbLock,
  TbBrandGoogle,
  TbFingerprint,
  TbCircleCheck,
} from "react-icons/tb";

export default function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isSuccess, setIsSuccess] = useState(false);

const router = useRouter();

const {
  login,
  googleSignIn,
} = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#09090b] flex items-center justify-center px-6 pt-16 relative overflow-hidden">
      {/* Glow Aura Layer */}
      <div className="absolute w-[500px] h-[250px] bg-purple-500/5 blur-[120px] rounded-full top-1/3 left-1/2 -translate-x-1/2 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="w-full max-w-[430px] bg-zinc-900/20 border border-zinc-900 rounded-[2.5rem] p-8 backdrop-blur-xl shadow-2xl relative group hover:border-zinc-800/80 transition-colors duration-500"
      >
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-900/80 flex items-center justify-center mx-auto mb-4 text-indigo-400 shadow-inner group-hover:scale-105 transition-transform">
            <TbFingerprint className="text-2xl" />
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">Access Token Gate</h2>
          <p className="text-xs text-zinc-500 mt-1">Authenticate identity token credentials sequence</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4.5 relative z-10">
          <div className="relative">
            <TbMail className="absolute left-4 top-4 text-zinc-500 text-base" />
            <input 
              type="email" required placeholder="Enter developer email..." value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-900 rounded-xl pl-12 pr-4 py-3.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/40 hover:border-zinc-800 transition-colors font-medium shadow-inner"
            />
          </div>

          <div className="relative">
            <TbLock className="absolute left-4 top-4 text-zinc-500 text-base" />
            <input 
              type="password" required placeholder="Security sequence..." value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-900 rounded-xl pl-12 pr-4 py-3.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/40 hover:border-zinc-800 transition-colors font-medium shadow-inner"
            />
          </div>

          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white text-xs font-black py-4 rounded-xl mt-2 transition-all cursor-pointer shadow-lg shadow-indigo-600/10 tracking-tight flex items-center justify-center gap-2">
            {isSuccess ? (
              <><TbCircleCheck className="text-base text-emerald-400 animate-bounce" /> Token Decrypted successfully</>
            ) : (
              "Sign In / Verify Node →"
            )}
          </button>
        </form>

        <div className="relative my-6 flex items-center justify-center">
          <span className="absolute w-full h-[1px] bg-zinc-900/60" />
          <span className="bg-[#09090b] px-3 text-[9px] text-zinc-600 uppercase font-black tracking-widest relative z-10">OR CONTINUE WITH</span>
        </div>

        <button className="w-full bg-zinc-950 border border-zinc-900 hover:bg-zinc-900 text-zinc-300 text-xs font-bold py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-all cursor-pointer hover:border-zinc-800 active:scale-[0.99]">
          <TbBrandGoogle className="text-base text-indigo-400" /> Identity Engine SSO
        </button>
      </motion.div>
    </main>
  );
}