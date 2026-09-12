"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const navLinks = [
  { key: "solutions", href: "#soluciones" },
  { key: "audience", href: "#audiencia" },
  { key: "testimonials", href: "#testimonios" },
] as const;

export default function Navbar() {
  const { t, locale, toggleLocale } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/90 backdrop-blur-md border-b border-border-subtle">
      <nav className="section-container flex items-center justify-between h-16 md:h-[72px]">
        {/* ── Logo ── */}
        <a href="#" className="flex items-center gap-0.5 shrink-0">
          <span className="font-heading text-xl md:text-2xl font-bold text-white tracking-tight">
            Fix
          </span>
          <span className="font-heading text-xl md:text-2xl font-bold text-gradient tracking-tight">
            Core
          </span>
          <span className="text-core-blue text-2xl md:text-3xl leading-none font-bold">
            .
          </span>
        </a>

        {/* ── Desktop Links ── */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="font-body text-sm text-text-secondary hover:text-core-blue transition-colors duration-200"
            >
              {t("nav", link.key)}
            </a>
          ))}
        </div>

        {/* ── Desktop Actions ── */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLocale}
            className="relative flex items-center w-[72px] h-8 rounded-full bg-white/5 border border-border-subtle p-0.5 cursor-pointer transition-colors hover:border-core-blue/40"
            aria-label="Toggle language"
          >
            <motion.div
              className="absolute w-[34px] h-7 rounded-full bg-core-blue/20"
              animate={{ x: locale === "es" ? 0 : 34 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            <span
              className={`relative z-10 flex-1 text-center text-xs font-heading font-bold transition-colors ${
                locale === "es" ? "text-core-blue" : "text-text-secondary"
              }`}
            >
              ES
            </span>
            <span
              className={`relative z-10 flex-1 text-center text-xs font-heading font-bold transition-colors ${
                locale === "en" ? "text-core-blue" : "text-text-secondary"
              }`}
            >
              EN
            </span>
          </button>

          <a href="#contacto" className="btn-primary text-sm !min-h-[40px] !py-2 !px-5">
            {t("nav", "cta")}
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-surface-dark/95 backdrop-blur-xl border-b border-border-subtle"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-base text-text-secondary hover:text-core-blue transition-colors"
                >
                  {t("nav", link.key)}
                </a>
              ))}

              <hr className="border-border-subtle" />

              {/* Mobile language toggle */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-text-muted font-body">
                  Idioma:
                </span>
                <button
                  onClick={toggleLocale}
                  className="text-sm font-heading font-bold text-core-blue"
                >
                  {locale === "es" ? "English" : "Español"}
                </button>
              </div>

              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="btn-primary text-sm text-center"
              >
                {t("nav", "cta")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
