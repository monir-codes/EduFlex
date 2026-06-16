"use client";
import { TbLayersLinked } from "react-icons/tb"; // Professional enterprise structural network connectivity icon
import Link from "next/link";

export default function Logo({ showIcon = true }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 group select-none">
      {/* Conditional Dynamic Icon Architecture Rendering */}
      {showIcon && (
        <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20 group-hover:scale-105 group-hover:shadow-indigo-500/30 transition-all duration-300">
          <TbLayersLinked className="text-white text-lg group-hover:rotate-12 transition-transform duration-300" />
        </div>
      )}
      
      {/* Clean Global Typographic Signature Brand Identity */}
      <span className="text-xl font-black tracking-tight text-white">
        Edu<span className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-200">Flex</span>
      </span>
    </Link>
  );
}