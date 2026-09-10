"use client";

import { motion } from "framer-motion";
import { BarChart3, ClipboardList, Wrench } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const cards = [
  {
    icon: BarChart3,
    titleKey: "card1_title",
    descKey: "card1_desc",
    accent: "from-core-blue to-blue-600",
    iconBg: "bg-core-blue/10",
    iconColor: "text-core-blue",
  },
  {
    icon: ClipboardList,
    titleKey: "card2_title",
    descKey: "card2_desc",
    accent: "from-purple-500 to-indigo-600",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: Wrench,
    titleKey: "card3_title",
    descKey: "card3_desc",
    accent: "from-op-green to-emerald-600",
    iconBg: "bg-op-green/10",
    iconColor: "text-op-green",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AudienceSection() {
  const { t } = useTranslation();

  return (
    <section id="audiencia" className="bg-surface-light section-padding">
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
            {t("audience", "headline")}
          </h2>
          <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed">
            {t("audience", "subtitle")}
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.titleKey}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-8 border border-border-light shadow-sm hover:shadow-xl hover:border-core-blue/30 transition-all duration-300 cursor-default"
            >
              {/* Top gradient accent */}
              <div
                className={`absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${card.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon className={`w-7 h-7 ${card.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-text-dark mb-3 group-hover:text-core-dark transition-colors">
                {t("audience", card.titleKey)}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-text-muted leading-relaxed">
                {t("audience", card.descKey)}
              </p>

              {/* Hover arrow */}
              <div className="mt-6 flex items-center gap-1 text-core-blue opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                <span className="text-sm font-heading font-bold">
                  {t("hero", "cta_secondary")}
                </span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
