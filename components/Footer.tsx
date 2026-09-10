"use client";

import { Linkedin, Twitter, Github, Youtube } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const socialLinks = [
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#020617] border-t border-border-subtle">
      <div className="section-container py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* ── Col 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-0.5 mb-4">
              <span className="font-heading text-xl font-bold text-white tracking-tight">
                Fex
              </span>
              <span className="font-heading text-xl font-bold text-gradient tracking-tight">
                Core
              </span>
              <span className="text-core-blue text-2xl leading-none font-bold">
                .
              </span>
            </a>
            <p className="font-body text-sm text-text-secondary leading-relaxed mb-6 max-w-xs">
              {t("footer", "tagline")}
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-border-subtle flex items-center justify-center text-text-secondary hover:text-core-blue hover:border-core-blue/30 hover:bg-core-blue/10 transition-all duration-200"
                >
                  <link.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Solutions ── */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t("footer", "col_solutions")}
            </h4>
            <ul className="space-y-2.5">
              {["link_ots", "link_assets", "link_inventory", "link_alerts"].map(
                (key) => (
                  <li key={key}>
                    <a
                      href="#soluciones"
                      className="font-body text-sm text-text-secondary hover:text-core-blue transition-colors duration-200"
                    >
                      {t("footer", key)}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* ── Col 3: Company ── */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t("footer", "col_company")}
            </h4>
            <ul className="space-y-2.5">
              {["link_about", "link_careers", "link_blog", "link_contact"].map(
                (key) => (
                  <li key={key}>
                    <a
                      href="#"
                      className="font-body text-sm text-text-secondary hover:text-core-blue transition-colors duration-200"
                    >
                      {t("footer", key)}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* ── Col 4: Legal ── */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t("footer", "col_legal")}
            </h4>
            <ul className="space-y-2.5">
              {["link_privacy", "link_terms", "link_cookies"].map((key) => (
                <li key={key}>
                  <a
                    href="#"
                    className="font-body text-sm text-text-secondary hover:text-core-blue transition-colors duration-200"
                  >
                    {t("footer", key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-text-muted">
            {t("footer", "copyright")}
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-op-green animate-pulse" />
            <span className="font-body text-xs text-text-muted">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
