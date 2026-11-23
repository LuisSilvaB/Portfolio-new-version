export type Lang = 'es' | 'en';
export const langs: Lang[] = ['es', 'en'];

type Stat = { n: string; l: string };
type Item = { t: string; d: string };

export type Case = {
  slug: 'sioa' | 'harmony' | 'domus';
  accent: 'sea' | 'coral';
  kicker: string;
  title: string;
  lead?: string;
  meta: { k: string; v: string }[];
  images: { src: string; alt: string; caption: string }[];
  problem?: { kicker: string; h: string; p: string };
  features: { kicker: string; h: string; items: Item[] };
  list?: { kicker: string; h: string; items: string[] };
  stats: { kicker: string; h: string; items: Stat[] };
  contribution: { kicker: string; stat?: Stat; items: Item[] };
  next: { slug: Case['slug']; label: string };
};

const email = 'luisarmandoballadares@gmail.com';

export const links = {
  email,
  whatsapp: 'https://api.whatsapp.com/send?phone=51923951866',
  telegram: 'https://t.me/luissilvaba',
  linkedin: 'https://www.linkedin.com/in/luissilvaballadares/',
  github: 'https://github.com/LuisSilvaB',
  harmonyDemo: 'https://my-pos-store.vercel.app/',
  voiceQuiz: 'https://voice-quiz-app.vercel.app/',
  voiceQuizCode: 'https://github.com/LuisSilvaB/voice-quiz-app',
};

const es = {
  meta: {
    title: 'Luis Silva Balladares · Ingeniero de software full stack',
    description:
      'Ingeniero de Computación y Sistemas. Construyo sistemas completos para negocios reales: punto de venta, gestión acuícola y asistentes de IA en WhatsApp.',
  },
  nav: { cases: 'Casos', path: 'Trayectoria', stack: 'Stack', contact: 'Contacto', back: '← Todos los casos' },
  place: 'Trujillo, Perú',
  hero: {
    eyebrow: 'Ingeniero de Computación y Sistemas · Full stack · IA aplicada',
    title: ['Construyo el software que ', 'cada negocio', ' necesita para operar, y ahora con IA.'],
    lead: 'Soy Luis Silva Balladares. Entiendo cómo trabaja cada rubro y lo convierto en sistemas completos —base de datos, APIs e interfaces— que se usan todos los días: hoy en acuicultura, retail y atención al cliente con IA.',
    ctaCases: 'Ver casos',
    ctaCv: 'Descargar CV',
    cv: '/cv/luis-silva-cv-es.pdf',
    copy: 'Copiar email',
    copied: 'Email copiado ✓',
  },
  casesTitle: 'Casos seleccionados',
  seeCase: 'Ver caso →',
  demo: 'Demo →',
  code: 'Código →',
  cards: {
    sioa: {
      tag: 'Cliente',
      dates: '03/2026 — hoy',
      visual: 'Vista del cultivo · estado en vivo',
      desc: 'Sistema de gestión productiva para una empresa acuícola: registra el trabajo de campo, monitorea las condiciones del mar y avisa al equipo a tiempo.',
      stats: [
        { n: '14', l: 'concesiones' },
        { n: '+130', l: 'líneas de cultivo' },
        { n: '+2 mil', l: 'registros de temperatura' },
      ],
      stack: 'Next.js 16 · React 19 · Prisma · PostgreSQL',
    },
    harmony: {
      tag: 'Producto propio',
      dates: '07/2024 — hoy',
      table: 'Mesa 4',
      ticket: '2× Cheesecake',
      pos: 'POS · Pedidos QR',
      ping: 'Nuevo · Mesa 4',
      stock: 'Stock ● disponible',
      desc: 'POS multi-sucursal con catálogo QR: el cliente pide desde su mesa y el pedido llega al punto de venta en tiempo real, con aviso de conflictos de stock.',
      stats: [
        { n: '+20 mil', l: 'pedidos procesados' },
        { n: '20', l: 'sucursales' },
        { n: '~1 000', l: 'pedidos al mes' },
      ],
      stack: 'Bun · Elysia · React 19 · Supabase Realtime',
    },
    domus: {
      tag: 'Empleo · Domus AI',
      dates: '01/2025 — hoy',
      title: 'Agentes de WhatsApp',
      chatIn: '¿Hay disponibilidad para el sábado en la tarde?',
      chatOut: 'Sí, de 3 a 6 pm. ¿Te lo reservo a tu nombre?',
      desc: 'Agente de WhatsApp para residentes de edificios: pagan cuotas enviando la foto del comprobante, reservan áreas comunes y reportan incidencias. Todo sin salir de WhatsApp.',
      stats: [
        { n: '+2 mil', l: 'commits en 4 repos' },
        { n: 'End to end', l: 'del asistente de IA al panel web' },
        { n: '2025', l: 'en el equipo desde' },
      ],
      stack: 'LangGraph · Python · FastAPI · OpenAI · Bun · React 19',
    },
    voice: {
      tag: 'Proyecto personal',
      dates: '2024 — 2025',
      desc: 'Los docentes generan cuestionarios con IA y los alumnos responden hablando.',
      stack: 'React · Python · Flask · Supabase',
    },
  },
  pathTitle: 'Trayectoria',
  pathLead: 'Desde 2024 trabajo en paralelo en un empleo, un producto propio y un cliente industrial.',
  today: 'hoy',
  lanes: [
    { name: 'SIOA', kind: 'Cliente', left: 78.6, width: 19.0, color: 'sea' },
    { name: 'Domus AI', kind: 'Empleo', left: 45.2, width: 52.4, color: 'ink' },
    { name: 'Harmony', kind: 'Producto propio', left: 31.0, width: 66.7, color: 'coral' },
    { name: 'Naz Tec', kind: 'Empleo', left: 23.8, width: 21.4, color: 'muted' },
    { name: 'Softaki', kind: 'Trainee', left: 16.7, width: 7.1, color: 'muted' },
    { name: 'CEGEP', kind: 'Prácticas', left: 0, width: 14.3, color: 'line' },
  ],
  roles: [
    { dates: '03/2026 — hoy', role: 'Desarrollador full stack', org: 'SIOA', kind: 'Cliente', line: 'Único desarrollador del sistema de gestión de una empresa acuícola.' },
    { dates: '01/2025 — hoy', role: 'Desarrollador Full Stack', org: 'Domus AI', kind: 'Empleo', line: 'Agente de WhatsApp con LangGraph y visión; reservas y pagos en Bun, Elysia y React.' },
    { dates: '07/2024 — hoy', role: 'Fundador y desarrollador', org: 'Harmony', kind: 'Producto propio', line: 'POS multi-sucursal y catálogo QR con pedidos en tiempo real.' },
    { dates: '04/2024 — 01/2025', role: 'Desarrollador Full Stack', org: 'Naz Tec', kind: 'Empleo', line: 'Microservicios en Node.js y scraping con Puppeteer sobre AWS.' },
    { dates: '01/2024 — 04/2024', role: 'Front End trainee', org: 'Softaki', kind: 'Empleo', line: 'Interfaces en React y Next.js desde diseños de Figma.' },
    { dates: '06/2023 — 12/2023', role: 'Practicante de Ingeniería de Sistemas', org: 'CEGEP', kind: 'Prácticas', line: 'Mantenimiento del sitio institucional en WordPress.' },
  ],
  stackTitle: 'Stack, con contexto',
  stack: [
    { area: 'Producto y frontend', tools: 'Next.js · React 19 · Tailwind · Zustand · Redux · React Query', where: 'SIOA, Harmony y los paneles de Domus.' },
    { area: 'Backend y datos', tools: 'Node.js · Bun · Elysia · Prisma · PostgreSQL · Supabase', where: 'APIs con tipos de punta a punta y lógica crítica en la base de datos.' },
    { area: 'IA aplicada', tools: 'LangGraph · OpenAI (visión, salida estructurada) · evals', where: 'Agentes de WhatsApp en producción en Domus AI.' },
    { area: 'Nube e integraciones', tools: 'AWS · Vercel · Docker · Telegram · Google Sheets', where: 'Alertas y sincronización con hojas en SIOA.' },
  ],
  contactTitle: ['¿Construimos algo que ', 'se use todos los días', '?'],
  localTime: 'hora local',
  rights: '© 2026 Luis Silva Balladares',
  nextCase: 'Siguiente caso',
};

const en: typeof es = {
  meta: {
    title: 'Luis Silva Balladares · Full-stack software engineer',
    description:
      'Computer & Systems Engineer. I build complete systems for real businesses: point of sale, aquaculture management and AI assistants on WhatsApp.',
  },
  nav: { cases: 'Work', path: 'Experience', stack: 'Stack', contact: 'Contact', back: '← All work' },
  place: 'Trujillo, Peru',
  hero: {
    eyebrow: 'Computer & Systems Engineer · Full stack · Applied AI',
    title: ['I build the software ', 'each business', ' needs to run, now with AI.'],
    lead: "I'm Luis Silva Balladares. I learn how each industry works and turn it into complete systems —database, APIs and interfaces— that people use every day: today in aquaculture, retail and AI customer service.",
    ctaCases: 'See work',
    ctaCv: 'Download CV',
    cv: '/cv/luis-silva-cv-en.pdf',
    copy: 'Copy email',
    copied: 'Email copied ✓',
  },
  casesTitle: 'Selected work',
  seeCase: 'Read case →',
  demo: 'Demo →',
  code: 'Code →',
  cards: {
    sioa: {
      tag: 'Client',
      dates: 'Mar 2026 — now',
      visual: 'Farm overview · live status',
      desc: 'Production management system for an aquaculture company: it records field work, monitors sea conditions and alerts the team in time.',
      stats: [
        { n: '14', l: 'concessions' },
        { n: '130+', l: 'cultivation lines' },
        { n: '2k+', l: 'sea-temperature readings' },
      ],
      stack: 'Next.js 16 · React 19 · Prisma · PostgreSQL',
    },
    harmony: {
      tag: 'Own product',
      dates: 'Jul 2024 — now',
      table: 'Table 4',
      ticket: '2× Cheesecake',
      pos: 'POS · QR orders',
      ping: 'New · Table 4',
      stock: 'Stock ● available',
      desc: 'Multi-branch POS with a QR menu: customers order from their table and the order reaches the point of sale in real time, with stock-conflict warnings.',
      stats: [
        { n: '20k+', l: 'orders processed' },
        { n: '20', l: 'branches' },
        { n: '~1,000', l: 'orders per month' },
      ],
      stack: 'Bun · Elysia · React 19 · Supabase Realtime',
    },
    domus: {
      tag: 'Employment · Domus AI',
      dates: 'Jan 2025 — now',
      title: 'WhatsApp agents',
      chatIn: 'Is the BBQ area free on Saturday afternoon?',
      chatOut: 'Yes, from 3 to 6 pm. Shall I book it for you?',
      desc: 'WhatsApp assistant for apartment residents: they pay fees by sending a photo of the receipt, book common areas and report issues, all without leaving WhatsApp.',
      stats: [
        { n: '2k+', l: 'commits across 4 repos' },
        { n: 'End to end', l: 'from the AI assistant to the web app' },
        { n: '2025', l: 'on the team since' },
      ],
      stack: 'LangGraph · Python · FastAPI · OpenAI · Bun · React 19',
    },
    voice: {
      tag: 'Side project',
      dates: '2024 — 2025',
      desc: 'Teachers generate quizzes with AI and students answer by speaking.',
      stack: 'React · Python · Flask · Supabase',
    },
  },
  pathTitle: 'Experience',
  pathLead: 'Since 2024 I have worked in parallel on a job, my own product and an industrial client.',
  today: 'now',
  lanes: [
    { name: 'SIOA', kind: 'Client', left: 78.6, width: 19.0, color: 'sea' },
    { name: 'Domus AI', kind: 'Employment', left: 45.2, width: 52.4, color: 'ink' },
    { name: 'Harmony', kind: 'Own product', left: 31.0, width: 66.7, color: 'coral' },
    { name: 'Naz Tec', kind: 'Employment', left: 23.8, width: 21.4, color: 'muted' },
    { name: 'Softaki', kind: 'Trainee', left: 16.7, width: 7.1, color: 'muted' },
    { name: 'CEGEP', kind: 'Internship', left: 0, width: 14.3, color: 'line' },
  ],
  roles: [
    { dates: 'Mar 2026 — now', role: 'Full-stack developer', org: 'SIOA', kind: 'Client', line: 'Sole developer of the management system for an aquaculture company.' },
    { dates: 'Jan 2025 — now', role: 'Full-Stack Developer', org: 'Domus AI', kind: 'Employment', line: 'WhatsApp agent with LangGraph and vision; bookings and payments in Bun, Elysia and React.' },
    { dates: 'Jul 2024 — now', role: 'Founder & engineer', org: 'Harmony', kind: 'Own product', line: 'Multi-branch POS and QR menu with real-time orders.' },
    { dates: 'Apr 2024 — Jan 2025', role: 'Full-Stack Developer', org: 'Naz Tec', kind: 'Employment', line: 'Node.js microservices and Puppeteer scraping on AWS.' },
    { dates: 'Jan 2024 — Apr 2024', role: 'Front-End trainee', org: 'Softaki', kind: 'Employment', line: 'React and Next.js interfaces from Figma designs.' },
    { dates: 'Jun 2023 — Dec 2023', role: 'Systems Engineering intern', org: 'CEGEP', kind: 'Internship', line: 'Maintained the institutional WordPress site.' },
  ],
  stackTitle: 'Stack, in context',
  stack: [
    { area: 'Product & frontend', tools: 'Next.js · React 19 · Tailwind · Zustand · Redux · React Query', where: 'SIOA, Harmony and the Domus web apps.' },
    { area: 'Backend & data', tools: 'Node.js · Bun · Elysia · Prisma · PostgreSQL · Supabase', where: 'End-to-end typed APIs and critical logic in the database.' },
    { area: 'Applied AI', tools: 'LangGraph · OpenAI (vision, structured outputs) · evals', where: 'WhatsApp agents in production at Domus AI.' },
    { area: 'Cloud & integrations', tools: 'AWS · Vercel · Docker · Telegram · Google Sheets', where: 'Alerts and spreadsheet sync in SIOA.' },
  ],
  contactTitle: ["Shall we build something ", 'people use every day', '?'],
  localTime: 'local time',
  rights: '© 2026 Luis Silva Balladares',
  nextCase: 'Next case',
};

export const t = { es, en };

const casesEs: Case[] = [
  {
    slug: 'sioa',
    accent: 'sea',
    kicker: 'Caso 01 · Acuicultura',
    title: 'SIOA: la operación de un cultivo en el mar, en un solo sistema.',
    meta: [
      { k: 'Rol', v: 'Único desarrollador' },
      { k: 'Cliente', v: 'Empresa acuícola peruana' },
      { k: 'Período', v: '03/2026 — hoy' },
      { k: 'Stack', v: 'Next.js · React · PostgreSQL · Vercel' },
    ],
    images: [{ src: '/img/projects/sioa-modules.png', alt: 'Módulos de SIOA: control de líneas de cultivo, reportes y análisis de producción, y gestión de varias concesiones', caption: 'Módulos principales del sistema' }],
    problem: { kicker: '01 · El problema', h: 'Información dispersa, decisiones a ciegas', p: 'En un cultivo marino, el trabajo de campo y las condiciones del mar cambian todos los días. Cuando esa información vive en cuadernos y hojas sueltas, cuesta tener una foto clara de la operación y reaccionar a tiempo.' },
    features: {
      kicker: '02 · Qué resuelve',
      h: 'Todo el equipo mirando lo mismo',
      items: [
        { t: 'Registro desde campo', d: 'El equipo anota su trabajo desde el mar, en el momento.' },
        { t: 'Seguimiento del cultivo', d: 'Una vista clara del estado de la producción.' },
        { t: 'Alertas', d: 'Avisos por Telegram y correo para actuar a tiempo.' },
        { t: 'Sin cambiar de hábitos', d: 'Se conecta con las hojas de cálculo que el equipo ya usaba.' },
      ],
    },
    stats: {
      kicker: '03 · En números',
      h: 'La operación, medida',
      items: [
        { n: '14', l: 'concesiones gestionadas' },
        { n: '+130', l: 'líneas de cultivo con seguimiento' },
        { n: '+2 mil', l: 'registros de temperatura del mar' },
        { n: '8', l: 'meses de desarrollo' },
      ],
    },
    contribution: {
      kicker: 'Mi aporte',
      stat: { n: '100 %', l: 'del código, como único desarrollador' },
      items: [
        { t: '', d: 'Levanté los requerimientos con el equipo de campo y traduje su operación diaria a un sistema.' },
        { t: '', d: 'Diseñé y programé la aplicación completa: base de datos, backend, interfaz y despliegue.' },
        { t: '', d: 'Integré alertas por Telegram y correo, y la sincronización con las hojas de cálculo del equipo.' },
        { t: '', d: 'Evoluciono el sistema junto al cliente, a partir de su uso diario.' },
      ],
    },
    next: { slug: 'domus', label: 'Domus AI' },
  },
  {
    slug: 'domus',
    accent: 'sea',
    kicker: 'Caso 02 · IA aplicada',
    title: 'Un asistente de WhatsApp para resolver los trámites de un edificio.',
    lead: 'En Domus AI formé parte del equipo que construyó el asistente con el que los residentes pagan, reservan y reportan problemas sin salir de WhatsApp.',
    meta: [
      { k: 'Rol', v: 'Desarrollador full stack (IA)' },
      { k: 'Empresa', v: 'Domus AI, administración de edificios' },
      { k: 'Período', v: '01/2025 — hoy' },
      { k: 'Stack', v: 'LangGraph · Python · FastAPI · OpenAI · Bun · React 19' },
    ],
    images: [],
    problem: { kicker: '01 · El problema', h: 'Los residentes ya viven en WhatsApp', p: 'Pagar la cuota, reservar un área común o avisar de una fuga son trámites que la gente prefiere hacer por chat, a cualquier hora. Para la administración, atenderlos uno por uno toma tiempo y genera errores.' },
    features: {
      kicker: '02 · Qué hace el asistente',
      h: 'Tres trámites, una conversación',
      items: [
        { t: 'Pagos con una foto', d: 'El residente envía su comprobante y el asistente lo reconoce y lo registra.' },
        { t: 'Reservas', d: 'Consulta horarios libres y reserva áreas comunes en pocos mensajes.' },
        { t: 'Incidencias', d: 'Reporta problemas del edificio para que la administración les dé seguimiento.' },
      ],
    },
    list: {
      kicker: '03 · Experiencia',
      h: 'Pensado para WhatsApp, no para una web',
      items: [
        'Respuestas cortas y botones para avanzar en un toque.',
        'Confirmación antes de cualquier acción importante.',
        'Una persona del equipo puede tomar la conversación y devolverla al asistente cuando termina.',
      ],
    },
    stats: {
      kicker: '04 · Mi aporte',
      h: 'Qué construí yo dentro del equipo',
      items: [
        { n: 'End to end', l: 'del asistente de IA al panel web' },
        { n: '+2 mil', l: 'commits en 4 repositorios' },
        { n: '4', l: 'frentes: asistente, backend, panel web y bots' },
        { n: '2025', l: 'en el equipo desde enero' },
      ],
    },
    contribution: {
      kicker: 'En detalle',
      items: [
        { t: 'El asistente', d: 'Desarrollé su lógica: cómo conversa, qué acciones puede ejecutar y cómo se adapta a cada país y medio de pago.' },
        { t: 'Pagos con foto', d: 'Construí de punta a punta la lectura de comprobantes con visión, para registrar pagos sin intervención manual.' },
        { t: 'Reservas, incidencias y visitas', d: 'Programé las acciones que el asistente ejecuta en la plataforma, con confirmación antes de cada cambio importante.' },
        { t: 'Experiencia de conversación', d: 'Botones, respuestas cortas y la devolución de la conversación desde soporte al asistente.' },
        { t: 'Calidad', d: 'Pruebas automatizadas que verifican el comportamiento del asistente antes de cada cambio.' },
        { t: 'Plataforma', d: 'Módulos de reservas, finanzas y operaciones en el backend y el panel web, y los bots para nuevos países.' },
      ],
    },
    next: { slug: 'harmony', label: 'Harmony' },
  },
  {
    slug: 'harmony',
    accent: 'coral',
    kicker: 'Caso 03 · Producto propio',
    title: 'Harmony: el punto de venta que fundé, construí y opero desde 2024.',
    lead: 'Un sistema para restaurantes y tiendas con varias sucursales: ventas, inventario y caja en el POS, y un catálogo por QR para que el cliente pida desde su mesa.',
    meta: [
      { k: 'Rol', v: 'Fundador y desarrollador' },
      { k: 'Período', v: '07/2024 — hoy' },
      { k: 'Estado', v: 'En producción' },
      { k: 'Stack', v: 'React 19 · Next.js · Bun · Elysia · PostgreSQL · Supabase Realtime' },
    ],
    images: [
      { src: '/img/projects/harmony-home.png', alt: 'Página de inicio de Harmony POS con pedidos QR, cocina sincronizada y pagos', caption: 'Harmony POS · my-pos-store.vercel.app' },
      { src: '/img/projects/harmony-terminal.png', alt: 'Simulador del terminal de venta: catálogo rápido, orden de la mesa 4 y cobro con tarjeta, Yape o efectivo', caption: 'Simulador del terminal de venta, con productos de demostración' },
    ],
    features: {
      kicker: '02 · Qué hace',
      h: 'Del salón a la caja, en un solo sistema',
      items: [
        { t: 'Punto de venta', d: 'Ventas, cobros y mesas, con precios e inventario propios de cada sucursal.' },
        { t: 'Pedidos por QR', d: 'El cliente escanea su mesa, pide, y el pedido aparece al instante en el POS.' },
        { t: 'Stock bajo control', d: 'Avisa al vendedor cuando un pedido choca con el stock disponible.' },
        { t: 'Fidelización y servicio', d: 'Programa de puntos, llamado al mozo desde el QR y libro de reclamaciones digital.' },
      ],
    },
    stats: {
      kicker: '01 · En números',
      h: 'Uso real, todos los días',
      items: [
        { n: '+20 mil', l: 'pedidos procesados desde diciembre de 2024' },
        { n: '~1 000', l: 'pedidos en los últimos 30 días' },
        { n: '20', l: 'sucursales configuradas' },
        { n: '+270', l: 'pedidos hechos desde el QR de la mesa' },
      ],
    },
    contribution: {
      kicker: 'Mi aporte',
      stat: { n: '+340', l: 'commits en las 3 aplicaciones' },
      items: [
        { t: '', d: 'Fundé el producto y lo construí de punta a punta: el POS, el panel administrativo y el catálogo QR.' },
        { t: '', d: 'Lideré la reescritura a una segunda versión más rápida y segura, con tipos compartidos entre el frontend y el backend.' },
        { t: '', d: 'Diseñé la base de datos y la lógica en tiempo real que conecta los pedidos del QR con el POS y el stock.' },
      ],
    },
    next: { slug: 'sioa', label: 'SIOA' },
  },
];

const casesEn: Case[] = [
  {
    ...casesEs[0],
    kicker: 'Case 01 · Aquaculture',
    title: 'SIOA: running a sea farm from a single system.',
    meta: [
      { k: 'Role', v: 'Sole developer' },
      { k: 'Client', v: 'Peruvian aquaculture company' },
      { k: 'Period', v: 'Mar 2026 — now' },
      { k: 'Stack', v: 'Next.js · React · PostgreSQL · Vercel' },
    ],
    images: [{ src: '/img/projects/sioa-modules.png', alt: 'SIOA modules: cultivation-line control, production reports and analysis, and multi-concession management (interface in Spanish)', caption: 'Main modules (interface in Spanish)' }],
    problem: { kicker: '01 · The problem', h: 'Scattered data, decisions in the dark', p: 'On a sea farm, field work and sea conditions change every day. When that information lives in notebooks and loose spreadsheets, it is hard to get a clear picture of the operation and react in time.' },
    features: {
      kicker: '02 · What it solves',
      h: 'The whole team looking at the same thing',
      items: [
        { t: 'Field records', d: 'The crew logs its work from the sea, as it happens.' },
        { t: 'Crop tracking', d: 'A clear view of where production stands.' },
        { t: 'Alerts', d: 'Telegram and email notices so the team can act in time.' },
        { t: 'No new habits', d: 'It connects to the spreadsheets the team already used.' },
      ],
    },
    stats: {
      kicker: '03 · In numbers',
      h: 'The operation, measured',
      items: [
        { n: '14', l: 'concessions managed' },
        { n: '130+', l: 'cultivation lines tracked' },
        { n: '2k+', l: 'sea-temperature readings' },
        { n: '8', l: 'months of development' },
      ],
    },
    contribution: {
      kicker: 'My contribution',
      stat: { n: '100%', l: 'of the code, as sole developer' },
      items: [
        { t: '', d: 'Gathered requirements with the field team and turned their daily operation into a system.' },
        { t: '', d: 'Designed and built the whole application: database, backend, interface and deployment.' },
        { t: '', d: 'Integrated Telegram and email alerts, and sync with the team’s spreadsheets.' },
        { t: '', d: 'Keep evolving the system with the client, based on daily use.' },
      ],
    },
  },
  {
    ...casesEs[1],
    kicker: 'Case 02 · Applied AI',
    title: 'A WhatsApp assistant that handles the errands of an apartment building.',
    lead: 'At Domus AI I was part of the team that built the assistant residents use to pay, book and report problems without leaving WhatsApp.',
    meta: [
      { k: 'Role', v: 'Full-stack developer (AI)' },
      { k: 'Company', v: 'Domus AI, building management' },
      { k: 'Period', v: 'Jan 2025 — now' },
      { k: 'Stack', v: 'LangGraph · Python · FastAPI · OpenAI · Bun · React 19' },
    ],
    problem: { kicker: '01 · The problem', h: 'Residents already live on WhatsApp', p: 'Paying the monthly fee, booking a common area or reporting a leak are errands people prefer to handle by chat, at any hour. Handling them one by one takes the management team time and leads to mistakes.' },
    features: {
      kicker: '02 · What the assistant does',
      h: 'Three errands, one conversation',
      items: [
        { t: 'Pay with a photo', d: 'Residents send their receipt and the assistant recognizes and records it.' },
        { t: 'Bookings', d: 'Checks free slots and books common areas in a few messages.' },
        { t: 'Issues', d: 'Reports building problems so management can follow up.' },
      ],
    },
    list: {
      kicker: '03 · Experience',
      h: 'Designed for WhatsApp, not for a website',
      items: [
        'Short replies and buttons to move forward in one tap.',
        'Confirmation before any important action.',
        'A staff member can take over the conversation and hand it back to the assistant when done.',
      ],
    },
    stats: {
      kicker: '04 · My contribution',
      h: 'What I built within the team',
      items: [
        { n: 'End to end', l: 'from the AI assistant to the web app' },
        { n: '2k+', l: 'commits across 4 repositories' },
        { n: '4', l: 'fronts: assistant, backend, web app and bots' },
        { n: '2025', l: 'on the team since January' },
      ],
    },
    contribution: {
      kicker: 'In detail',
      items: [
        { t: 'The assistant', d: 'Built its logic: how it converses, which actions it can run and how it adapts to each country and payment method.' },
        { t: 'Pay with a photo', d: 'Built receipt reading with vision end to end, so payments are recorded without manual work.' },
        { t: 'Bookings, issues and visitors', d: 'Programmed the actions the assistant runs on the platform, with confirmation before every important change.' },
        { t: 'Conversation design', d: 'Buttons, short replies and handing the conversation back from support to the assistant.' },
        { t: 'Quality', d: 'Automated tests that check the assistant’s behavior before every change.' },
        { t: 'Platform', d: 'Bookings, finance and operations modules in the backend and web app, plus bots for new countries.' },
      ],
    },
  },
  {
    ...casesEs[2],
    kicker: 'Case 03 · Own product',
    title: 'Harmony: the point of sale I founded, built and have run since 2024.',
    lead: 'A system for restaurants and stores with several branches: sales, inventory and cash register in the POS, plus a QR menu so customers order from their table.',
    meta: [
      { k: 'Role', v: 'Founder & engineer' },
      { k: 'Period', v: 'Jul 2024 — now' },
      { k: 'Status', v: 'In production' },
      { k: 'Stack', v: 'React 19 · Next.js · Bun · Elysia · PostgreSQL · Supabase Realtime' },
    ],
    images: [
      { src: '/img/projects/harmony-home.png', alt: 'Harmony POS home page with QR orders, synced kitchen and payments (in Spanish)', caption: 'Harmony POS · my-pos-store.vercel.app (in Spanish)' },
      { src: '/img/projects/harmony-terminal.png', alt: 'Sales terminal simulator: quick catalog, order for table 4 and checkout by card, Yape or cash', caption: 'Sales terminal simulator, with demo products' },
    ],
    features: {
      kicker: '02 · What it does',
      h: 'From the dining room to the register, in one system',
      items: [
        { t: 'Point of sale', d: 'Sales, payments and tables, with prices and inventory per branch.' },
        { t: 'QR ordering', d: 'Customers scan their table, order, and the order shows up instantly in the POS.' },
        { t: 'Stock under control', d: 'Warns the cashier when an order clashes with available stock.' },
        { t: 'Loyalty and service', d: 'Points program, call-the-waiter from the QR and a digital complaints book.' },
      ],
    },
    stats: {
      kicker: '01 · In numbers',
      h: 'Real use, every day',
      items: [
        { n: '20k+', l: 'orders processed since December 2024' },
        { n: '~1,000', l: 'orders in the last 30 days' },
        { n: '20', l: 'branches set up' },
        { n: '270+', l: 'orders placed from the table QR' },
      ],
    },
    contribution: {
      kicker: 'My contribution',
      stat: { n: '340+', l: 'commits across the 3 apps' },
      items: [
        { t: '', d: 'Founded the product and built it end to end: the POS, the admin panel and the QR menu.' },
        { t: '', d: 'Led the rewrite to a faster, safer second version with types shared between frontend and backend.' },
        { t: '', d: 'Designed the database and the real-time logic that connects QR orders with the POS and stock.' },
      ],
    },
  },
];

export const cases = { es: casesEs, en: casesEn };

type PosterCard = {
  n: string;
  name: string;
  tag: string;
  dates: string;
  headline: string;
  desc: string;
  stats: Stat[];
  img?: string;
  alt: string;
  href: string;
  stack?: string;
  chat?: { name: string; status: string; receipt: string; in: string; out: string; yes: string; no: string; ok: string };
};

const posterEs = {
  edition: 'Edición 2026 · Ingeniero de Computación y Sistemas',
  live: 'Trujillo, PE · en línea',
  lead: ['Construyo el software que ', 'cada negocio', ' necesita para operar — y ahora con IA.'],
  ctaWork: 'Ver obra ↓',
  breaking: 'Última hora',
  ticker: ['Harmony supera los 20 mil pedidos', 'SIOA gestiona 14 concesiones', 'Asistente de WhatsApp en varios países', 'Ingeniero titulado en 2026'],
  seeCase: 'Ver caso →',
  seeDemo: 'Ver demo ↗',
  classifiedsTitle: 'Clasificados',
  classifieds: 'SE OFRECE ingeniero full stack. Next.js, React 19, Bun, Elysia, PostgreSQL, Prisma, Supabase, LangGraph, OpenAI. Trujillo o remoto.',
  available: 'Disponible para conversar',
  talk: ['Hable', 'mos.'],
  work: 'Obra',
  talkNav: 'Hablemos',
  cards: [
    { n: '01', name: 'Harmony', tag: 'Producto propio', dates: '2024 — hoy', headline: 'Más de 20 mil pedidos procesados', desc: 'POS multi-sucursal con pedidos QR desde la mesa. El pedido llega al punto de venta en tiempo real.', stats: [{ n: '+20 mil', l: 'pedidos' }, { n: '20', l: 'sucursales' }, { n: '~1 000', l: 'pedidos/mes' }], img: '/img/projects/harmony-terminal.png', alt: 'Terminal de venta de Harmony con la orden de una mesa', href: '/es/harmony' },
    { n: '02', name: 'SIOA', tag: 'Cliente · único dev', dates: '2026 — hoy', headline: 'El cultivo del mar, en un solo sistema', desc: 'Gestión productiva para una empresa acuícola: trabajo de campo, condiciones del mar y alertas al equipo.', stats: [{ n: '14', l: 'concesiones' }, { n: '+130', l: 'líneas' }, { n: '+2 mil', l: 'registros' }], img: '/img/projects/sioa-modules.png', alt: 'Módulos de SIOA', href: '/es/sioa' },
    { n: '03', name: 'Domus AI', tag: 'Empleo · IA', dates: '2025 — hoy', headline: 'Pagar la cuota con una foto por WhatsApp', desc: 'Asistente de WhatsApp para residentes: pagos con foto del comprobante, reservas e incidencias.', stats: [{ n: '3', l: 'trámites por chat' }, { n: '+2 mil', l: 'commits' }, { n: 'LATAM', l: 'varios países' }], stack: 'LangGraph · Python · OpenAI visión · Bun · React 19', alt: 'Conversación animada: un residente envía la foto de su comprobante y el asistente registra el pago', href: '/es/domus', chat: { name: 'Asistente del edificio', status: 'en línea', receipt: 'Comprobante', in: 'Ya pagué la cuota', out: 'Recibí tu comprobante de noviembre. ¿Lo registro a tu nombre?', yes: 'Sí, registrar', no: 'No', ok: '✓ Pago registrado. La administración ya lo ve.' } },
    { n: '04', name: 'Voice Quiz', tag: 'Proyecto personal', dates: '2024 — 2025', headline: 'Cuestionarios con IA que se responden hablando', desc: 'Los docentes generan preguntas con IA y los alumnos responden con la voz.', stats: [{ n: 'IA', l: 'genera' }, { n: 'Voz', l: 'responde' }, { n: 'Flask', l: 'backend' }], img: '/img/projects/voice-quiz.png', alt: 'Portada de Voice Quiz', href: 'https://voice-quiz-app.vercel.app/' },
  ] as PosterCard[],
};

const posterEn: typeof posterEs = {
  edition: 'Edition 2026 · Computer & Systems Engineer',
  live: 'Trujillo, PE · online',
  lead: ['I build the software ', 'each business', ' needs to run — now with AI.'],
  ctaWork: 'See work ↓',
  breaking: 'Breaking',
  ticker: ['Harmony passes 20k orders', 'SIOA manages 14 concessions', 'WhatsApp assistant in several countries', 'Engineering degree earned in 2026'],
  seeCase: 'Read case →',
  seeDemo: 'Live demo ↗',
  classifiedsTitle: 'Classifieds',
  classifieds: 'AVAILABLE: full-stack engineer. Next.js, React 19, Bun, Elysia, PostgreSQL, Prisma, Supabase, LangGraph, OpenAI. Trujillo or remote.',
  available: 'Open to talk',
  talk: ["Let's", 'talk.'],
  work: 'Work',
  talkNav: "Let's talk",
  cards: [
    { ...posterEs.cards[0], tag: 'Own product', dates: '2024 — now', headline: '20k+ orders processed', desc: 'Multi-branch POS with QR ordering from the table. Orders reach the point of sale in real time.', stats: [{ n: '20k+', l: 'orders' }, { n: '20', l: 'branches' }, { n: '~1,000', l: 'orders/month' }], alt: 'Harmony sales terminal with a table order', href: '/en/harmony' },
    { ...posterEs.cards[1], tag: 'Client · sole dev', dates: '2026 — now', headline: 'A sea farm, in a single system', desc: 'Production management for an aquaculture company: field work, sea conditions and team alerts.', stats: [{ n: '14', l: 'concessions' }, { n: '130+', l: 'lines' }, { n: '2k+', l: 'readings' }], alt: 'SIOA modules (interface in Spanish)', href: '/en/sioa' },
    { ...posterEs.cards[2], tag: 'Employment · AI', dates: '2025 — now', headline: 'Pay the monthly fee with a photo on WhatsApp', desc: 'WhatsApp assistant for residents: pay with a photo of the receipt, book common areas and report issues.', stats: [{ n: '3', l: 'errands by chat' }, { n: '2k+', l: 'commits' }, { n: 'LATAM', l: 'several countries' }], stack: 'LangGraph · Python · OpenAI vision · Bun · React 19', alt: 'Animated chat: a resident sends a photo of their receipt and the assistant records the payment', href: '/en/domus', chat: { name: 'Building assistant', status: 'online', receipt: 'Receipt', in: 'I paid the fee', out: 'Got your November receipt. Shall I record it under your name?', yes: 'Yes, record it', no: 'No', ok: '✓ Payment recorded. Management can see it now.' } },
    { ...posterEs.cards[3], tag: 'Side project', dates: '2024 — 2025', headline: 'AI quizzes you answer out loud', desc: 'Teachers generate questions with AI and students answer by voice.', stats: [{ n: 'AI', l: 'generates' }, { n: 'Voice', l: 'answers' }, { n: 'Flask', l: 'backend' }], alt: 'Voice Quiz home page (in Spanish)' },
  ],
};

export const poster = { es: posterEs, en: posterEn };
