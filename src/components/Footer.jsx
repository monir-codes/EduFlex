"use client";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";
import { TbGlobe, TbTerminal2 } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 pt-20 pb-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
        
        {/* Brand Identity / Logo matching your design */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-600/30">
              <TbTerminal2 className="text-white text-xl" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Edu<span className="text-indigo-400">Flex</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-zinc-500 max-w-sm leading-relaxed">
            The modern marketplace for elite tech products, source files, micro-courses, and dynamic assets optimized for engineers.
          </p>
          
          {/* Social Platforms Buttons using React Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600/10 transition-all duration-200">
              <FaGithub className="text-lg" />
            </a>
            <a href="#" className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600/10 transition-all duration-200">
              <FaTwitter className="text-lg" />
            </a>
            <a href="#" className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600/10 transition-all duration-200">
              <FaLinkedinIn className="text-lg" />
            </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Explore</h4>
          <div className="flex flex-col gap-3.5 text-sm text-zinc-500">
            <Link href="/items" className="hover:text-zinc-200 transition-colors">Courses Matrix</Link>
            <Link href="/items" className="hover:text-zinc-200 transition-colors">Digital Items</Link>
            <Link href="/items" className="hover:text-zinc-200 transition-colors">Categories</Link>
            <Link href="/" className="hover:text-zinc-200 transition-colors">Pricing Models</Link>
          </div>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Resources</h4>
          <div className="flex flex-col gap-3.5 text-sm text-zinc-500">
            <Link href="/about" className="hover:text-zinc-200 transition-colors">Documentation</Link>
            <Link href="/about" className="hover:text-zinc-200 transition-colors">Support Guides</Link>
            <Link href="/about" className="hover:text-zinc-200 transition-colors">API System</Link>
          </div>
        </div>

        {/* Links Column 3 */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Legal</h4>
          <div className="flex flex-col gap-3.5 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-200 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-200 transition-colors">Refund Routine</a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Status Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
        <p>&copy; {new Date().getFullYear()} EduFlex Platform. All rights reserved.</p>
        <div className="flex items-center gap-1.5 text-zinc-500">
          <TbGlobe className="text-indigo-400 text-base" /> 
          <span>Global Production Infrastructure Mesh</span>
        </div>
      </div>
    </footer>
  );
}