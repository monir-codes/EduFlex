"use client";
import { motion } from "framer-motion";
import { Shield, Zap, Layout, Users } from "lucide-react";

const features = [
  { icon: <Layout className="text-indigo-400" />, title: "Micro Courses", desc: "Access high-fidelity micro courses for specific tech niches." },
  { icon: <Zap className="text-violet-400" />, title: "Tech Items", desc: "Quality digital assets for developers and creators worldwide." },
  { icon: <Shield className="text-blue-400" />, title: "Secure & Safe", desc: "Firebase enterprise auth ensuring your data is always protected." },
  { icon: <Users className="text-emerald-400" />, title: "Creator Tools", desc: "Powerful tools to manage your products and track earnings." },
];

export default function Features() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-900 hover:border-indigo-500/30 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-zinc-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}