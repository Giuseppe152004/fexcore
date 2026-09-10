"use client";

import { motion } from "framer-motion";

export default function DesktopMockup() {
  return (
    <div className="w-full aspect-video bg-slate-900 rounded-3xl overflow-hidden flex border border-slate-700 shadow-2xl relative">
      {/* Sidebar */}
      <div className="w-16 md:w-20 lg:w-24 bg-slate-950 border-r border-slate-800 flex flex-col items-center py-4 gap-4 shrink-0">
        <div className="w-8 h-8 rounded-full bg-core-blue/20 mb-4" />
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-lg ${
              i === 0 ? "bg-core-blue/40" : "bg-slate-800"
            }`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="h-12 border-b border-slate-800 flex items-center px-6 justify-between shrink-0">
          <div className="w-32 h-4 bg-slate-800 rounded-full" />
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-800" />
            <div className="w-6 h-6 rounded-full bg-slate-800" />
          </div>
        </div>

        {/* Dashboard Area */}
        <div className="flex-1 p-4 md:p-6 lg:p-8 flex flex-col gap-4 overflow-hidden">
          {/* Top Cards */}
          <div className="grid grid-cols-3 gap-4 shrink-0">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-700" />
                  <div className="w-12 h-4 bg-op-green/20 rounded-full" />
                </div>
                <div className="w-20 h-3 bg-slate-600 rounded-full mb-2" />
                <div className="w-16 h-5 bg-white/80 rounded-full" />
              </motion.div>
            ))}
          </div>

          {/* Charts Area */}
          <div className="flex-1 flex gap-4 min-h-0">
            {/* Main Bar Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex-[2] bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 flex flex-col h-full"
            >
              <div className="w-32 h-4 bg-slate-700 rounded-full mb-6 shrink-0" />
              <div className="flex-1 flex items-end justify-between gap-2 md:gap-4 lg:gap-6 px-2">
                {[40, 70, 45, 90, 60, 85, 30].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{
                      delay: 0.6 + i * 0.1,
                      type: "spring",
                      stiffness: 50,
                    }}
                    className="w-full bg-core-blue/80 rounded-t-sm"
                  />
                ))}
              </div>
            </motion.div>

            {/* Donut Chart / Side Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="flex-1 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 flex flex-col items-center justify-center gap-4 hidden md:flex"
            >
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-[8px] border-slate-700 border-t-core-blue border-r-purple-500" />
              <div className="flex flex-col gap-2 w-full px-4">
                <div className="w-full h-2 bg-slate-700 rounded-full" />
                <div className="w-3/4 h-2 bg-slate-700 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
