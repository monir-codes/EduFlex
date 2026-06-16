"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  { name: "Alex Martin", role: "Backend Engineer", text: "EduFlex completely changed the way I learn. The micro-course architectures are top-tier and highly production-optimized.", rating: 5 },
  { name: "Sarah Johnson", role: "Frontend Developer", text: "Best marketplace for high-fidelity micro courses! Spacing, components consistency, and UI polish are just outstanding.", rating: 5 },
  { name: "Priya Sharma", role: "UI/UX Designer", text: "Amazing asset quality and seamless dashboard interactions. The asset layout mapping saves hours of development overhead.", rating: 5 }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-zinc-900">
      <div className="text-center mb-16">
        <span className="text-indigo-400 font-bold uppercase text-[10px] tracking-widest">Social Proof</span>
        <h2 className="text-3xl font-bold text-white mt-2">What Our Learners Say</h2>
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative pb-12">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          className="w-full"
        >
          {reviews.map((rev, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-zinc-900/20 border border-zinc-900 p-8 rounded-[2rem] backdrop-blur-md relative flex flex-col justify-between h-64 hover:border-zinc-800 transition-all">
                <Quote className="w-8 h-8 text-indigo-500/10 absolute top-6 right-6" />
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed italic">"{rev.text}"</p>
                </div>
                <div className="mt-6 border-t border-zinc-900/80 pt-4">
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <p className="text-[11px] text-zinc-500 mt-0.5">{rev.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination flex justify-center gap-2 mt-8" />
      </motion.div>
    </section>
  );
}