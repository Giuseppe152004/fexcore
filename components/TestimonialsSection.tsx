"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const testimonials = [
  {
    quoteKey: "quote1",
    authorKey: "author1",
    roleKey: "role1",
    initials: "CM",
    color: "bg-core-blue",
    stars: 5,
  },
  {
    quoteKey: "quote2",
    authorKey: "author2",
    roleKey: "role2",
    initials: "MS",
    color: "bg-purple-500",
    stars: 5,
  },
  {
    quoteKey: "quote3",
    authorKey: "author3",
    roleKey: "role3",
    initials: "AV",
    color: "bg-op-green",
    stars: 5,
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section
      id="testimonios"
      className="relative bg-surface-dark section-padding overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-core-blue/[0.04] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/[0.04] rounded-full blur-[100px]" />

      <div className="section-container relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            {t("testimonials", "headline")}
          </h2>
          <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed">
            {t("testimonials", "subtitle")}
          </p>
        </motion.div>

        {/* ── Testimonial Cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.quoteKey}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative bg-white/[0.04] backdrop-blur-sm border border-border-subtle rounded-2xl p-8 hover:border-core-blue/30 hover:bg-white/[0.06] transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-core-blue/30 mb-5" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="font-body text-sm sm:text-base text-text-secondary leading-relaxed mb-6 italic">
                &ldquo;{t("testimonials", item.quoteKey)}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center shrink-0`}
                >
                  <span className="text-xs font-heading font-bold text-white">
                    {item.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-heading font-bold text-white">
                    {t("testimonials", item.authorKey)}
                  </p>
                  <p className="text-xs font-body text-text-muted">
                    {t("testimonials", item.roleKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
