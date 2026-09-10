"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Settings,
  Package,
  Webhook,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const solutions = [
  {
    icon: ClipboardCheck,
    titleKey: "card1_title",
    descKey: "card1_desc",
    features: ["Correctivo", "Preventivo", "Predictivo"],
    featuresEn: ["Corrective", "Preventive", "Predictive"],
  },
  {
    icon: Settings,
    titleKey: "card2_title",
    descKey: "card2_desc",
    features: ["Historial", "Costos", "Vida útil"],
    featuresEn: ["History", "Costs", "Lifespan"],
  },
  {
    icon: Package,
    titleKey: "card3_title",
    descKey: "card3_desc",
    features: ["Stock mínimo", "Compras", "Trazabilidad"],
    featuresEn: ["Min stock", "Purchasing", "Traceability"],
  },
  {
    icon: Webhook,
    titleKey: "card4_title",
    descKey: "card4_desc",
    features: ["WhatsApp", "Email", "Slack"],
    featuresEn: ["WhatsApp", "Email", "Slack"],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function SolutionsSection() {
  const { t, locale } = useTranslation();

  return (
    <section id="soluciones" className="bg-white section-padding">
      <div className="section-container">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-dark mb-4">
            {t("solutions", "headline")}
          </h2>
          <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed">
            {t("solutions", "subtitle")}
          </p>
        </motion.div>

        {/* ── Grid 2x2 ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 gap-6 md:gap-8"
        >
          {solutions.map((sol) => (
            <motion.div
              key={sol.titleKey}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative bg-surface-dark rounded-2xl p-8 border-t-[3px] border-t-core-blue border border-border-subtle overflow-hidden cursor-default"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-core-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-core-blue/10 flex items-center justify-center mb-5 group-hover:bg-core-blue/20 transition-colors duration-300">
                  <sol.icon className="w-6 h-6 text-core-blue" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {t("solutions", sol.titleKey)}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-text-secondary leading-relaxed mb-5">
                  {t("solutions", sol.descKey)}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {(locale === "es" ? sol.features : sol.featuresEn).map(
                    (feat) => (
                      <span
                        key={feat}
                        className="text-xs font-heading font-medium text-core-blue bg-core-blue/10 border border-core-blue/20 rounded-full px-3 py-1"
                      >
                        {feat}
                      </span>
                    ),
                  )}
                </div>

                {/* Learn more link */}
                <div className="flex items-center gap-1.5 text-text-secondary group-hover:text-core-blue transition-colors duration-300">
                  <span className="text-sm font-heading font-bold">
                    {locale === "es" ? "Más información" : "Learn more"}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
