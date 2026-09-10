"use client";

import { motion } from "framer-motion";

export default function MobileMockup() {
  return (
    <div className="w-full max-w-[280px] aspect-[9/16] bg-slate-900 rounded-[3rem] p-3 shadow-2xl relative border-4 border-slate-700 mx-auto">
      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-slate-900 rounded-b-xl z-20" />

      {/* Inner Screen */}
      <div className="w-full h-full bg-slate-950 rounded-[2.25rem] overflow-hidden flex flex-col relative pt-5">
        {/* Top Status Bar */}
        <div className="h-4 w-full flex items-center justify-between px-6 text-[10px] text-slate-500 font-medium shrink-0 absolute top-0 inset-x-0">
          <span>9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-2 bg-slate-500 rounded-sm" />
            <div className="w-4 h-2 bg-slate-500 rounded-sm" />
          </div>
        </div>

        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="w-8 h-8 rounded-full bg-slate-800" />
          <div className="w-24 h-4 bg-white/90 rounded-md" />
          <div className="w-8 h-8 rounded-full bg-slate-800" />
        </div>

        {/* Content (List) */}
        <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden relative">
          <div className="w-32 h-5 bg-slate-700 rounded-full mb-2" />

          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/50 flex gap-4 items-center"
            >
              <div className="w-12 h-12 rounded-xl bg-op-green/20 shrink-0 flex items-center justify-center">
                <div className="w-5 h-5 bg-op-green/60 rounded-sm" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="w-3/4 h-3 bg-white/80 rounded-full" />
                <div className="w-1/2 h-2.5 bg-slate-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Nav Bar */}
        <div className="h-16 bg-slate-900 border-t border-slate-800 flex items-center justify-around px-4 shrink-0 pb-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-md ${
                i === 0 ? "bg-op-green" : "bg-slate-600"
              }`}
            />
          ))}
        </div>

        {/* FAB */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          className="absolute bottom-20 right-5 w-14 h-14 bg-op-green rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center rotate-45"
        >
          <div className="w-6 h-6 relative -rotate-45">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-slate-900 rounded-full" />
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-slate-900 rounded-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
