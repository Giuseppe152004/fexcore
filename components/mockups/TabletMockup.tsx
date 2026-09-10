"use client";

import { motion } from "framer-motion";

export default function TabletMockup() {
  return (
    <div className="w-full aspect-[4/3] bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl relative border-4 border-slate-700">
      {/* Inner Screen */}
      <div className="w-full h-full bg-slate-950 rounded-[1.5rem] overflow-hidden flex flex-col relative">
        {/* Top Status Bar */}
        <div className="h-6 w-full flex items-center justify-between px-6 text-[10px] text-slate-500 font-medium shrink-0">
          <span>9:41 AM</span>
          <div className="flex gap-1.5 items-center">
            <div className="w-3 h-2 bg-slate-500 rounded-sm" />
            <div className="w-3 h-2 bg-slate-500 rounded-sm" />
            <div className="w-4 h-2 bg-slate-500 rounded-sm" />
          </div>
        </div>

        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="w-32 h-5 bg-white/90 rounded-md" />
          <div className="w-8 h-8 rounded-full bg-purple-500/20" />
        </div>

        {/* Filters/Tabs */}
        <div className="px-6 py-3 flex gap-4 shrink-0">
          <div className="w-16 h-6 bg-purple-500 rounded-full" />
          <div className="w-16 h-6 bg-slate-800 rounded-full" />
          <div className="w-16 h-6 bg-slate-800 rounded-full" />
        </div>

        {/* Content (Kanban / List) */}
        <div className="flex-1 p-6 grid grid-cols-2 gap-6 overflow-hidden">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <div className="w-24 h-4 bg-slate-700 rounded-full mb-2" />
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`col1-${i}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50"
              >
                <div className="flex justify-between mb-3">
                  <div className="w-12 h-3 bg-purple-500/80 rounded-full" />
                  <div className="w-6 h-6 rounded-full bg-slate-600" />
                </div>
                <div className="w-3/4 h-3 bg-slate-400 rounded-full mb-2" />
                <div className="w-1/2 h-3 bg-slate-600 rounded-full" />
              </motion.div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <div className="w-24 h-4 bg-slate-700 rounded-full mb-2" />
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={`col2-${i}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50"
              >
                <div className="flex justify-between mb-3">
                  <div className="w-12 h-3 bg-core-blue/80 rounded-full" />
                  <div className="w-6 h-6 rounded-full bg-slate-600" />
                </div>
                <div className="w-5/6 h-3 bg-slate-400 rounded-full mb-2" />
                <div className="w-2/3 h-3 bg-slate-600 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAB */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          className="absolute bottom-6 right-6 w-14 h-14 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center"
        >
          <div className="w-6 h-6 relative">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white rounded-full" />
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-white rounded-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
