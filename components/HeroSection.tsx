"use client";

import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import {
  Bell,
  CheckCircle2,
  Clock,
  Cpu,
  Layers,
  Settings,
  Wrench,
  Activity,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Data extracted to module level so TS sees icon references properly
// ---------------------------------------------------------------------------
type StatItem = { icon: LucideIcon; label: string; value: string; color: string };
const stats: StatItem[] = [
  { icon: CheckCircle2, label: "OTs", value: "127", color: "text-op-green" },
  { icon: Clock, label: "Pending", value: "14", color: "text-yellow-400" },
  { icon: AlertTriangle, label: "Critical", value: "3", color: "text-dt-red" },
];

type ActivityItem = { icon: LucideIcon; text: string; time: string; color: string };
const recentActivity: ActivityItem[] = [
  { icon: Wrench, text: "OT-1042 completada", time: "2m", color: "text-op-green" },
  { icon: Bell, text: "Alerta Motor #7", time: "5m", color: "text-dt-red" },
  { icon: TrendingUp, text: "KPI actualizado", time: "12m", color: "text-core-blue" },
];

// ---------------------------------------------------------------------------
// Animated Dashboard Mockup (right side of Hero)
// ---------------------------------------------------------------------------
function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className="relative w-full max-w-lg mx-auto lg:mx-0"
    >
      {/* Main dashboard card */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative bg-surface-dark/60 border border-border-subtle rounded-2xl p-5 backdrop-blur-sm"
      >
        {/* Dashboard header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-dt-red" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-op-green" />
          </div>
          <span className="text-xs text-text-muted font-body">
            FexCore Dashboard
          </span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 rounded-lg p-3 border border-border-subtle"
            >
              <stat.icon className={`w-4 h-4 ${stat.color} mb-1`} />
              <p className={`text-lg font-heading font-bold ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-[10px] text-text-muted font-body">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Simulated chart bars */}
        <div className="bg-white/5 rounded-lg p-3 border border-border-subtle">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-text-muted font-body flex items-center gap-1">
              <Activity className="w-3 h-3" /> Uptime
            </span>
            <span className="text-xs text-op-green font-heading font-bold">
              98.7%
            </span>
          </div>
          <div className="flex items-end gap-1 h-12">
            {[65, 80, 55, 90, 75, 95, 85, 92, 70, 88, 96, 78].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.05 }}
                className="flex-1 rounded-sm bg-gradient-to-t from-core-blue/40 to-core-blue"
              />
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="mt-3 space-y-2">
          {recentActivity.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 bg-white/[0.03] rounded-lg px-3 py-2 border border-white/5"
            >
              <item.icon className={`w-3.5 h-3.5 ${item.color} shrink-0`} />
              <span className="text-xs text-text-secondary font-body flex-1 truncate">
                {item.text}
              </span>
              <span className="text-[10px] text-text-muted font-body">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating accent cards */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -top-4 -right-4 bg-core-blue/10 border border-core-blue/30 rounded-xl px-4 py-2.5 backdrop-blur-sm"
      >
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-core-blue" />
          <span className="text-xs font-heading font-bold text-core-blue">
            AI Predictions
          </span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-3 -left-4 bg-op-green/10 border border-op-green/30 rounded-xl px-4 py-2.5 backdrop-blur-sm"
      >
        <div className="flex items-center gap-2">
          <Settings className="w-4 h-4 text-op-green animate-spin" style={{ animationDuration: "8s" }} />
          <span className="text-xs font-heading font-bold text-op-green">
            42 Assets Online
          </span>
        </div>
      </motion.div>

      {/* Background glow */}
      <div className="absolute -inset-12 bg-core-blue/5 rounded-full blur-3xl -z-10" />
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------
export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-surface-dark overflow-hidden flex items-center pt-20"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-core-blue/[0.07] rounded-full blur-[120px]" />

      <div className="section-container section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-core-blue/10 border border-core-blue/20 rounded-full px-4 py-1.5 mb-6"
            >
              <Layers className="w-3.5 h-3.5 text-core-blue" />
              <span className="text-xs font-heading font-bold text-core-blue tracking-wide uppercase">
                CMMS Platform
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-black text-white leading-[1.05] mb-6">
              {t("hero", "title")
                .split(" ")
                .map((word, i, arr) =>
                  i >= arr.length - 2 ? (
                    <span key={i} className="text-gradient">
                      {word}{" "}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
            </h1>

            <p className="font-body text-lg sm:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {t("hero", "subtitle")}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#contacto" className="btn-primary text-base px-8 w-full sm:w-auto">
                {t("hero", "cta_primary")}
              </a>
              <a href="#soluciones" className="btn-ghost text-base px-8 w-full sm:w-auto">
                {t("hero", "cta_secondary")}
              </a>
            </div>

            {/* Social proof mini */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[
                  "bg-core-blue",
                  "bg-purple-500",
                  "bg-op-green",
                  "bg-amber-500",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${bg} border-2 border-surface-dark flex items-center justify-center`}
                  >
                    <span className="text-[10px] font-heading font-bold text-white">
                      {["CM", "JR", "AL", "MV"][i]}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-heading font-bold text-white">
                  +200 plantas
                </p>
                <p className="text-xs text-text-muted font-body">
                  confían en FexCore
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Dashboard Mockup ── */}
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
