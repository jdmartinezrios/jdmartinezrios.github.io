"use strict";

/**
 * i18n dictionaries.
 *
 * English is the default language and lives directly in index.html; it is
 * harvested from the DOM on page load. This file only defines the Spanish
 * strings (keyed by data-i18n attributes) plus the few runtime-only strings
 * that have no DOM element, which need both languages.
 */
const TRANSLATIONS = {
  en: {
    "form.sending": "Sending…",
    "form.success": "Thanks for reaching out! I'll reply soon.",
    "form.error":
      "Something went wrong. Please try again or reach me on LinkedIn.",
  },

  es: {
    "meta.title": "Juan David Martinez Rios | Ingeniero de Software Senior",

    // Navigation
    "nav.skip": "Saltar al contenido",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.education": "Educación",
    "nav.contact": "Contacto",
    "nav.resume": "CV",
    "nav.toggle": "Abrir o cerrar el menú de navegación",

    // Hero
    "hero.eyebrow": "Hola, mi nombre es",
    "hero.role": "Ingeniero de Software Senior",
    "hero.roleDetail": "Full Stack · Web, Móvil e IA",
    "hero.summary":
      "Construyo productos web, móviles y de IA de principio a fin — desde el diseño y la arquitectura hasta las pruebas y el despliegue — para empresas en América y más allá. Actualmente construyo soluciones empresariales escalables y flujos de trabajo con IA en",
    "hero.stat.years": "Años de experiencia",
    "hero.stat.projects": "Proyectos entregados",
    "hero.stat.companies": "Empresas y clientes",
    "hero.cta.resume": "Descargar CV",
    "hero.cta.contact": "Contáctame",
    "hero.photoAlt": "Retrato de Juan David Martínez Ríos",
    "hero.scrollHint": "Desplazarse a experiencia",
    "social.linkedin": "Perfil de LinkedIn",
    "social.github": "Perfil de GitHub",

    // Section titles
    "section.experience": "Experiencia",
    "section.skills": "Habilidades",
    "section.projects": "Proyectos destacados",
    "section.education": "Educación y certificaciones",
    "section.contact": "Contáctame",

    // Experience
    "exp.epam.role": "Ingeniero de Software Senior",
    "exp.epam.date": "Ene 2026 – Actual",
    "exp.epam.company": "EPAM Systems · Remoto",
    "exp.epam.desc":
      "Construyo y mantengo soluciones escalables dentro de una iniciativa de Digital Factory para clientes internacionales del sector salud, participando en todo el ciclo de vida del software y apoyando esfuerzos de preventa/RFP. Desarrollo agentes de IA, integraciones MCP y flujos de trabajo y apps con IA usando Claude Code, las APIs de OpenAI y Gemini, y GitHub Copilot.",

    "exp.patagonian.role": "Ingeniero de Software",
    "exp.patagonian.date": "Ene 2021 – Ene 2026",
    "exp.patagonian.desc":
      "Lideré el desarrollo de una plataforma de telemedicina potenciada con IA, con un chatbot médico para prediagnóstico, solicitudes de recetas, estudios clínicos, pagos en línea, notificaciones en tiempo real, dashboards multirol y un portal de administración completo. Construí agentes de IA y funcionalidades basadas en LLMs, entregando productos multiplataforma con pipelines de CI/CD en Jenkins y Codemagic.",

    "exp.tyba.role": "Ingeniero Frontend",
    "exp.tyba.company": "tyba · Remoto",
    "exp.tyba.desc":
      "Desarrollé una aplicación de inversión multiplataforma para un importante grupo de inversiones de América Latina, integrando autenticación segura, datos de portafolio en tiempo real y dashboards financieros.",

    "exp.mooveit.role": "Desarrollador Full Stack",
    "exp.mooveit.date": "Mar 2021 – Ago 2022",
    "exp.mooveit.desc":
      "Lideré el desarrollo de una plataforma de seguros de salud de EE. UU., incluyendo un panel de administración, sistema de notificaciones, portal transaccional y página de aterrizaje de marketing.",

    "exp.saralt.role": "Ingeniero Full Stack",
    "exp.saralt.date": "Feb 2020 – Abr 2021",
    "exp.saralt.company": "Sara LT · Remoto",
    "exp.saralt.desc":
      "Lideré el desarrollo de una aplicación multiplataforma de ofertas basadas en ubicación en tiempo real, con portal transaccional, validación de identidad de usuarios y experiencias multirol.",

    "exp.bees2biz.role": "Desarrollador Móvil Semi Sr",
    "exp.bees2biz.company": "Bees2biz · Remoto",
    "exp.bees2biz.desc":
      "Diseñé y lideré una app de gestión agrícola que permite a los agricultores organizar turnos, cosechas, cultivos y ciclos de producción. Coordiné un equipo remoto en EE. UU. liderando el área móvil.",

    "exp.squareball.role": "Ingeniero de Software",
    "exp.squareball.desc":
      "Desarrollé una plataforma de conectividad de farmacias que unifica múltiples farmacias, ofreciendo servicios y productos a los clientes mediante dashboards por roles, un panel de administración y notificaciones en tiempo real.",

    "exp.gtc.role": "Analista y Desarrollador de Software",
    "exp.gtc.date": "Dic 2018 – Mar 2019",
    "exp.gtc.desc":
      "Desarrollé una plataforma bancaria y de gestión de préstamos con procesamiento de créditos, reportes financieros, extractos de cuenta, notificaciones, generación de archivos y flujos de trabajo por roles.",

    "exp.sena.role": "Desarrollador de Software",
    "exp.sena.date": "Abr 2018 – Oct 2018",
    "exp.sena.desc":
      "Voluntario en el proyecto de investigación e innovación Sennova: construí una aplicación móvil de apoyo al comercio de frutas y verduras para productores locales.",

    "exp.freelance.role": "Desarrollador de Software Freelance",
    "exp.freelance.company": "Independiente · Colombia",
    "exp.freelance.desc":
      "Desarrollé aplicaciones web y móviles basadas en arquitecturas organizadas, escalables y sostenibles, cumpliendo los requerimientos de clientes de múltiples industrias.",

    // Skills
    "skills.ai": "Ingeniería de IA y LLMs",
    "skills.mobile": "Móvil",
    "skills.cloud": "Nube y DevOps",
    "skills.databases": "Bases de datos",
    "skills.testing": "Pruebas y calidad",

    // Projects
    "proj.telemedicine.title": "Plataforma de Telemedicina con IA",
    "proj.telemedicine.desc":
      "Plataforma de telemedicina potenciada con IA, con un chatbot médico para prediagnóstico, solicitudes de recetas, estudios clínicos, pagos en línea y dashboards multirol.",
    "proj.investorstrides.date": "2026 – Actual",
    "proj.investorstrides.desc":
      "Proyecto freelance: plataforma de análisis de decisiones para inversionistas — un portafolio simulado con decisiones inmutables con marca de tiempo, actualizaciones diarias al cierre del mercado y métricas de rendimiento, como analítica deportiva aplicada a la inversión.",
    "proj.tyba.desc":
      "App de inversión fintech para América Latina: inversiones, información de impuestos y herramientas para hacer crecer tu dinero de forma segura.",
    "proj.almundo.desc":
      "Plataforma de viajes que opera en toda América Latina ofreciendo planes vacacionales, vuelos, hospedaje y mucho más.",
    "proj.suka.desc":
      "Sistema ERP para la gestión de envíos, recepción y facturación de mercancías, operando principalmente en el sur de América Latina.",
    "proj.prescribe.desc":
      "Plataforma de salud de EE. UU. que permite a los clientes comparar opciones de planes médicos y encontrar las farmacias más cercanas según su ubicación.",
    "proj.agro.title": "App de Gestión Agrícola",
    "proj.agro.desc":
      "App de gestión agrícola que permite a los agricultores organizar turnos, cosechas, cultivos y ciclos de producción, con comunicación en tiempo real y dashboards por roles.",
    "proj.saralt.desc":
      "Servicio de transporte privado exclusivo para mujeres — apps de pasajera y conductora con seguimiento en tiempo real y validación de identidad.",
    "proj.pharmacy.desc":
      "Plataforma de conectividad que unifica múltiples farmacias con dashboards por roles, panel de administración y notificaciones en tiempo real.",
    "proj.banking.title": "Plataforma Bancaria y de Préstamos",
    "proj.banking.desc":
      "Plataforma bancaria que habilita procesamiento de préstamos, reportes financieros, extractos de cuenta y flujos de trabajo por roles.",
    "tag.ai": "IA",
    "tag.aiAgents": "Agentes de IA",
    "tag.aiWorkflows": "Flujos de trabajo y apps de IA",
    "tag.mcp": "Integraciones MCP",
    "tag.travel": "Viajes",
    "tag.healthcare": "Salud",
    "tag.healthcare2": "Salud",
    "tag.mobility": "Movilidad",
    "tag.banking": "Banca",

    // Education & certifications
    "edu.title": "Educación",
    "edu.certs": "Certificaciones",
    "edu.languages": "Idiomas",
    "edu.software.title": "Ingeniería de Software",
    "edu.tech.title":
      "Tecnólogo en Análisis y Desarrollo de Sistemas de Información",
    "edu.tech.place": "SENA — Centro de Biotecnología Industrial · 2016 – 2018",
    "edu.tech.note": "Promedio 4.5 · Graduado con distinción",
    "edu.systems.title": "Ingeniería de Sistemas",
    "cert.angular": "Certificado de Angular (Intermedio) — HackerRank · 2024",
    "cert.javascript": "Certificado de JavaScript (Intermedio) — HackerRank · 2023",
    "cert.git": "Curso profesional de Git y GitHub — Platzi · 2018",
    "lang.spanish": "Español — Nativo",
    "lang.english": "Inglés — Competencia profesional",

    // Contact
    "contact.lead":
      "Siempre estoy abierto a hablar de nuevos proyectos, oportunidades o simplemente de tecnología. Escríbeme y te responderé lo antes posible.",
    "contact.location": "Ubicación",
    "contact.website": "Sitio web",
    "form.name": "Nombre",
    "form.email": "Correo",
    "form.subject": "Asunto",
    "form.message": "Mensaje",
    "form.submit": "Enviar mensaje",
    "form.sending": "Enviando…",
    "form.success": "¡Gracias por escribirme! Te responderé pronto.",
    "form.error":
      "Algo salió mal. Inténtalo de nuevo o contáctame por LinkedIn.",

    // Footer
    "footer.built": "Hecho con HTML, CSS y JavaScript puros.",
  },
};
