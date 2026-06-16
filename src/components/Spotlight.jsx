"use client";
import { motion } from "framer-motion";
import { Clock, DollarSign, BookOpen } from "lucide-react";
import Link from "next/link";

const spotlightItems = [
  { id: 1, title: "Full Stack Next.js Mastery", price: "49.00", category: "Development", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60" },
  { id: 2, title: "React Admin Dashboard UI Kit", price: "29.00", category: "UI/UX", img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60" },
  { id: 3, title: "Python for Data Science 2024", price: "39.00", category: "Data", img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60" },
];

export default function Spotlight() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-indigo-400 font-bold uppercase text-[10px] tracking-widest">Editor's Choice</span>
          <h2 className="text-3xl font-bold text-white mt-2">Featured Spotlight</h2>
        </div>
        <Link href="/items" className="text-sm text-zinc-500 hover:text-white transition-colors">See all items &rarr;</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {spotlightItems.map((item) => (
          <motion.div key={item.id} whileHover={{ y: -8 }} className="bg-zinc-900/30 border border-zinc-900 rounded-[2.5rem] overflow-hidden group">
            <div className="h-56 bg-zinc-800 relative overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md text-[10px] text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/20">{item.category}</div>
            </div>
            <div className="p-7">
              <h3 className="text-lg font-bold text-white mb-4 line-clamp-1">{item.title}</h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-xl font-bold text-white"><DollarSign className="w-4 h-4 text-zinc-500" />{item.price}</div>
                <Link href={`/items/${item.id}`} className="bg-zinc-950 border border-zinc-800 text-white px-5 py-2.5 rounded-2xl text-[12px] font-bold hover:bg-indigo-600 hover:border-indigo-500 transition-all flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> View Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}