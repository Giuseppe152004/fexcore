"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DesktopMockup from "./mockups/DesktopMockup";
import TabletMockup from "./mockups/TabletMockup";
import MobileMockup from "./mockups/MobileMockup";

export default function RoleLayout({ data }: { data: any }) {
  const isDesktop = data.deviceType === "Desktop Monitor";
  const isTablet = data.deviceType === "Tablet";
  const isMobile = data.deviceType === "Mobile Phone";

  return (
    <>
      {/* ── Hero Section (Dark & Techy) ── */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-core-blue/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#audiencia"
              className="inline-flex items-center gap-2 text-core-blue hover:text-white font-heading font-semibold mb-10 transition-colors w-fit group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Volver a Audiencias
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex flex-col gap-6"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-core-blue/10 border border-core-blue/20 w-fit">
                <span className="text-sm font-heading font-bold text-core-blue uppercase tracking-wider">
                  {data.subtitle}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-white leading-tight">
                {data.title}
              </h1>
              <p className="text-lg md:text-xl text-text-secondary font-body leading-relaxed">
                {data.description}
              </p>
            </motion.div>

            {/* Mockups */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-[600px]">
                {isDesktop && <DesktopMockup />}
                {isTablet && <TabletMockup />}
                {isMobile && <MobileMockup />}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className="section-padding bg-slate-900 border-t border-slate-800">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-16 text-center"
          >
            Herramientas para {data.subtitle}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {data.features.map((feat: any, index: number) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-core-blue/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-core-blue/10 flex items-center justify-center mb-6 group-hover:bg-core-blue/20 transition-colors">
                  <feat.icon className="w-6 h-6 text-core-blue" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-4">
                  {feat.title}
                </h3>
                <p className="font-body text-slate-300 leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
