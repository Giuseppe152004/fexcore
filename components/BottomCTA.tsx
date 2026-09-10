"use client";

import { motion } from "framer-motion";

export default function BottomCTA() {
  return (
    <section className="relative bg-slate-900 py-24 md:py-32 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-core-blue/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
            ¿Listo para reducir el downtime en tu planta y modernizar tu mantenimiento?
          </h2>
          
          <a
            href="#contacto"
            className="inline-flex items-center justify-center bg-core-blue hover:bg-core-dark text-slate-900 hover:text-white font-heading font-bold text-lg md:text-xl rounded-xl px-10 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] min-h-[48px] w-full sm:w-auto"
          >
            Solicitar Demostración Técnica
          </a>
        </motion.div>
      </div>
    </section>
  );
}
