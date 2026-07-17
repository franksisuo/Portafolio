import React from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Database, Mail, Map, Maximize2, Server, Terminal, Wrench, X } from "lucide-react";
import "./styles.css";

const asset = (name) => `/assets/${name}`;
const devicon = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const viewport = { once: true, amount: 0.22 };
const travelViewport = { once: true, amount: 0.08 };

const heroTextIn = {
  hidden: { opacity: 0, x: "-120vw", scale: 0.62, filter: "blur(16px)" },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.05,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.12,
    },
  },
};

const heroImageIn = {
  hidden: { opacity: 0, x: "120vw", scale: 0.62, filter: "blur(16px)" },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: 0.08 },
  },
};

function AmbientBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const planetY = useTransform(scrollYProgress, [0, 1], ["22rem", "-5rem"]);
  const planetScale = useTransform(scrollYProgress, [0, 1], [0.74, 0.98]);
  const sparkles = [
    { left: "8%", top: "18%", delay: "0s" },
    { left: "15%", top: "43%", delay: "2.5s" },
    { left: "22%", top: "68%", delay: "1.4s" },
    { left: "36%", top: "12%", delay: "3.2s" },
    { left: "48%", top: "26%", delay: "0.8s" },
    { left: "52%", top: "58%", delay: "3.8s" },
    { left: "72%", top: "14%", delay: "2.1s" },
    { left: "78%", top: "38%", delay: "0.4s" },
    { left: "86%", top: "58%", delay: "1.1s" },
    { left: "63%", top: "82%", delay: "2.8s" },
    { left: "91%", top: "78%", delay: "4.2s" },
  ];
  const comets = [
    { left: "-14%", top: "18%", delay: "1.8s", duration: "13s" },
    { left: "-18%", top: "46%", delay: "9.5s", duration: "15s" },
  ];

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <div className="ambient-grid" aria-hidden="true" />
      <motion.div
        className="planet-horizon"
        style={{ y: planetY, scale: planetScale }}
        aria-hidden="true"
      />
      <motion.div className="ambient-orbit ambient-orbit-one" style={{ y }} aria-hidden="true" />
      <motion.div className="ambient-orbit ambient-orbit-two" style={{ y }} aria-hidden="true" />
      <div className="sparkle-layer" aria-hidden="true">
        {sparkles.map((sparkle, index) => (
          <span
            key={index}
            className="sparkle"
            style={{ left: sparkle.left, top: sparkle.top, animationDelay: sparkle.delay }}
          />
        ))}
        {comets.map((comet, index) => (
          <span
            key={`comet-${index}`}
            className="comet"
            style={{
              left: comet.left,
              top: comet.top,
              animationDelay: comet.delay,
              animationDuration: comet.duration,
            }}
          />
        ))}
      </div>
    </>
  );
}

const metrics = [
  { label: "Sistemas construidos", value: "3" },
  { label: "Especialidad", value: "Full Stack, scraping y dashboards" },
  { label: "Automatizacion", value: "Procesos, datos y reportes operativos" },
  { label: "Enfoque", value: "Soluciones internas para operaciones reales" },
];

const projects = [
  {
    title: "Web Scraping",
    eyebrow: "Python / FastAPI / PostgreSQL",
    media: asset("web-scraping-demo.gif"),
    mediaAlt: "Demo del sistema de web scraping",
    description:
      "Sistema de scraping y comparacion de precios para ecommerces, con dashboard web, ejecucion en cola, historial, filtros por sucursal, exportacion a Excel/PDF y monitoreo de estabilidad.",
    features: [
      "Scrapers modulares para multiples tiendas.",
      "Worker para procesar sesiones sin bloquear la API.",
      "Persistencia en base de datos con historial de precios.",
      "Reportes comparativos y pruebas automatizadas.",
    ],
    tags: ["Python", "FastAPI", "Playwright", "PostgreSQL", "Pytest"],
  },
  {
    title: "Sistema GPS",
    eyebrow: "PHP / MariaDB / Leaflet",
    media: asset("gps-demo.gif"),
    mediaAlt: "Demo del sistema GPS con mapa, rutas y gestion de pedidos",
    description:
      "Plataforma web para monitorear flota y despachos en tiempo real, administrar vehiculos, conductores, rutas, pedidos e historial usando un mapa interactivo y una API propia.",
    features: [
      "Mapa en vivo con Leaflet y OpenStreetMap.",
      "Gestion de rutas, despachos y estados de flota.",
      "Autenticacion, roles y registros de auditoria.",
      "Base de datos MariaDB mediante PDO.",
    ],
    tags: ["PHP", "JavaScript", "MariaDB", "Leaflet", "OSRM"],
  },
  {
    title: "La Casa de Habsburgo",
    eyebrow: "React / TypeScript / Supabase",
    media: asset("la-casa-de-habsburgo.png"),
    mediaAlt: "Pagina principal de La Casa de Habsburgo",
    url: "https://www.lacasadehabsburgo.cl/",
    description:
      "Ecommerce de moda circular premium para presentar colecciones, productos, categorias y contenido de marca con una experiencia visual limpia y orientada a conversion.",
    features: [
      "Catalogo organizado por categorias y colecciones.",
      "Experiencia responsive para vitrina comercial.",
      "Integracion con servicios externos para productos y cuenta de usuario.",
      "Ajustes aplicados sobre base generada con Lovable.",
    ],
    tags: ["React", "TypeScript", "Vite", "Supabase", "Shopify", "Zustand", "TanStack Router"],
  },
];

const techGroups = [
  {
    title: "Lenguajes",
    items: [
      { name: "Python", icon: devicon("python/python-original.svg") },
      { name: "PHP", icon: devicon("php/php-original.svg") },
      { name: "JavaScript", icon: devicon("javascript/javascript-original.svg") },
      { name: "Kotlin", icon: devicon("kotlin/kotlin-original.svg") },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "FastAPI", icon: devicon("fastapi/fastapi-original.svg") },
      { name: "Django", icon: devicon("django/django-plain.svg") },
      { name: "Node.js", icon: devicon("nodejs/nodejs-original.svg") },
      { name: "React", icon: devicon("react/react-original.svg") },
      { name: "Leaflet", icon: asset("leaflet-icon.png") },
    ],
  },
  {
    title: "Datos",
    items: [
      { name: "PostgreSQL", icon: devicon("postgresql/postgresql-original.svg") },
      { name: "MariaDB", icon: devicon("mariadb/mariadb-original.svg") },
      { name: "MySQL", icon: devicon("mysql/mysql-original.svg") },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: devicon("html5/html5-original.svg") },
      { name: "CSS", icon: devicon("css3/css3-original.svg") },
      { name: "OSRM", initials: "MAP" },
    ],
  },
];

function Header() {
  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="nav" aria-label="Principal">
        <a className="brand" href="#inicio">Portafolio</a>
        <div className="nav-links">
          <a href="#proyectos">Proyectos</a>
          <a href="#stack">Stack</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>
    </motion.header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <motion.div
        className="hero-copy"
        variants={heroTextIn}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={fadeUp}>Frank González</motion.h1>
        <motion.p className="hero-text hero-specialty" variants={fadeUp}>
          Desarrollador Full Stack enfocado en <span>sistemas web</span>, <span>web scraping</span>,
          <span> dashboards</span>, <span>APIs REST</span> y <span>automatizacion de procesos</span>.
          Construyo herramientas practicas para operaciones reales.
        </motion.p>
        <motion.div className="hero-meta" variants={fadeUp}>
          <span>Talca, Chile</span>
          <span>Ingles B1</span>
        </motion.div>
        <motion.div className="hero-actions" variants={fadeUp}>
          <a className="button primary" href="#proyectos">
            Ver proyectos
            <ArrowUpRight size={18} />
          </a>
          <a className="button secondary" href="#contacto">
            Contactar
            <Mail size={18} />
          </a>
        </motion.div>
      </motion.div>
      <motion.aside
        className="hero-panel hero-visual-panel"
        aria-label="Resumen profesional"
        variants={heroImageIn}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-avatar-card">
          <img src={asset("profile-pixel.png")} alt="Avatar pixel-art de Frank" />
          <div className="hero-avatar-caption">
            <strong>Full Stack Developer</strong>
          </div>
        </div>
      </motion.aside>
    </section>
  );
}

function Intro() {
  return (
    <motion.section
      className="section intro"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={travelViewport}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div>
        <p className="eyebrow">Perfil</p>
        <h2>Desarrollador orientado a sistemas reales y automatizacion.</h2>
      </div>
      <p>
        Creo herramientas que ordenan informacion, reducen trabajo manual y ayudan a tomar mejores
        decisiones. Trabajo desde la idea hasta una version usable: estructura de datos, backend,
        interfaz, reportes, pruebas y ajustes.
      </p>
    </motion.section>
  );
}

function ProjectCard({ project, reverse, onExpand }) {
  return (
    <motion.article
      className={`project ${reverse ? "reverse" : ""}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={travelViewport}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="project-media"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {project.media ? (
          <>
            <button
              className="media-expand"
              type="button"
              aria-label={`Expandir demo de ${project.title}`}
              onClick={() => onExpand(project)}
            >
              <Maximize2 size={18} />
            </button>
            <img src={project.media} alt={project.mediaAlt} />
          </>
        ) : (
          <div className="media-placeholder">
            <Map size={34} />
            <span>Demo pendiente: mapa en vivo con rutas, pedidos y vehiculos.</span>
          </div>
        )}
      </motion.div>
      <div className="project-copy">
        <div className="project-title">
          <p className="eyebrow">{project.eyebrow}</p>
          <h3>{project.title}</h3>
        </div>
        <p>{project.description}</p>
        <ul className="feature-list">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {project.url ? (
          <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
            Ver sitio
            <ArrowUpRight size={17} />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

function Projects({ onExpand }) {
  return (
    <section id="proyectos" className="section projects">
      <motion.div
        className="section-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={travelViewport}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Proyectos</p>
        <h2>Sistemas completos, no solo pantallas.</h2>
      </motion.div>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          reverse={index % 2 === 1}
          onExpand={onExpand}
        />
      ))}
    </section>
  );
}

function MediaLightbox({ media, onClose }) {
  React.useEffect(() => {
    if (!media) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [media, onClose]);

  if (!media) return null;

  return (
    <motion.div
      className="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button className="lightbox-close" type="button" aria-label="Cerrar demo" onClick={onClose}>
        <X size={22} />
      </button>
      <motion.div
        className="lightbox-frame"
        initial={{ opacity: 0, scale: 0.94, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <img src={media.media} alt={media.mediaAlt} />
      </motion.div>
    </motion.div>
  );
}

function Stack() {
  const icons = [Terminal, Server, Database, Wrench];

  return (
    <section id="stack" className="section stack-section">
      <motion.div
        className="section-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={travelViewport}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Stack</p>
        <h2>Tecnologias que uso para construir sistemas.</h2>
      </motion.div>
      <motion.div
        className="stack-grid"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={travelViewport}
      >
        {techGroups.map((group, index) => {
          const Icon = icons[index] ?? Wrench;
          return (
            <motion.div
              className="tech-card"
              key={group.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="tech-card-title">
                <Icon size={19} />
                <h3>{group.title}</h3>
              </div>
              <div className="tech-items">
                {group.items.map((item) => (
                  <span key={item.name}>
                    {item.icon ? <img src={item.icon} alt="" /> : <b>{item.initials}</b>}
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

function Roadmap() {
  return (
    <motion.section
      className="section roadmap"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={travelViewport}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div>
        <p className="eyebrow">En desarrollo</p>
        <h2>Proximos proyectos</h2>
      </div>
      <p>
        Seguire sumando herramientas de automatizacion, integraciones con APIs, dashboards de
        negocio y sistemas internos para operaciones reales.
      </p>
    </motion.section>
  );
}

function Footer() {
  return (
    <motion.footer
      id="contacto"
      className="footer"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={travelViewport}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div>
        <p className="eyebrow">Contacto</p>
        <h2>Disponible para crear sistemas web, automatizaciones y dashboards operativos.</h2>
      </div>
      <a className="button primary" href="mailto:franksisuo@outlook.es">
        franksisuo@outlook.es
        <Mail size={18} />
      </a>
    </motion.footer>
  );
}

function App() {
  const [expandedMedia, setExpandedMedia] = React.useState(null);

  return (
    <>
      <AmbientBackground />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Projects onExpand={setExpandedMedia} />
        <Stack />
        <Roadmap />
      </main>
      <Footer />
      <MediaLightbox media={expandedMedia} onClose={() => setExpandedMedia(null)} />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
