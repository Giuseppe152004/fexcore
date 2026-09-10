"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SolutionLayout({ data }: { data: any }) {
  return (
    <>
      {/* ── Hero Section (Light & Clean) ── */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-surface-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-100 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-core-blue/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#soluciones"
              className="inline-flex items-center gap-2 text-core-blue hover:text-core-dark font-heading font-semibold mb-10 transition-colors w-fit group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Volver a Soluciones
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex flex-col gap-6"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 w-fit">
                <span className="text-sm font-heading font-bold text-slate-600 uppercase tracking-wider">
                  Módulo de Plataforma
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-text-dark leading-tight">
                {data.title}
              </h1>
              <p className="text-lg md:text-xl text-text-muted font-body leading-relaxed">
                {data.description}
              </p>

              {/* Tags */}
              {data.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {data.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-sm font-heading font-medium text-core-blue bg-core-blue/10 rounded-full px-4 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Abstract Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-[500px] aspect-square relative">
                {/* Central Floating Element */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-8 bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center justify-center p-8 z-20"
                >
                  <div className="w-24 h-24 rounded-2xl bg-core-blue/10 flex items-center justify-center mb-6">
                    <data.icon className="w-12 h-12 text-core-blue" />
                  </div>
                  <div className="w-3/4 h-4 bg-slate-100 rounded-full mb-3" />
                  <div className="w-1/2 h-4 bg-slate-100 rounded-full" />
                </motion.div>

                {/* Satellite Cards */}
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-12 -left-6 w-32 h-32 bg-white rounded-2xl shadow-lg border border-slate-100 p-4 z-30 hidden md:flex flex-col gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-op-green/20" />
                  <div className="w-full h-3 bg-slate-100 rounded-full mt-auto" />
                  <div className="w-2/3 h-3 bg-slate-100 rounded-full" />
                </motion.div>

                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-16 -right-8 w-40 h-24 bg-white rounded-2xl shadow-lg border border-slate-100 p-4 z-10 hidden md:flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 shrink-0" />
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="w-full h-2 bg-slate-100 rounded-full" />
                    <div className="w-full h-2 bg-slate-100 rounded-full" />
                    <div className="w-1/2 h-2 bg-slate-100 rounded-full" />
                  </div>
                </motion.div>
                
                {/* Decorative Circles */}
                <div className="absolute top-0 right-12 w-20 h-20 rounded-full bg-core-blue/5 border border-core-blue/10" />
                <div className="absolute bottom-0 left-12 w-32 h-32 rounded-full bg-purple-500/5 border border-purple-500/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features Section (Light) ── */}
      <section className="section-padding bg-surface-light border-t border-slate-200">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-16 text-center"
          >
            Características del Módulo
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
                className="bg-white rounded-2xl p-8 border border-border-light shadow-sm hover:shadow-xl hover:border-core-blue/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-core-blue/10 flex items-center justify-center mb-6 group-hover:bg-core-blue/20 transition-colors">
                  <feat.icon className="w-6 h-6 text-core-blue" />
                </div>
                <h3 className="font-heading text-xl font-bold text-text-dark mb-4">
                  {feat.title}
                </h3>
                <p className="font-body text-text-muted leading-relaxed">
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
