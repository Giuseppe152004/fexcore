"use client";

import { use } from "react";
import Link from "next/link";
import {
  BarChart3,
  ClipboardList,
  Wrench,
  Monitor,
  Tablet,
  Smartphone,
  TrendingUp,
  Target,
  Clock,
  CheckCircle,
  Zap,
  Shield,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoleLayout from "@/components/RoleLayout";
import SolutionLayout from "@/components/SolutionLayout";

// ── Data for each role ──
const rolesData: Record<
  string,
  {
    title: string;
    subtitle: string;
    description: string;
    icon: typeof BarChart3;
    iconColor: string;
    iconBg: string;
    accent: string;
    deviceIcon: typeof Monitor;
    deviceLabel: string;
    features: { icon: typeof TrendingUp; title: string; desc: string }[];
  }
> = {
  gerencia: {
    title: "Dashboards y KPIs en Tiempo Real",
    subtitle: "Gerentes de Planta",
    description:
      "Toma el control absoluto de tu operación. Visualiza métricas clave como disponibilidad de equipos, MTBF, MTTR y costos de mantenimiento en un solo lugar. Toma decisiones estratégicas basadas en datos concretos, no en suposiciones.",
    icon: BarChart3,
    iconColor: "text-core-blue",
    iconBg: "bg-core-blue/10",
    accent: "from-core-blue to-blue-600",
    deviceIcon: Monitor,
    deviceLabel: "Vista Desktop",
    features: [
      {
        icon: TrendingUp,
        title: "KPIs Automatizados",
        desc: "MTBF, MTTR, disponibilidad y OEE calculados en tiempo real sin intervención manual.",
      },
      {
        icon: Target,
        title: "Reportes Ejecutivos",
        desc: "Informes listos para junta directiva con gráficos claros y exportables a PDF.",
      },
      {
        icon: Shield,
        title: "Control de Costos",
        desc: "Visualiza gastos por activo, área y tipo de mantenimiento para optimizar tu presupuesto.",
      },
    ],
  },
  supervision: {
    title: "Asignación de OTs y Control Total",
    subtitle: "Supervisores de Mantenimiento",
    description:
      "Distribuye el trabajo de manera inteligente. Crea, asigna y da seguimiento a las Órdenes de Trabajo (OTs) al instante. Supervisa el progreso de tu equipo y asegura el cumplimiento de las tareas programadas sin fricciones.",
    icon: ClipboardList,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    accent: "from-purple-500 to-indigo-600",
    deviceIcon: Tablet,
    deviceLabel: "Vista Tablet",
    features: [
      {
        icon: Clock,
        title: "Planificación Predictiva",
        desc: "Programa mantenimientos preventivos y predictivos con calendario visual e inteligente.",
      },
      {
        icon: CheckCircle,
        title: "Seguimiento en Vivo",
        desc: "Monitorea el estado de cada OT en tiempo real: pendiente, en proceso o completada.",
      },
      {
        icon: Zap,
        title: "Asignación Inteligente",
        desc: "Asigna técnicos según disponibilidad, especialidad y carga de trabajo automáticamente.",
      },
    ],
  },
  tecnicos: {
    title: "Reporte de Fallas de Baja Fricción",
    subtitle: "Técnicos de Piso",
    description:
      "Empodera a tus técnicos con herramientas móviles ágiles. Reporta fallas, consulta manuales y cierra OTs desde cualquier lugar, directamente en la planta, reduciendo el papeleo y los tiempos muertos.",
    icon: Wrench,
    iconColor: "text-op-green",
    iconBg: "bg-op-green/10",
    accent: "from-op-green to-emerald-600",
    deviceIcon: Smartphone,
    deviceLabel: "Vista Móvil",
    features: [
      {
        icon: Zap,
        title: "Reporte en 3 Clics",
        desc: "Reporta fallas con fotos y descripción en segundos. Sin formularios complicados.",
      },
      {
        icon: CheckCircle,
        title: "Checklists Digitales",
        desc: "Accede a listas de verificación y procedimientos directamente desde tu celular.",
      },
      {
        icon: Shield,
        title: "Acceso Offline",
        desc: "Funciona sin conexión a internet. Los datos se sincronizan automáticamente al reconectar.",
      },
    ],
  },
};

// ── Solutions data for "Más información" links ──
const solutionsData: Record<
  string,
  {
    title: string;
    subtitle: string;
    description: string;
    icon: typeof BarChart3;
    features: { icon: typeof TrendingUp; title: string; desc: string }[];
    tags: string[];
  }
> = {
  ordenes: {
    title: "Órdenes de Trabajo (OTs)",
    subtitle: "Módulo Principal",
    description:
      "Crea, asigna y da seguimiento a órdenes de trabajo correctivas, preventivas y predictivas con flujos automatizados. Cada OT se rastrea desde su creación hasta su cierre, garantizando trazabilidad completa y cumplimiento de SLAs.",
    icon: ClipboardList,
    features: [
      {
        icon: CheckCircle,
        title: "Flujos Automatizados",
        desc: "Desde la detección de la falla hasta el cierre de la OT, todo el proceso es digital y rastreable.",
      },
      {
        icon: Clock,
        title: "Priorización Inteligente",
        desc: "Las OTs se priorizan automáticamente según criticidad del equipo e impacto en producción.",
      },
      {
        icon: TrendingUp,
        title: "Métricas de Cumplimiento",
        desc: "Mide tiempos de respuesta, porcentaje de cumplimiento y eficiencia de tu equipo técnico.",
      },
    ],
    tags: ["Correctivo", "Preventivo", "Predictivo"],
  },
  activos: {
    title: "Gestión de Activos y Maquinaria",
    subtitle: "Registro Centralizado",
    description:
      "Registro centralizado de todos tus activos con historial completo de mantenimiento, costos acumulados y vida útil estimada. Cada máquina tiene su ficha técnica digital con documentos, manuales y fotografías asociadas.",
    icon: BarChart3,
    features: [
      {
        icon: Shield,
        title: "Ficha Técnica Digital",
        desc: "Cada activo tiene su perfil completo con especificaciones, manuales y documentos asociados.",
      },
      {
        icon: TrendingUp,
        title: "Historial de Mantenimiento",
        desc: "Accede al historial completo de intervenciones, repuestos utilizados y costos por activo.",
      },
      {
        icon: Target,
        title: "Vida Útil Estimada",
        desc: "Proyecta el fin de vida útil de tus equipos para planificar reemplazos con anticipación.",
      },
    ],
    tags: ["Historial", "Costos", "Vida útil"],
  },
  inventario: {
    title: "Control de Inventario y Repuestos",
    subtitle: "Almacén Inteligente",
    description:
      "Gestiona tu almacén de refacciones con alertas de stock mínimo, órdenes de compra automatizadas y trazabilidad completa. Nunca más detengas un mantenimiento por falta de repuestos.",
    icon: Wrench,
    features: [
      {
        icon: Zap,
        title: "Alertas de Stock Mínimo",
        desc: "Recibe notificaciones automáticas cuando un repuesto alcanza el nivel mínimo de inventario.",
      },
      {
        icon: CheckCircle,
        title: "Órdenes de Compra",
        desc: "Genera órdenes de compra directamente desde el sistema cuando se detecta escasez.",
      },
      {
        icon: Shield,
        title: "Trazabilidad Completa",
        desc: "Rastrea cada repuesto desde su ingreso al almacén hasta su uso en una OT específica.",
      },
    ],
    tags: ["Stock mínimo", "Compras", "Trazabilidad"],
  },
  alertas: {
    title: "Alertas por Webhook",
    subtitle: "Notificaciones Instantáneas",
    description:
      "Notificaciones instantáneas vía WhatsApp, Email y Slack cuando ocurren eventos críticos en tu operación. Configura reglas personalizadas para cada tipo de alerta y asegura que la información correcta llegue a la persona correcta.",
    icon: BarChart3,
    features: [
      {
        icon: Zap,
        title: "Multi-Canal",
        desc: "Envía alertas simultáneas por WhatsApp, Email, Slack y SMS según la criticidad del evento.",
      },
      {
        icon: Target,
        title: "Reglas Personalizables",
        desc: "Define qué eventos disparan alertas, a quién se notifica y por qué canal.",
      },
      {
        icon: Clock,
        title: "Escalamiento Automático",
        desc: "Si una alerta no se atiende en tiempo definido, se escala automáticamente al siguiente nivel.",
      },
    ],
    tags: ["WhatsApp", "Email", "Slack"],
  },
};

// Merge both datasets
const allData: Record<string, (typeof rolesData)[string] | (typeof solutionsData)[string]> = {
  ...rolesData,
  ...solutionsData,
};

export default function DetallesPorRol(props: {
  params: Promise<{ rol: string }>;
}) {
  const params = use(props.params);
  const rolKey = params.rol;
  const data = allData[rolKey];

  if (!data) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-surface-light gap-6">
          <h1 className="text-4xl font-heading font-bold text-text-dark">
            Página no encontrada
          </h1>
          <p className="text-text-muted font-body text-lg">
            El contenido que buscas no existe.
          </p>
          <Link href="/" className="btn-primary">
            Volver al Inicio
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // Determine if it's a role or solution
  const isRole = rolKey in rolesData;

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {isRole ? (
          <RoleLayout data={data} />
        ) : (
          <SolutionLayout data={data} />
        )}

        {/* ── Bottom CTA (Shared) ── */}
        <section className="relative bg-slate-900 py-20 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-core-blue/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="section-container relative z-10 flex flex-col items-center text-center">
            <div className="max-w-3xl flex flex-col items-center gap-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                ¿Listo para ver {data.title.toLowerCase()} en acción?
              </h2>
              <Link
                href="/#contacto"
                className="btn-primary text-lg !min-h-[48px] !px-8"
              >
                Solicitar Demostración
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
