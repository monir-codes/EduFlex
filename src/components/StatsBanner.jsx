"use client";
import { motion } from "framer-motion";
import { Users, BookOpen, ShoppingBag, Award } from "lucide-react";

const stats = [
  { icon: <Users className="w-5 h-5 text-indigo-400" />, value: "50K+", label: "Active Learners" },
  { icon: <BookOpen className="w-5 h-5 text-purple-400" />, value: "2,500+", label: "Courses & Items" },
  { icon: <ShoppingBag className="w-5 h-5 text-pink-400" />, value: "120K+", label: "Sales Completed" },
  { icon: <Award className="w-5 h-5 text-amber-400" />, value: "4.9/5", label: "Average Rating" },
];

export default function StatsBanner() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-900 bg-gradient-to-b from-zinc-950 to-background">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-zinc-900/10 border border-zinc-900 rounded-[2.5rem] p-10 backdrop-blur-sm">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="mb-3 p-3 bg-zinc-950 border border-zinc-800 rounded-2xl group-hover:border-indigo-500/20 transition-all">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">{stat.value}</h3>
            <p className="text-xs text-zinc-500 font-medium mt-1 uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}