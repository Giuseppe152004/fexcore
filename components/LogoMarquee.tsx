"use client";

import { useTranslation } from "@/lib/i18n";
import {
  Factory,
  Truck,
  Zap,
  Cog,
  HardHat,
  Container,
  Boxes,
  Gauge,
  Pipette,
  Wheat,
  ShieldCheck,
  Forklift,
} from "lucide-react";

const logos = [
  { Icon: Factory, name: "IndPro" },
  { Icon: Truck, name: "LogiFreeze" },
  { Icon: Zap, name: "VoltEnergy" },
  { Icon: Cog, name: "MechaCorp" },
  { Icon: HardHat, name: "BuildMax" },
  { Icon: Container, name: "ContainerX" },
  { Icon: Boxes, name: "StackLogic" },
  { Icon: Gauge, name: "PressureTech" },
  { Icon: Pipette, name: "ChemFlow" },
  { Icon: Wheat, name: "AgroLink" },
  { Icon: ShieldCheck, name: "SafeOps" },
  { Icon: Forklift, name: "LiftPro" },
];

export default function LogoMarquee() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-10 md:py-14 border-y border-border-light overflow-hidden">
      <div className="section-container mb-6">
        <p className="text-center text-sm font-body text-text-muted tracking-wide uppercase">
          {t("marquee", "headline")}
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient fades on edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-marquee w-max">
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center gap-2.5 mx-8 md:mx-12 shrink-0 group"
            >
              <logo.Icon className="w-6 h-6 text-text-muted/50 group-hover:text-core-blue transition-colors duration-300" />
              <span className="text-base font-heading font-bold text-text-muted/40 group-hover:text-text-dark transition-colors duration-300 whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
