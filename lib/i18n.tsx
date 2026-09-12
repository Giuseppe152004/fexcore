"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type Locale = "es" | "en";

type TranslationDict = {
  [section: string]: {
    [key: string]: string | string[];
  };
};

type Translations = Record<Locale, TranslationDict>;

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface I18nContextValue {
  locale: Locale;
  t: (section: string, key: string) => string;
  tArray: (section: string, key: string) => string[];
  toggleLocale: () => void;
  setLocale: (l: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

// ---------------------------------------------------------------------------
// Dictionary
// ---------------------------------------------------------------------------

const translations: Translations = {
  // =======================================================================
  //  ESPAÑOL
  // =======================================================================
  es: {
    nav: {
      solutions: "Soluciones",
      audience: "A quién ayudamos",
      testimonials: "Testimonios",
      login: "Iniciar Sesión",
      cta: "Solicitar Consulta",
    },

    hero: {
      title: "El núcleo de tu mantenimiento industrial",
      subtitle:
        "Erradica el caos operativo y reduce los tiempos muertos con la plataforma líder en gestión de activos y órdenes de trabajo.",
      cta_primary: "Solicitar Consulta Gratuita",
      cta_secondary: "Ver Funcionamiento",
    },

    marquee: {
      headline: "Confiado por líderes de la manufactura y logística",
    },

    audience: {
      headline: "Diseñado para cada nivel de tu operación",
      subtitle:
        "FixCore se adapta a las necesidades específicas de cada rol en tu planta industrial.",
      card1_title: "Gerentes de Planta",
      card1_desc:
        "Maximiza el ROI y audita tiempos muertos en tiempo real. Dashboards ejecutivos con KPIs accionables.",
      card2_title: "Supervisores de Mantenimiento",
      card2_desc:
        "Asigna OTs y controla el inventario sin fricción. Planificación predictiva y seguimiento en vivo.",
      card3_title: "Técnicos de Piso",
      card3_desc:
        "Reporta fallas en 3 clics desde cualquier dispositivo. Checklist digitales y acceso offline.",
    },

    solutions: {
      headline: "Nuestras Soluciones",
      subtitle:
        "Una plataforma integral que cubre todo el ciclo de vida del mantenimiento industrial.",
      card1_title: "Órdenes de Trabajo (OTs)",
      card1_desc:
        "Crea, asigna y da seguimiento a órdenes de trabajo correctivas, preventivas y predictivas con flujos automatizados.",
      card2_title: "Gestión de Activos y Maquinaria",
      card2_desc:
        "Registro centralizado de todos tus activos con historial completo de mantenimiento, costos y vida útil estimada.",
      card3_title: "Control de Inventario y Repuestos",
      card3_desc:
        "Gestiona tu almacén de refacciones con alertas de stock mínimo, órdenes de compra y trazabilidad completa.",
      card4_title: "Alertas por Webhook",
      card4_desc:
        "Notificaciones instantáneas vía WhatsApp, Email y Slack cuando ocurren eventos críticos en tu operación.",
    },

    testimonials: {
      headline: "Impacto Comprobado",
      subtitle:
        "Empresas líderes confían en FixCore para transformar su mantenimiento industrial.",
      quote1:
        "FixCore redujo nuestro downtime en un 40% en solo 3 meses. La adopción por parte de los técnicos fue inmediata.",
      author1: "Carlos Mendoza",
      role1: "Director de Operaciones — Aceros del Norte",
      quote2:
        "La visibilidad que nos da sobre el estado de nuestros activos es incomparable. Pasamos de Excel a datos en tiempo real.",
      author2: "María Solís",
      role2: "Gerente de Planta — LogiFreeze Mx",
      quote3:
        "Implementar FixCore fue sorprendentemente rápido. En 2 semanas ya teníamos toda la planta digitalizada.",
      author3: "Andrés Vega",
      role3: "VP de Mantenimiento — Cementos del Pacífico",
    },

    contact: {
      headline: "Hablemos sobre tu planta",
      subtitle: "Agenda una demostración técnica personalizada.",
      benefit1: "Análisis gratuito de tu operación actual",
      benefit2: "Demo en vivo adaptada a tu industria",
      benefit3: "Plan de implementación sin compromiso",
      benefit4: "Soporte técnico dedicado desde el día uno",
      name: "Nombre completo",
      email: "Correo corporativo",
      position: "Puesto",
      machines: "Cantidad de máquinas",
      machines_opt1: "1 – 50",
      machines_opt2: "51 – 200",
      machines_opt3: "201 – 500",
      machines_opt4: "500+",
      submit: "Enviar Solicitud",
      success: "¡Solicitud enviada! Te contactaremos pronto.",
    },

    footer: {
      tagline:
        "Plataforma líder en gestión de mantenimiento industrial inteligente.",
      col_solutions: "Soluciones",
      link_ots: "Órdenes de Trabajo",
      link_assets: "Gestión de Activos",
      link_inventory: "Inventario",
      link_alerts: "Alertas Webhook",
      col_company: "Empresa",
      link_about: "Nosotros",
      link_careers: "Carreras",
      link_blog: "Blog",
      link_contact: "Contacto",
      col_legal: "Legal",
      link_privacy: "Privacidad",
      link_terms: "Términos de Servicio",
      link_cookies: "Cookies",
      copyright: "© 2026 FixCore. Todos los derechos reservados.",
    },
  },

  // =======================================================================
  //  ENGLISH
  // =======================================================================
  en: {
    nav: {
      solutions: "Solutions",
      audience: "Who We Help",
      testimonials: "Testimonials",
      login: "Sign In",
      cta: "Request a Consultation",
    },

    hero: {
      title: "The Core of Your Industrial Maintenance",
      subtitle:
        "Eradicate operational chaos and reduce downtime with the leading platform for asset management and work orders.",
      cta_primary: "Request Free Consultation",
      cta_secondary: "See How It Works",
    },

    marquee: {
      headline: "Trusted by leaders in manufacturing and logistics",
    },

    audience: {
      headline: "Designed for every level of your operation",
      subtitle:
        "FixCore adapts to the specific needs of every role in your industrial plant.",
      card1_title: "Plant Managers",
      card1_desc:
        "Maximize ROI and audit downtime in real time. Executive dashboards with actionable KPIs.",
      card2_title: "Maintenance Supervisors",
      card2_desc:
        "Assign work orders and control inventory seamlessly. Predictive planning and live tracking.",
      card3_title: "Floor Technicians",
      card3_desc:
        "Report failures in 3 clicks from any device. Digital checklists and offline access.",
    },

    solutions: {
      headline: "Our Solutions",
      subtitle:
        "A comprehensive platform covering the entire lifecycle of industrial maintenance.",
      card1_title: "Work Orders (WOs)",
      card1_desc:
        "Create, assign, and track corrective, preventive, and predictive work orders with automated workflows.",
      card2_title: "Asset & Machinery Management",
      card2_desc:
        "Centralized registry of all your assets with complete maintenance history, costs, and estimated lifespan.",
      card3_title: "Inventory & Spare Parts Control",
      card3_desc:
        "Manage your spare parts warehouse with minimum stock alerts, purchase orders, and full traceability.",
      card4_title: "Webhook Alerts",
      card4_desc:
        "Instant notifications via WhatsApp, Email, and Slack when critical events occur in your operation.",
    },

    testimonials: {
      headline: "Proven Impact",
      subtitle:
        "Leading companies trust FixCore to transform their industrial maintenance.",
      quote1:
        "FixCore reduced our downtime by 40% in just 3 months. Technician adoption was immediate.",
      author1: "Carlos Mendoza",
      role1: "Director of Operations — Aceros del Norte",
      quote2:
        "The visibility it gives us over our asset status is unmatched. We went from Excel to real-time data.",
      author2: "María Solís",
      role2: "Plant Manager — LogiFreeze Mx",
      quote3:
        "Implementing FixCore was surprisingly fast. In 2 weeks we had the entire plant digitized.",
      author3: "Andrés Vega",
      role3: "VP of Maintenance — Cementos del Pacífico",
    },

    contact: {
      headline: "Let's talk about your plant",
      subtitle: "Schedule a personalized technical demo.",
      benefit1: "Free analysis of your current operation",
      benefit2: "Live demo tailored to your industry",
      benefit3: "No-commitment implementation plan",
      benefit4: "Dedicated technical support from day one",
      name: "Full name",
      email: "Corporate email",
      position: "Job title",
      machines: "Number of machines",
      machines_opt1: "1 – 50",
      machines_opt2: "51 – 200",
      machines_opt3: "201 – 500",
      machines_opt4: "500+",
      submit: "Submit Request",
      success: "Request sent! We'll contact you soon.",
    },

    footer: {
      tagline:
        "Leading platform for intelligent industrial maintenance management.",
      col_solutions: "Solutions",
      link_ots: "Work Orders",
      link_assets: "Asset Management",
      link_inventory: "Inventory",
      link_alerts: "Webhook Alerts",
      col_company: "Company",
      link_about: "About Us",
      link_careers: "Careers",
      link_blog: "Blog",
      link_contact: "Contact",
      col_legal: "Legal",
      link_privacy: "Privacy",
      link_terms: "Terms of Service",
      link_cookies: "Cookies",
      copyright: "© 2026 FixCore. All rights reserved.",
    },
  },
};

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  const t = useCallback(
    (section: string, key: string): string => {
      const val = translations[locale]?.[section]?.[key];
      if (Array.isArray(val)) return val.join(", ");
      return (val as string) ?? `[${section}.${key}]`;
    },
    [locale],
  );

  const tArray = useCallback(
    (section: string, key: string): string[] => {
      const val = translations[locale]?.[section]?.[key];
      if (Array.isArray(val)) return val;
      if (typeof val === "string") return [val];
      return [`[${section}.${key}]`];
    },
    [locale],
  );

  return (
    <I18nContext.Provider value={{ locale, t, tArray, toggleLocale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within <I18nProvider>");
  }
  return ctx;
}
