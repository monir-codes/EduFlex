"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbChevronDown, TbPlus, TbLayoutDashboard, TbLogout, TbMenuDeep, TbX } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Custom Live Connection Context Thread Instances
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log('User logged out successfully');
        setUserDropdown(false); // Close dropdown pipeline smoothly on execution success
      })
      .catch((err) => {
        console.error('Error logging out:', err);
      });
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Items", path: "/items" },
    { name: "Category", path: "/category" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-zinc-950/70 backdrop-blur-xl border-b border-zinc-900/80 py-3.5" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO MATCHING IMAGE DESIGN */}
        <Logo />

        {/* DESKTOP ROUTES */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              className={`text-sm font-medium tracking-tight transition-colors relative py-1 ${pathname === link.path ? "text-indigo-400" : "text-zinc-400 hover:text-white"}`}
            >
              {link.name}
              {pathname === link.path && (
                <motion.span layoutId="activeNav" className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-500 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* AUTH INTERACTION AND DROPDOWN MATRIX */}
        <div className="hidden md:block relative">
          {user ? (
            <div className="relative">
              <button 
                onClick={() => setUserDropdown(!userDropdown)} 
                className="flex items-center gap-2.5 bg-zinc-900/90 border border-zinc-800/80 pl-2 pr-4 py-1.5 rounded-full hover:bg-zinc-800 hover:border-zinc-700/80 transition-all cursor-pointer select-none"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-xs font-black flex items-center justify-center text-white shadow-md">
                  {user?.photoURL || user?.email?.charAt(0)?.toUpperCase() || "U"}
                </div>
                <span className="text-xs font-bold text-zinc-300 tracking-tight">
                  {user.displayName || "Active Developer"}
                </span>
                <TbChevronDown className={`w-3.5 h-3.5 text-zinc-500 transition-transform duration-300 ${userDropdown ? "rotate-180 text-white" : ""}`} />
              </button>

              {/* HIGH-FIDELITY CYBER DROPDOWN */}
              <AnimatePresence>
                {userDropdown && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }} 
                    animate={{ opacity: 1, y: 0, scale: 1 }} 
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 mt-3 w-56 bg-[#09090b]/90 border border-zinc-800/90 rounded-2xl p-2 shadow-2xl backdrop-blur-2xl z-50 overflow-hidden"
                  >
                    {/* Meta Section - Made Completely Dynamic */}
                    <div className="px-3 py-2.5 border-b border-zinc-900/80 mb-1.5">
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest truncate">
                        {user.email || "anonymous@node.io"}
                      </p>
                      <span className="inline-block mt-1 text-[9px] font-black uppercase tracking-wider bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded-full border border-indigo-500/20">
                        ⚡ Premium Member
                      </span>
                    </div>

                    {/* Navigation Items Links */}
                    <Link href="/items/add" className="flex items-center gap-3 p-2.5 text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-xl text-xs font-bold tracking-tight transition-colors group">
                      <TbPlus className="text-base text-indigo-400 group-hover:scale-110 transition-transform" /> Add Product
                    </Link>
                    
                    <Link href="/items/manage" className="flex items-center gap-3 p-2.5 text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-xl text-xs font-bold tracking-tight transition-colors group">
                      <TbLayoutDashboard className="text-base text-purple-400 group-hover:scale-110 transition-transform" /> Manage Products
                    </Link>
                    
                    {/* Destructive Action Trigger Linked directly to Firebase Context callback */}
                    <button 
                      type="button"
                      onClick={handleLogOut} 
                      className="w-full flex items-center gap-3 p-2.5 text-rose-400 hover:bg-rose-500/10 rounded-xl text-xs font-bold tracking-tight transition-all mt-1.5 border-t border-zinc-900 cursor-pointer"
                    >
                      <TbLogout className="text-base" /> Log Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link href="/login" className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20 tracking-tight">
              Sign In
            </Link>
          )}
        </div>

        {/* MOBILE INTERFACE PANEL BUTTON */}
        <button className="md:hidden text-zinc-400 hover:text-white transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <TbX className="text-2xl" /> : <TbMenuDeep className="text-2xl" />}
        </button>
      </div>

      {/* MOBILE EXPANDED LINKS GRID CONTAINER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-zinc-950 border-b border-zinc-900 px-6 py-4 flex flex-col gap-4 overflow-hidden">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} onClick={() => setIsOpen(false)} className={`text-sm font-medium ${pathname === link.path ? "text-indigo-400" : "text-zinc-400"}`}>
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}