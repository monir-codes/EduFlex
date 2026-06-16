"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbStarFilled, TbCpu, TbSearch, TbCategory, TbArrowUpRight, TbCircleCheck, TbFilter } from "react-icons/tb";
import Link from "next/link";
import Swal from "sweetalert2";

// Global Products Repository Simulation Database Model 
const INITIAL_COURSES_NODES = [
  { 
    id: 1, 
    title: "Next.js 14 Complete Guide", 
    provider: "CodingLab", 
    price: 49.00, 
    oldPrice: 79.00, 
    rating: 4.9, 
    category: "Web Dev", 
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60" 
  },
  { 
    id: 2, 
    title: "E-Commerce React Template", 
    provider: "ThemeMarket", 
    price: 39.00, 
    oldPrice: 59.00, 
    rating: 4.8, 
    category: "UI/UX", 
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60" 
  },
  { 
    id: 3, 
    title: "Node.js Backend Bootcamp", 
    provider: "DevAcademy", 
    price: 45.00, 
    oldPrice: 69.00, 
    rating: 4.7, 
    category: "Web Dev", 
    img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop&q=60" 
  },
  { 
    id: 4, 
    title: "Framer Motion Advanced Layouts", 
    provider: "MotionStudio", 
    price: 29.00, 
    oldPrice: 49.00, 
    rating: 5.0, 
    category: "UI/UX", 
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60" 
  },
  { 
    id: 5, 
    title: "Redis Caching Clusters System", 
    provider: "SecOps Labs", 
    price: 65.00, 
    oldPrice: 99.00, 
    rating: 4.6, 
    category: "Backend", 
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60" 
  },
  { 
    id: 6, 
    title: "TypeScript Enterprise Guide", 
    provider: "SyntaxLab", 
    price: 55.00, 
    oldPrice: 89.00, 
    rating: 4.9, 
    category: "Web Dev", 
    img: "https://media.sitepen.com/blog-images/2021/10/blog_Definitive_TS_Guide-768x403.jpg" 
  },
  { 
    id: 7, 
    title: "Minimalist SaaS Dashboard Grid", 
    provider: "VercelVibes", 
    price: 34.00, 
    oldPrice: 55.00, 
    rating: 4.8, 
    category: "UI/UX", 
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=60" 
  },
  { 
    id: 8, 
    title: "MongoDB Aggregation Bootcamp", 
    provider: "DataMastery", 
    price: 42.00, 
    oldPrice: 69.00, 
    rating: 4.7, 
    category: "Backend", 
    img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=60" 
  }
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Dev", "UI/UX"];

  // --- Dynamic Filtering Core Logic Pipeline ---
  const filteredCourses = INITIAL_COURSES_NODES.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const triggerQuickPreviewToast = (itemTitle) => {
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      background: "#18181b",
      color: "#ffffff",
      icon: "info",
      title: `Inspecting Node: ${itemTitle}`,
      customClass: { popup: "border border-indigo-500/20 rounded-xl shadow-lg" }
    });
  };

  return (
    // Spacing strictly bound matching tight responsive margins (pt-24 pb-12)
    <main className="min-h-screen bg-[#09090b] pt-24 pb-12 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Glow Aura Mesh Field Grid Layer Overlay */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-indigo-500/5 blur-[130px] rounded-full pointer-events-none" />

      {/* SEARCH INTERFACE AR CATEGORIES HEADER FILTER CONTROLLERS CONTROL BOX */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-900 pb-8 mb-10 relative z-10">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            Central Index Hub
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight mt-3">Ecosystem Marketplace</h1>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          {/* Real-time Text Query Input Box */}
          <div className="relative flex-1 sm:w-64">
            <TbSearch className="absolute left-3.5 top-3.5 text-zinc-500 text-base" />
            <input 
              type="text" placeholder="Search operational asset string..." value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-900 rounded-xl pl-11 pr-4 py-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/40 transition-colors shadow-inner font-medium"
            />
          </div>

          {/* Tab Filter Selectors Box */}
          <div className="flex bg-zinc-950 border border-zinc-900 p-1 rounded-xl gap-1">
            {categories.map((cat) => (
              <button
                key={cat} type="button" onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all cursor-pointer ${selectedCategory === cat ? "bg-zinc-900 text-white border border-zinc-800" : "text-zinc-500 hover:text-zinc-300"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* HIGH-FIDELITY INTERACTIVE PRODUCT EXTRACTION GRID CARDS PLACEMENT BOX */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        <AnimatePresence mode="popLayout">
          {filteredCourses.map((course, i) => (
            <motion.div
              key={course.id} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
              whileHover={{ y: -4, border: "1px solid rgba(99, 102, 241, 0.2)" }}
              transition={{ type: "spring", stiffness: 350, damping: 24 }}
              className="bg-gradient-to-b from-zinc-900/40 via-zinc-950/20 to-transparent border border-zinc-900 rounded-2xl p-4 flex flex-col justify-between group shadow-2xl relative overflow-hidden transition-all duration-300"
            >
              <div>
                {/* Visual Image Thumbnail Box */}
                <div className="w-full aspect-[16/10] bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden mb-4 relative shadow-inner">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out" />
                  <span className="absolute top-3 left-3 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-[8px] font-black uppercase tracking-widest text-indigo-400 px-2.5 py-1 rounded-md">
                    {course.category}
                  </span>
                </div>

                {/* Star Ratings Section */}
                <div className="flex items-center gap-1 text-[10px] mb-2">
                  <div className="flex text-amber-400 gap-0.5"><TbStarFilled /></div>
                  <span className="font-black text-zinc-300 font-mono">{course.rating}</span>
                  <span className="text-zinc-600 font-bold uppercase tracking-wider text-[8px]">({course.provider})</span>
                </div>

                <h3 className="text-sm font-black text-white tracking-tight leading-snug group-hover:text-indigo-400 transition-colors duration-200">
                  {course.title}
                </h3>
              </div>

              {/* Lower Cost Indicators Block Wrapper Row */}
              <div className="mt-5 pt-3.5 border-t border-zinc-900/60 flex items-center justify-between">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-black text-white font-mono tracking-tighter">${course.price.toFixed(2)}</span>
                  <span className="text-[10px] text-zinc-600 line-through font-mono">${course.oldPrice.toFixed(2)}</span>
                </div>

                {/* Dynamic Link Router Bridge */}
                <Link 
                  href={`/items/${course.id}`} onClick={() => triggerQuickPreviewToast(course.title)}
                  className="bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider tracking-tight transition-all flex items-center gap-1 cursor-pointer select-none"
                >
                  <span>View Details</span> <TbArrowUpRight className="text-xs text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* EMPTY STATES RESOLUTION ENGINE BOX */}
        {filteredCourses.length === 0 && (
          <div className="col-span-full py-16 bg-zinc-950/40 border border-zinc-900/60 rounded-2xl text-center backdrop-blur-md">
            <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-3 text-zinc-600"><TbCpu className="text-lg" /></div>
            <h4 className="text-xs font-black text-white tracking-tight">Zero Target Profile Matching Coordinates</h4>
            <p className="text-[10px] text-zinc-500 mt-0.5">Flush filters configuration to pull baseline index rows bundles data metrics.</p>
          </div>
        )}
      </div>
    </main>
  );
}