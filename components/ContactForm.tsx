"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Send,
  Loader2,
  ShieldCheck,
  Headphones,
  Presentation,
  BarChart3,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const benefitIcons = [BarChart3, Presentation, ShieldCheck, Headphones];

export default function ContactForm() {
  const { t, locale } = useTranslation();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate submission
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <section id="contacto" className="bg-white section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ── Left: Persuasive Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-dark mb-4 leading-tight">
              {t("contact", "headline")}
            </h2>
            <p className="font-body text-lg text-text-muted mb-8">
              {t("contact", "subtitle")}
            </p>

            {/* Benefits list */}
            <div className="space-y-4">
              {["benefit1", "benefit2", "benefit3", "benefit4"].map(
                (key, i) => {
                  const Icon = benefitIcons[i];
                  return (
                    <div key={key} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-core-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-core-blue" />
                      </div>
                      <span className="font-body text-base text-text-dark">
                        {t("contact", key)}
                      </span>
                    </div>
                  );
                },
              )}
            </div>

            {/* Trust badge */}
            <div className="mt-10 flex items-center gap-3 bg-surface-light rounded-xl p-4 border border-border-light">
              <ShieldCheck className="w-6 h-6 text-op-green shrink-0" />
              <p className="text-sm font-body text-text-muted">
                {locale === "es"
                  ? "Tu información es confidencial y está protegida bajo nuestras políticas de privacidad."
                  : "Your information is confidential and protected under our privacy policies."}
              </p>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {status === "sent" ? (
              /* ── Success State ── */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-surface-light border border-op-green/20 rounded-2xl p-10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-op-green/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8 text-op-green" />
                </div>
                <p className="font-heading text-xl font-bold text-text-dark mb-2">
                  {t("contact", "success")}
                </p>
                <p className="font-body text-sm text-text-muted">
                  {locale === "es"
                    ? "Nuestro equipo revisará tu solicitud y te contactará en menos de 24 horas."
                    : "Our team will review your request and contact you within 24 hours."}
                </p>
              </motion.div>
            ) : (
              /* ── Form ── */
              <form
                onSubmit={handleSubmit}
                className="bg-surface-light border border-border-light rounded-2xl p-6 sm:p-8 space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-heading font-bold text-text-dark mb-1.5"
                  >
                    {t("contact", "name")}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    className="w-full h-12 px-4 rounded-lg border border-border-light bg-white font-body text-sm text-text-dark placeholder:text-text-muted/60 focus-ring transition-shadow"
                    placeholder={
                      locale === "es" ? "Ej: Juan Pérez" : "E.g.: John Doe"
                    }
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-heading font-bold text-text-dark mb-1.5"
                  >
                    {t("contact", "email")}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    className="w-full h-12 px-4 rounded-lg border border-border-light bg-white font-body text-sm text-text-dark placeholder:text-text-muted/60 focus-ring transition-shadow"
                    placeholder={
                      locale === "es"
                        ? "nombre@empresa.com"
                        : "name@company.com"
                    }
                  />
                </div>

                {/* Position */}
                <div>
                  <label
                    htmlFor="contact-position"
                    className="block text-sm font-heading font-bold text-text-dark mb-1.5"
                  >
                    {t("contact", "position")}
                  </label>
                  <input
                    id="contact-position"
                    type="text"
                    required
                    className="w-full h-12 px-4 rounded-lg border border-border-light bg-white font-body text-sm text-text-dark placeholder:text-text-muted/60 focus-ring transition-shadow"
                    placeholder={
                      locale === "es"
                        ? "Ej: Gerente de Planta"
                        : "E.g.: Plant Manager"
                    }
                  />
                </div>

                {/* Machines Select */}
                <div>
                  <label
                    htmlFor="contact-machines"
                    className="block text-sm font-heading font-bold text-text-dark mb-1.5"
                  >
                    {t("contact", "machines")}
                  </label>
                  <select
                    id="contact-machines"
                    required
                    className="w-full h-12 px-4 rounded-lg border border-border-light bg-white font-body text-sm text-text-dark focus-ring transition-shadow appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {locale === "es" ? "Seleccionar..." : "Select..."}
                    </option>
                    <option value="1-50">
                      {t("contact", "machines_opt1")}
                    </option>
                    <option value="51-200">
                      {t("contact", "machines_opt2")}
                    </option>
                    <option value="201-500">
                      {t("contact", "machines_opt3")}
                    </option>
                    <option value="500+">
                      {t("contact", "machines_opt4")}
                    </option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full text-base !min-h-[52px] disabled:opacity-60 disabled:pointer-events-none"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {locale === "es" ? "Enviando..." : "Sending..."}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t("contact", "submit")}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
