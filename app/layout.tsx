import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

// ---------------------------------------------------------------------------
// Fonts — loaded via next/font for optimal performance
// ---------------------------------------------------------------------------

const roboto = Roboto({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "FexCore — Plataforma de Mantenimiento Industrial Inteligente",
  description:
    "Erradica el caos operativo y reduce tiempos muertos con la plataforma líder en gestión de activos, órdenes de trabajo y mantenimiento industrial.",
  keywords: [
    "mantenimiento industrial",
    "CMMS",
    "gestión de activos",
    "órdenes de trabajo",
    "SaaS industrial",
    "mantenimiento predictivo",
    "FexCore",
  ],
  authors: [{ name: "FexCore" }],
  openGraph: {
    title: "FexCore — Plataforma de Mantenimiento Industrial Inteligente",
    description:
      "Erradica el caos operativo y reduce tiempos muertos con la plataforma líder en gestión de activos y órdenes de trabajo.",
    type: "website",
    locale: "es_MX",
    siteName: "FexCore",
  },
  twitter: {
    card: "summary_large_image",
    title: "FexCore — Mantenimiento Industrial Inteligente",
    description:
      "Gestión de activos, órdenes de trabajo y mantenimiento predictivo en una sola plataforma.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ---------------------------------------------------------------------------
// Root Layout
// ---------------------------------------------------------------------------

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${roboto.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
