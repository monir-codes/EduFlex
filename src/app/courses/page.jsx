"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbStarFilled, TbCpu, TbSearch, TbArrowUpRight, TbBookOpen, TbVideo, TbDeviceLaptop } from "react-icons/tb";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

// 📚 Assignment Route safe dedicated Educational Dataset matrix array
const COURSES_DATABASE_NODE = [
  { 
    id: 101, 
    title: "MERN Stack Production Bootcamp", 
    instructor: "Rumman Dev Node", 
    price: 89.00, 
    oldPrice: 149.00, 
    rating: 4.9, 
    lessons: "42 Modules",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60",
    tech: "Next.js & Express"
  },
  { 
    id: 102, 
    title: "Advanced Tailwind UI Systems Mastery", 
    instructor: "Design Core Labs", 
    price: 29.00, 
    oldPrice: 49.00, 
    rating: 4.8, 
    lessons: "18 Modules",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60",
    tech: "Tailwind & Framer"
  },
  { 
    id: 103, 
    title: "Firebase Enterprise Security Architecture", 
    instructor: "SecOps Network", 
    price: 55.00, 
    oldPrice: 99.00, 
    rating: 4.7, 
    lessons: "26 Modules",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
    tech: "Auth & Gateways"
  },
  { 
    id: 104, 
    title: "Next.js Edge Framework Architecture", 
    instructor: "VercelVibes Academy", 
    price: 79.00, 
    oldPrice: 129.00, 
    rating: 5.0, 
    lessons: "34 Modules",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
    tech: "Next.js & Edge"
  },
  { 
    id: 105, 
    title: "React Native High-Performance Bundles", 
    instructor: "Native Core Engine", 
    price: 69.00, 
    oldPrice: 119.00, 
    rating: 4.8, 
    lessons: "28 Modules",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
    tech: "Mobile & Hybrid"
  },
  { 
    id: 106, 
    title: "Framer Motion Fluid Interface Curves", 
    instructor: "Animation Nexus", 
    price: 39.00, 
    oldPrice: 65.00, 
    rating: 4.9, 
    lessons: "22 Modules",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
    tech: "Tailwind & Framer"
  }
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredCourses = COURSES_DATABASE_NODE.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const triggerToastFeedback = (id) => {
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      background: "#18181b",
      color: "#ffffff",
      icon: "info",
      title: `Accessing Module: ${COURSES_DATABASE_NODE.find((c) => c.id === id)?.title}`,
      customClass: { popup: "border border-indigo-500/20 rounded-xl" }
    });

    router.push('/courses/' + id);

  };

  return (
    // 🛠️ TIGHT COMPACT SPACING SYSTEM OVERRIDES
    <main className="min-h-screen bg-[#09090b] pt-24 pb-12 px-6 max-w-7xl mx-auto relative overflow-hidden selection:bg-indigo-500/30">
      {/* Background Radial Glow Subtle Ambience */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/5 blur-[130px] rounded-full pointer-events-none" />

      {/* REGISTRY FILTER SELECTION INTERACTION CONTROLLER HEAD */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-900 pb-6 mb-8 relative z-10">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full shadow-inner">
            Ecosystem Curriculums
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight mt-3">Verified Dev Courses</h1>
        </div>

        {/* Live Search Engine Query Form Entry */}
        <div className="relative w-full md:w-72">
          <TbSearch className="absolute left-3.5 top-3.5 text-zinc-500 text-base" />
          <input 
            type="text" 
            placeholder="Filter engineering bootcamps..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-900 rounded-xl pl-11 pr-4 py-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/40 hover:border-zinc-800 transition-all font-medium shadow-inner"
          />
        </div>
      </div>

      {/* 🚀 RESPONSIVE ALIGNED LEARNING TRACKS GRID COMPONENT CANVAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        <AnimatePresence mode="popLayout">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }}
              whileHover={{ y: -4, border: "1px solid rgba(168, 85, 247, 0.2)" }}
              transition={{ type: "spring", stiffness: 350, damping: 24 }}
              className="bg-gradient-to-b from-zinc-900/30 via-zinc-950/10 to-transparent border border-zinc-900 rounded-2xl p-4 flex flex-col justify-between group shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Asymmetric Core Asset Thumbnail Wrapper Frame */}
                <div className="w-full aspect-[16/10] bg-zinc-950 border border-zinc-900/80 rounded-xl overflow-hidden mb-4 relative shadow-inner">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500 ease-out" />
                  <span className="absolute bottom-3 left-3 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-[8px] font-black uppercase tracking-widest text-purple-400 px-2.5 py-1 rounded-md shadow-lg">
                    {course.tech}
                  </span>
                </div>

                {/* Micro Meta Information Specs Bar */}
                <div className="flex items-center gap-2.5 text-[9px] font-black text-zinc-500 uppercase tracking-wider mb-2.5">
                  <div className="flex items-center gap-1"><TbVideo className="text-xs text-indigo-400" /> <span>{course.lessons}</span></div>
                  <span className="text-zinc-800">•</span>
                  <div className="flex items-center gap-1"><TbStarFilled className="text-amber-400" /> <span className="text-zinc-300 font-mono">{course.rating}</span></div>
                </div>

                <h3 className="text-sm font-black text-white tracking-tight leading-snug group-hover:text-indigo-400 transition-colors duration-200">
                  {course.title}
                </h3>
                <p className="text-[11px] text-zinc-600 font-bold tracking-tight mt-1">Lead: {course.instructor}</p>
              </div>

              {/* Lower Level Dynamic Costs Row Controllers Anchor */}
              <div className="mt-5 pt-3.5 border-t border-zinc-900/60 flex items-center justify-between">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-black text-white font-mono tracking-tighter">${course.price.toFixed(2)}</span>
                  <span className="text-[10px] text-zinc-600 line-through font-mono">${course.oldPrice.toFixed(2)}</span>
                </div>

                {/* Action Route Dispatch Handler link points */}
                <button 
                  type="button" 
                  onClick={() => triggerToastFeedback(course.id)}
                  className="bg-zinc-950 border border-zinc-800 hover:border-indigo-500/40 text-zinc-300 hover:text-white px-3.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer select-none"
                >
                  <span>View Details</span> <TbArrowUpRight className="text-xs text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* EMPTY STATES SYSTEM EXCEPTION FALLBACK ROUTINE */}
        {filteredCourses.length === 0 && (
          <div className="col-span-full py-12 bg-zinc-950/20 border border-zinc-900 rounded-2xl text-center backdrop-blur-sm">
            <div className="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-2 text-zinc-600"><TbDeviceLaptop className="text-base" /></div>
            <h4 className="text-xs font-black text-white tracking-tight">Zero Catalog Node Matches Coordinate Matrix</h4>
            <p className="text-[10px] text-zinc-500 mt-0.5">Reset verification values string parameter inputs to pull index records rows.</p>
          </div>
        )}
      </div>
    </main>
  );
}