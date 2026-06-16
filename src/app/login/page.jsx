"use client";
import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TbMail,
  TbLock,
  TbBrandGoogle,
  TbFingerprint,
  TbCircleCheck,
  TbUser,
  TbUserPlus,
} from "react-icons/tb";
import Swal from "sweetalert2";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  // --- Context Extraction ---
  const { signIn, createUser, googleSignIn } = useAuth();

  // --- Dynamic UI State Machine Flags ---
  const [authMode, setAuthMode] = useState("login"); // 'login' or 'register'
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // --- Reset forms tracking strings metrics inside states ---
  useEffect(() => {
    setFullName("");
    setEmail("");
    setPassword("");
  }, [authMode]);

  // --- Premium SweetAlert2 Toast Feedback Hub ---
  const showNotification = (title, icon = "success") => {
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2200,
      timerProgressBar: true,
      background: "#18181b",
      color: "#ffffff",
      icon: icon,
      title: title,
      customClass: {
        popup: "border border-indigo-500/20 rounded-xl shadow-lg",
      },
    });
  };

  // --- Submit Credential Data Routing Form Workflow Engine ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (authMode === "login") {
        const result = await signIn(email, password);
        showNotification(
          `Access Verified! Welcome, ${result.user.email} 🎉`,
          "success",
        );
        setEmail("");
        setPassword("");
        router.push("/");
      } else {
        await createUser(email, password);
        showNotification(
          "Account profile initialized successfully!",
          "success",
        );
        router.push("/");

        setTimeout(() => {
          setAuthMode("login");
        }, 1200);
      }
    } catch (error) {
      console.error("Auth Pipeline Intercept Crash Error:", error);
      const readableError = error.message.replace("Firebase: ", "");
      showNotification(readableError, "error");
    } finally {
      setLoading(false);
    }
  };

  // --- Google Identity Provider Mesh Click Trigger ---
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await googleSignIn();
      showNotification(
        `Decrypted Google SSO token: ${result.user.email}`,
        "success",
      );
      router.push("/");
    } catch (error) {
      console.error("Google Authentication Rejected:", error);
      showNotification("Federated cloud token exchange abandoned.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#09090b] flex items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Glow Aura Layer */}
      <div className="absolute w-[500px] h-[250px] bg-purple-500/5 blur-[120px] rounded-full top-1/3 left-1/2 -translate-x-1/2 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="w-full max-w-[430px] bg-zinc-900/20 border border-zinc-900 rounded-[2.5rem] p-8 backdrop-blur-xl shadow-2xl relative group hover:border-zinc-800/80 transition-colors duration-500"
      >
        {/* 🎛️ BACK TO ORIGINAL PREMIUM SLIDER TOGGLE GRID CONTROLLERS */}
        <div className="grid grid-cols-2 gap-1 p-1 bg-zinc-950 border border-zinc-900 rounded-2xl mb-8 relative z-10">
          <button
            type="button"
            onClick={() => setAuthMode("login")}
            className={`py-2.5 text-xs font-black uppercase tracking-wider rounded-xl relative transition-all cursor-pointer ${authMode === "login" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
          >
            <span className="relative z-10">Sign In Node</span>
            {authMode === "login" && (
              <motion.span
                layoutId="authActiveTab"
                className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-xl z-0"
              />
            )}
          </button>
          <button
            type="button"
            onClick={() => setAuthMode("register")}
            className={`py-2.5 text-xs font-black uppercase tracking-wider rounded-xl relative transition-all cursor-pointer ${authMode === "register" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
          >
            <span className="relative z-10">Register Node</span>
            {authMode === "register" && (
              <motion.span
                layoutId="authActiveTab"
                className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-xl z-0"
              />
            )}
          </button>
        </div>

        {/* IDENTITY FORM TITLE BOX */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-900/80 flex items-center justify-center mx-auto mb-4 text-indigo-400 shadow-inner group-hover:scale-105 transition-transform">
            {authMode === "login" ? (
              <TbFingerprint className="text-2xl" />
            ) : (
              <TbUserPlus className="text-2xl" />
            )}
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            {authMode === "login" ? "Access Token Gate" : "Initialize Identity"}
          </h2>
          <p className="text-xs text-zinc-500 mt-1">
            {authMode === "login"
              ? "Authenticate identity token credentials sequence"
              : "Instantiate new developer network registration profile"}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4.5 relative z-10"
        >
          <AnimatePresence mode="popLayout">
            {authMode === "register" && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="relative"
              >
                <TbUser className="absolute left-4 top-4 text-zinc-500 text-base" />
                <input
                  type="text"
                  required
                  placeholder="Enter developer profile name..."
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-900 rounded-xl pl-12 pr-4 py-3.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/40 hover:border-zinc-800 transition-colors font-medium shadow-inner"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative">
            <TbMail className="absolute left-4 top-4 text-zinc-500 text-base" />
            <input
              type="email"
              required
              placeholder="Enter developer email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-900 rounded-xl pl-12 pr-4 py-3.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/40 hover:border-zinc-800 transition-colors font-medium shadow-inner"
            />
          </div>

          <div className="relative">
            <TbLock className="absolute left-4 top-4 text-zinc-500 text-base" />
            <input
              type="password"
              required
              placeholder="Security sequence..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-900 rounded-xl pl-12 pr-4 py-3.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/40 hover:border-zinc-800 transition-colors font-medium shadow-inner"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white text-xs font-black py-4 rounded-xl mt-2 transition-all cursor-pointer shadow-lg shadow-indigo-600/10 tracking-tight flex items-center justify-center gap-2 disabled:opacity-40"
          >
            {loading ? (
              <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
            ) : authMode === "login" ? (
              "Sign In / Verify Node →"
            ) : (
              "Register Profile Node +"
            )}
          </button>
        </form>

        <div className="relative my-6 flex items-center justify-center">
          <span className="absolute w-full h-[1px] bg-zinc-900/60" />
          <span className="bg-[#09090b] px-3 text-[9px] text-zinc-600 uppercase font-black tracking-widest relative z-10">
            OR CONTINUE WITH
          </span>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full bg-zinc-950 border border-zinc-900 hover:bg-zinc-900 text-zinc-300 text-xs font-bold py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-all cursor-pointer hover:border-zinc-800 active:scale-[0.99] disabled:opacity-40"
        >
          <TbBrandGoogle className="text-base text-indigo-400" /> Identity
          Engine SSO
        </button>
      </motion.div>
    </main>
  );
}
