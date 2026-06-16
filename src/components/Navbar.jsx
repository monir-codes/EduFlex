"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ChevronDown, User, PlusCircle, LayoutDashboard, LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Mock Auth State
  const [user, setUser] = useState({ name: "Moniruzzaman", email: "dev@eduflex.io" });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/items" },
    { name: "Items", path: "/items" },
    { name: "Category", path: "/items" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-900 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Terminal className="text-white w-5 h-5" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">Edu<span className="text-indigo-400">Flex</span></span>
        </Link>

        {/* Desktop Routes (4+) */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className={`text-sm font-medium transition-colors ${pathname === link.path ? "text-indigo-400" : "text-zinc-400 hover:text-white"}`}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth Interface */}
        <div className="hidden md:block">
          {user ? (
            <div className="relative">
              <button onClick={() => setUserDropdown(!userDropdown)} className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full hover:bg-zinc-800 transition-all">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-[10px] flex items-center justify-center text-white">{user.name[0]}</div>
                <span className="text-sm text-zinc-300">{user.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${userDropdown ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {userDropdown && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-3 w-52 bg-zinc-950 border border-zinc-800 rounded-2xl p-2 shadow-2xl">
                    <div className="px-3 py-2 border-b border-zinc-900 mb-2">
                      <p className="text-xs text-zinc-500">Logged in as</p>
                      <p className="text-sm font-bold text-white truncate">{user.email}</p>
                    </div>
                    <Link href="/items/add" className="flex items-center gap-2 p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg text-sm"><PlusCircle className="w-4 h-4 text-indigo-400" /> Add Product</Link>
                    <Link href="/items/manage" className="flex items-center gap-2 p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg text-sm"><LayoutDashboard className="w-4 h-4 text-purple-400" /> Manage Products</Link>
                    <button onClick={() => setUser(null)} className="w-full flex items-center gap-2 p-2 text-rose-400 hover:bg-rose-500/10 rounded-lg text-sm mt-1 border-t border-zinc-900"><LogOut className="w-4 h-4" /> Sign Out</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link href="/login" className="bg-indigo-600 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20">Sign In</Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-400" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
      </div>
    </nav>
  );
}