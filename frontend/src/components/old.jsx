import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  ChevronDown,
  Leaf,
  Database,
  Server,
  Settings,
  Terminal as TerminalIcon,
  Activity,
  Play,
  X,
} from "lucide-react";
import BootScreen from "./components/BootScreen";
import BackgroundEffects from "./components/BackgroundEffects";
import ActuatorDashboard from "./components/ActuatorDashboard";
import Terminal from "./components/Terminal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Übersetzungs-Daten
const TRANSLATIONS = {
  de: {
    nav: ["Über mich", "Arbeit", "Kontakt"],
    navTheme: [
      "Theme: Spring Standard",
      "Theme: Darcula (IDE)",
      "Theme: Terminal Matrix",
    ],
    boot: [
      "Starte PortfolioApplication mit Java 21...",
      'Kein aktives Profil gesetzt, falle zurück auf "default"',
      "Tomcat initialisiert auf Port: 8080 (http)",
      "Ordner node_modules gefunden (1.2GB). Ignoriere Next.js Affinitäten.",
      "Exponiere 1 Endpoint(s) unter '/actuator'",
      "PortfolioApplication gestartet in 2.456 Sekunden",
      "ANWENDUNGSKONTEXT INITIALISIERT. LADE UI...",
    ],
    actuator: {
      status: "Status",
      uptime: "Uptime",
      cpu: "CPU Auslastung",
      mem: "Speicher",
      threads: "Threads",
      active: "Aktiv",
    },
    hero: {
      context: "Kontext: AKTIV",
      subtitle1: "Ich baue skalierbare Enterprise-Systeme,",
      subtitle2: "orchestriere Microservices und verbinde Abhängigkeiten.",
      btnWork: "ARBEIT AUSFÜHREN",
      btnContact: '@POSTMAPPING("/KONTAKT")',
    },
    about: {
      title: "ÜBER_MICH",
      p1: "Hallo! Ich bin John, ein Backend Software Architect aus San Francisco. Mein Spezialgebiet liegt im Entwerfen fehlertoleranter Systeme und robuster APIs für komplexe Unternehmensanwendungen.",
      p2: "Meine Reise begann mit reinen Servlets und JSPs, ging über die Zeiten schwerer XML-Konfigurationen, bis hin in die moderne, auto-konfigurierte Welt von Spring Boot und cloud-nativen Microservices.",
      p3: "Heute liegt mein Fokus auf Domain-Driven Design, dem Bau ereignisgesteuerter (Event-driven) Architekturen und der Optimierung von Datenflüssen bei ",
      ymlTitle: "entwickler",
      ymlEdu: "bildung",
      ymlDeg: "abschluss",
      ymlUni: "universitaet",
      ymlYear: "jahrgang",
      ymlCert: "zertifizierungen",
      ymlLang: "sprachen",
      ymlHint: "Ein kleines Easter Egg für dich!",
      deps: "DEPENDENCY_TREE",
      depsJS: "Psst... Ich mag JavaScript eigentlich auch ganz gerne.",
      history: "AUSFÜHRUNGSVERLAUF",
      exp: [
        {
          company: "Enterprise FinTech",
          role: "Lead Spring Architect",
          period: "2021 — Heute",
          desc: "Architektur und Migration von Legacy Java EE Monolithen zu Spring Boot Microservices. Optimierung der Skalierbarkeit mittels Docker und Kubernetes.",
        },
        {
          company: "DataCorp Solutions",
          role: "Backend Software Engineer",
          period: "2018 — 2021",
          desc: "Entwicklung hochverfügbarer REST APIs (5M+ Requests/Tag). Optimierung komplexer Hibernate-Entities, was die Datenbanklast um 60% reduzierte.",
        },
        {
          company: "StartUp Inc.",
          role: "Junior Java Developer",
          period: "2016 — 2018",
          desc: "Implementierung der Core-Backend-Logik, Konfiguration von Spring-Contexten und Erstellung umfassender JUnit-Testsuiten.",
        },
      ],
    },
    work: {
      title: "Bereitgestellte_Microservices",
      running: "Läuft auf Port 8080",
      execute: "Ausführen",
      response: "Server Antwort",
      registry: "REGISTRY ANSEHEN",
      projects: [
        {
          title: "Zahlungs-Gateway Service",
          desc: "Hochverfügbarer Microservice mit Spring Boot. Fokus auf Idempotenz, Circuit Breaker (Resilience4j) und verteiltes Tracing.",
        },
        {
          title: "Real-time Event Prozessor",
          desc: "Daten-Pipeline mit Spring Cloud Stream und Kafka zur Verarbeitung von Millionen Analytics-Events in Echtzeit.",
        },
        {
          title: "Auth Provider Security",
          desc: "Zentraler OIDC/OAuth2 Authentifizierungs-Server basierend auf Spring Authorization Server zur Absicherung nachgelagerter Microservices.",
        },
        {
          title: "Distributed Cache Manager",
          desc: "Eigener Caching-Layer zur Optimierung komplexer Datenbankabfragen. Reduzierung der API-Antwortzeit von 400ms auf unter 45ms.",
        },
      ],
    },
    contact: {
      p1: "Meine Inbox ist immer offen. Sende mir einen POST-Request, lass uns über System-Architekturen reden oder starte einfach einen Handshake-Protokoll.",
      btn: "EVENT AUSLÖSEN",
    },
    footer: "und vielleicht ein bisschen Node.js",
    terminal: {
      help: "Verfügbare Befehle: help, clear, whoami, ls, sudo",
      whoami: "gast_nutzer",
      sudo: "Nutzer ist nicht in der sudoers-Datei. Dieser Vorfall wird gemeldet.",
      notFound: "Befehl nicht gefunden",
    },
  },
  en: {
    nav: ["About", "Work", "Contact"],
    navTheme: [
      "Theme: Spring Default",
      "Theme: Darcula (IDE)",
      "Theme: Terminal Matrix",
    ],
    boot: [
      "Starting PortfolioApplication using Java 21...",
      'No active profile set, falling back to 1 default profile: "default"',
      "Tomcat initialized with port(s): 8080 (http)",
      "Found node_modules folder (1.2GB). Overlooking Next.js & Express affinities.",
      "Exposing 1 endpoint(s) beneath base path '/actuator'",
      "Started PortfolioApplication in 2.456 seconds",
      "APPLICATION CONTEXT INITIALIZED. MOUNTING UI...",
    ],
    actuator: {
      status: "Status",
      uptime: "Uptime",
      cpu: "CPU Usage",
      mem: "Memory",
      threads: "Threads",
      active: "Live",
    },
    hero: {
      context: "Context: ACTIVE",
      subtitle1: "I build scalable enterprise systems,",
      subtitle2: "orchestrate microservices, and wire dependencies.",
      btnWork: "EXECUTE WORK",
      btnContact: '@POSTMAPPING("/CONTACT")',
    },
    about: {
      title: "ABOUT_ME",
      p1: "Hello! I'm John, a backend software architect based in San Francisco. I specialize in designing fault-tolerant systems and robust APIs that power complex enterprise applications.",
      p2: "My journey started with raw Servlets and JSPs, evolving through the eras of heavy XML configurations, right into the modern, auto-configured world of Spring Boot and cloud-native microservices.",
      p3: "Today, my focus is on Domain-Driven Design, building event-driven architectures, and optimizing data flow at ",
      ymlTitle: "developer",
      ymlEdu: "education",
      ymlDeg: "degree",
      ymlUni: "university",
      ymlYear: "graduated",
      ymlCert: "certifications",
      ymlLang: "locales",
      ymlHint: "A little Easter egg for you!",
      deps: "DEPENDENCY_TREE",
      depsJS: "Shh... I secretly love JavaScript too.",
      history: "EXECUTION_HISTORY",
      exp: [
        {
          company: "Enterprise FinTech",
          role: "Lead Spring Architect",
          period: "2021 — Present",
          desc: "Architected and migrated legacy Java EE monoliths to Spring Boot microservices. Improved system scalability and containerized applications using Docker and Kubernetes.",
        },
        {
          company: "DataCorp Solutions",
          role: "Backend Software Engineer",
          period: "2018 — 2021",
          desc: "Developed highly available REST APIs handling 5M+ daily requests. Optimized complex Hibernate entities and queries, reducing database load by 60%.",
        },
        {
          company: "StartUp Inc.",
          role: "Junior Java Developer",
          period: "2016 — 2018",
          desc: "Implemented core backend business logic, configured Spring contexts, wrote comprehensive JUnit test suites, and managed deployment pipelines.",
        },
      ],
    },
    work: {
      title: "Deployed_Microservices",
      running: "Running on port 8080",
      execute: "Execute",
      response: "Server Response",
      registry: "VIEW REGISTRY",
      projects: [
        {
          title: "Payment Gateway Service",
          desc: "Highly available transactional microservice built with Spring Boot. Implemented idempotency, circuit breakers (Resilience4j), and distributed tracing.",
        },
        {
          title: "Real-time Event Processor",
          desc: "High-throughput data pipeline utilizing Spring Cloud Stream and Kafka to process millions of real-time analytics events with sub-second latency.",
        },
        {
          title: "Auth Provider Security",
          desc: "Centralized OAuth2/OIDC authentication server using Spring Authorization Server. Secures downstream microservices via JWT validation.",
        },
        {
          title: "Distributed Cache Manager",
          desc: "Custom caching layer optimizing complex database queries. Reduced average API response time from 400ms to under 45ms.",
        },
      ],
    },
    contact: {
      p1: "My inbox is always open. Send a POST request, discuss system architecture, or let's just initialize a handshake protocol.",
      btn: "DISPATCH EVENT",
    },
    footer: "and maybe a little Node.js",
    terminal: {
      help: "Available commands: help, clear, whoami, ls, sudo",
      whoami: "guest_user",
      sudo: "user is not in the sudoers file. This incident will be reported.",
      notFound: "command not found",
    },
  },
};

const SWAGGER_BASE = [
  {
    method: "GET",
    path: "/api/v1/payments/status",
    tags: ["Spring Boot", "PostgreSQL", "Redis", "Kafka"],
    color: "bg-blue-500/10 border-blue-500",
    textColor: "text-blue-500",
    bgSolid: "bg-blue-500",
  },
  {
    method: "POST",
    path: "/api/v1/events/process",
    tags: ["Spring Cloud", "Kafka", "WebFlux", "Docker"],
    color: "bg-emerald-500/10 border-emerald-500",
    textColor: "text-emerald-500",
    bgSolid: "bg-emerald-500",
  },
  {
    method: "PUT",
    path: "/oauth2/token",
    tags: ["Spring Security", "OAuth2", "JWT", "JPA"],
    color: "bg-yellow-500/10 border-yellow-500",
    textColor: "text-yellow-500",
    bgSolid: "bg-yellow-500",
  },
  {
    method: "GET",
    path: "/cache/manager/metrics",
    tags: ["Java", "Redis", "Spring AOP", "Micrometer"],
    color: "bg-blue-500/10 border-blue-500",
    textColor: "text-blue-500",
    bgSolid: "bg-blue-500",
  },
];

const App = () => {
  const [language, setLanguage] = useState("de");
  const t = TRANSLATIONS[language];
  const swaggerProjects = SWAGGER_BASE.map((base, i) => ({
    ...base,
    ...t.work.projects[i],
  }));

  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    xNorm: 0,
    yNorm: 0,
  });
  const [isBooting, setIsBooting] = useState(true);

  // Feature States
  const [theme, setTheme] = useState("spring");
  const [actuatorOpen, setActuatorOpen] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState([
    "portfolio@server:~$ System initialized.",
    'Type "help" to see commands.',
  ]);
  const [terminalInput, setTerminalInput] = useState("");
  const [metrics, setMetrics] = useState({ cpu: 2.1, mem: 142, threads: 24 });
  const [uptime, setUptime] = useState(0);
  const [expandedProject, setExpandedProject] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalHistory, terminalOpen]);

  useEffect(() => {
    if (isBooting) return;
    const actInterval = setInterval(() => {
      setUptime((prev) => prev + 1);
      setMetrics({
        cpu: (Math.random() * 8 + 0.5).toFixed(1),
        mem: Math.floor(Math.random() * 40 + 130),
        threads: Math.floor(Math.random() * 10 + 20),
      });
    }, 2000);
    return () => clearInterval(actInterval);
  }, [isBooting]);

  useEffect(() => {
    const bootTimer = setTimeout(() => setIsBooting(false), 3800);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "work", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
        xNorm: (e.clientX / window.innerWidth - 0.5) * 2,
        yNorm: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      clearTimeout(bootTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (isBooting) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isBooting]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
  };

  const handleTerminalSubmit = (e) => {
    if (e.key === "Enter") {
      const cmd = terminalInput.trim().toLowerCase();
      let response = "";

      if (cmd === "help") response = t.terminal.help;
      else if (cmd === "clear") {
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      } else if (cmd === "whoami") response = t.terminal.whoami;
      else if (cmd === "ls")
        response =
          "drwxr-xr-x  home\ndrwxr-xr-x  about\ndrwxr-xr-x  work\ndrwxr-xr-x  contact\n-rw-r--r--  application.yml";
      else if (cmd === "sudo") response = t.terminal.sudo;
      else if (cmd === "") response = "";
      else response = `bash: ${cmd}: ${t.terminal.notFound}`;

      setTerminalHistory((prev) => [
        ...prev,
        `portfolio@server:~$ ${cmd}`,
        ...(response ? response.split("\n") : []),
      ]);
      setTerminalInput("");
    }
  };

  const executeApi = (id) => {
    setApiResponse(null);
    setTimeout(() => {
      setApiResponse({
        status: 200,
        data: {
          message: language === "de" ? "Erfolg" : "Success",
          timestamp: new Date().toISOString(),
          transactionId: "txn_" + Math.random().toString(36).substr(2, 9),
        },
      });
    }, 600);
  };

  const formatUptime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500 selection:text-black overflow-hidden relative"
      data-theme={theme !== "spring" ? theme : undefined}
    >
      <style>
        {`
          /* Basis-Animationen */
          @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
          .animate-marquee { display: inline-block; white-space: nowrap; animation: marquee 30s linear infinite; }
          @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
          .animate-float { animation: float 7s ease-in-out infinite; }
          .animate-float-delayed { animation: float 8s ease-in-out 3s infinite; }
          .animate-float-slow { animation: float 10s ease-in-out 1s infinite; }
          @keyframes type { from { width: 0; } }
          .typing-text { display: inline-block; overflow: hidden; white-space: nowrap; border-right: 3px solid #10b981; width: 35ch; animation: type 2s steps(35, end), blink .75s step-end infinite; }
          @keyframes blink { from, to { border-color: transparent } 50% { border-color: #10b981; } }
          .glitch-hover:hover { animation: glitch-skew 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite; color: #fff; text-shadow: 2px 0px #10b981, -2px 0px #0ea5e9; }
          @keyframes glitch-skew { 0%, 100% { transform: skew(0deg); } 20% { transform: skew(-10deg); } 40% { transform: skew(10deg); } 60% { transform: skew(-5deg); } 80% { transform: skew(5deg); } }
          .noise-bg { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E"); }
          @keyframes grid-move { 0% { transform: translateY(0); } 100% { transform: translateY(4rem); } }
          .animate-grid-move { animation: grid-move 3s linear infinite; }
          @keyframes bootText { 0% { opacity: 0; } 100% { opacity: 1; } }
          @keyframes slide-sawtooth-right { 0% { background-position: 0 0; } 100% { background-position: 80px 0; } }
          @keyframes slide-sawtooth-left { 0% { background-position: 80px 0; } 100% { background-position: 0 0; } }
          .bg-sawtooth-black { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon fill='%23000000' points='0,0 100,0 100,50 50,100 0,50'/%3E%3C/svg%3E"); background-size: 80px 100%; }
          .bg-sawtooth-white { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon fill='%23ffffff' points='0,0 100,0 100,50 50,100 0,50'/%3E%3C/svg%3E"); background-size: 80px 100%; }
          .animate-sawtooth-right { animation: slide-sawtooth-right 2s linear infinite; }
          .animate-sawtooth-left { animation: slide-sawtooth-left 2s linear infinite; }

          /* DARCULA THEME OVERRIDES */
          [data-theme="darcula"] { background-color: #2b2b2b !important; color: #a9b7c6 !important; }
          [data-theme="darcula"] .bg-black { background-color: #2b2b2b !important; }
          [data-theme="darcula"] .text-white { color: #a9b7c6 !important; }
          [data-theme="darcula"] .text-emerald-500 { color: #cc7832 !important; }
          [data-theme="darcula"] .bg-emerald-500 { background-color: #cc7832 !important; color: #2b2b2b !important; }
          [data-theme="darcula"] .border-emerald-500 { border-color: #cc7832 !important; }
          [data-theme="darcula"] .text-emerald-400 { color: #e69138 !important; }
          [data-theme="darcula"] .bg-emerald-950\\/50 { background-color: rgba(60, 63, 65, 0.8) !important; }
          [data-theme="darcula"] .border-emerald-900\\/50 { border-color: #555 !important; }
          [data-theme="darcula"] .typing-text { border-right-color: #cc7832; }
          [data-theme="darcula"] .bg-white { background-color: #3c3f41 !important; color: #a9b7c6 !important; }
          [data-theme="darcula"] .bg-sawtooth-black { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon fill='%232b2b2b' points='0,0 100,0 100,50 50,100 0,50'/%3E%3C/svg%3E"); }
          [data-theme="darcula"] .bg-sawtooth-white { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon fill='%233c3f41' points='0,0 100,0 100,50 50,100 0,50'/%3E%3C/svg%3E"); }

          /* MATRIX THEME OVERRIDES */
          [data-theme="matrix"] { background-color: #000000 !important; color: #00ff41 !important; text-shadow: 0 0 2px rgba(0,255,65,0.4); }
          [data-theme="matrix"] .bg-black { background-color: #000000 !important; }
          [data-theme="matrix"] .text-white { color: #00ff41 !important; }
          [data-theme="matrix"] .text-emerald-500 { color: #00ff41 !important; text-shadow: 0 0 8px #00ff41; }
          [data-theme="matrix"] .bg-emerald-500 { background-color: #00ff41 !important; color: black !important; box-shadow: 0 0 10px #00ff41; }
          [data-theme="matrix"] .border-emerald-500 { border-color: #00ff41 !important; box-shadow: 0 0 5px #00ff41; }
          [data-theme="matrix"] .text-gray-400 { color: #008f11 !important; }
          [data-theme="matrix"] .bg-white { background-color: #001100 !important; color: #00ff41 !important; border-top: 1px solid #00ff41; border-bottom: 1px solid #00ff41; }
          [data-theme="matrix"] .typing-text { border-right-color: #00ff41; }
          [data-theme="matrix"] .bg-sawtooth-black, [data-theme="matrix"] .bg-sawtooth-white { display: none; }
        `}
      </style>

      {/* Spring Boot Boot-Sequenz */}
      {isBooting && <BootScreen t={t} />}

      {/* Maus-Spotlight Effekt */}
      {/* Hintergrund-Rauschen & Grid */}
      <BackgroundEffects mousePosition={mousePosition} />

      {/* Live Actuator Dashboard (Oben Rechts) */}
      <ActuatorDashboard
        actuatorOpen={actuatorOpen}
        setActuatorOpen={setActuatorOpen}
        metrics={metrics}
        uptime={formatUptime(uptime)}
        t={t}
      />

      {/* Interaktives Terminal (Unten Rechts) */}
      {/* Terminal Öffnen Button */}
      <Terminal
        terminalOpen={terminalOpen}
        setTerminalOpen={setTerminalOpen}
        terminalHistory={terminalHistory}
        terminalInput={terminalInput}
        setTerminalInput={setTerminalInput}
        handleTerminalSubmit={handleTerminalSubmit}
      />

      {/* Navigation */}
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        scrollTo={scrollTo}
        t={t}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Hauptinhalt */}
      <main className="relative z-10">
        {/* Hero Sektion */}
        <Hero
          mousePosition={mousePosition}
          t={t}
          scrollTo={scrollTo}
          language={language}
        />

        {/* Über Mich Sektion */}
        <section
          id="about"
          className="py-24 md:py-32 px-6 max-w-6xl mx-auto border-t border-emerald-900/30"
        >
          <div className="grid md:grid-cols-2 gap-16 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                @COMPONENT
                <br />
                <span className="text-emerald-500">("{t.about.title}")</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>
                  {t.about.p3}
                  <span className="text-white border-b border-emerald-500">
                    Enterprise FinTech
                  </span>
                  .
                </p>
              </div>

              {/* application.yml Block */}
              <div
                className="mt-16 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out"
                style={{ transitionDelay: "300ms" }}
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white">
                  <TerminalIcon size={24} className="text-emerald-500" />{" "}
                  APPLICATION.YML
                </h3>
                <div className="bg-[#0a0a0a] border border-emerald-900/50 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(16,185,129,0.1)] group">
                  <div className="bg-emerald-950/30 border-b border-emerald-900/50 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></span>
                    </div>
                    <span className="ml-3 text-xs font-mono text-emerald-600/70">
                      src/main/resources/application.yml
                    </span>
                  </div>
                  <div className="p-5 md:p-6 font-mono text-sm leading-relaxed overflow-x-auto relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
                    <pre className="text-emerald-400/80">
                      <span className="text-emerald-300">
                        {t.about.ymlTitle}:
                      </span>
                      <span className="text-emerald-300">
                        {t.about.ymlEdu}:
                      </span>
                      <span className="text-emerald-300">
                        {t.about.ymlDeg}:
                      </span>{" "}
                      <span className="text-yellow-200/90">
                        "B.S. Computer Science"
                      </span>
                      <span className="text-emerald-300">
                        {t.about.ymlUni}:
                      </span>{" "}
                      <span className="text-yellow-200/90">
                        "Tech University"
                      </span>
                      <span className="text-emerald-300">
                        {t.about.ymlYear}:
                      </span>{" "}
                      <span className="text-purple-400">2016</span>
                      <span className="text-emerald-300">
                        {t.about.ymlCert}:
                      </span>
                      <span className="text-emerald-600">-</span>{" "}
                      <span className="text-yellow-200/90">
                        "Spring Professional Certified"
                      </span>
                      <span className="text-emerald-600">-</span>{" "}
                      <span className="text-yellow-200/90">
                        "AWS Certified Solutions Architect"
                      </span>
                      <span className="text-emerald-300">
                        {t.about.ymlLang}:
                      </span>
                      <span className="text-emerald-600">-</span>{" "}
                      <span className="text-yellow-200/90">"en_US"</span>
                      <span className="text-emerald-600">-</span>{" "}
                      <span className="text-yellow-200/90">"de_DE"</span>{" "}
                      <span className="text-gray-500 text-xs ml-2 md:inline block mt-1 md:mt-0">
                        # {t.about.ymlHint}
                      </span>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Settings
                  size={24}
                  className="text-emerald-500 animate-[spin_6s_linear_infinite]"
                />{" "}
                {t.about.deps}
              </h3>

              {/* Dependency Tree Darstellung */}
              <div className="bg-black/50 border border-emerald-900/50 p-6 rounded relative group/deps">
                <ul className="font-mono text-sm space-y-3 text-gray-400 relative">
                  <li className="text-white flex items-center gap-2">
                    <Leaf size={14} className="text-emerald-500" />{" "}
                    com.portfolio.app
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-2 before:top-[-10px] before:bottom-0 before:w-px before:bg-emerald-900/50">
                    <div className="relative before:content-[''] before:absolute before:-left-4 before:top-3 before:w-4 before:h-px before:bg-emerald-900/50 flex items-center gap-2 text-white">
                      <span className="text-emerald-500">▼</span> core
                    </div>
                    <ul className="pl-6 mt-3 space-y-3 relative before:content-[''] before:absolute before:left-2 before:top-[-10px] before:bottom-0 before:w-px before:bg-emerald-900/50">
                      <li className="relative before:content-[''] before:absolute before:-left-4 before:top-3 before:w-4 before:h-px before:bg-emerald-900/50 hover:text-emerald-400 cursor-default transition-colors">
                        Java 21
                      </li>
                      <li className="relative before:content-[''] before:absolute before:-left-4 before:top-3 before:w-4 before:h-px before:bg-emerald-900/50 hover:text-emerald-400 cursor-default transition-colors">
                        Spring Boot 3.2
                      </li>
                    </ul>
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-2 before:top-[-10px] before:bottom-0 before:w-px before:bg-emerald-900/50">
                    <div className="relative before:content-[''] before:absolute before:-left-4 before:top-3 before:w-4 before:h-px before:bg-emerald-900/50 flex items-center gap-2 text-white">
                      <span className="text-emerald-500">▼</span> data
                    </div>
                    <ul className="pl-6 mt-3 space-y-3 relative before:content-[''] before:absolute before:left-2 before:top-[-10px] before:bottom-4 before:w-px before:bg-emerald-900/50">
                      <li className="relative before:content-[''] before:absolute before:-left-4 before:top-3 before:w-4 before:h-px before:bg-emerald-900/50 hover:text-emerald-400 cursor-default transition-colors">
                        Hibernate / Spring Data JPA
                      </li>
                      <li className="relative before:content-[''] before:absolute before:-left-4 before:top-3 before:w-4 before:h-px before:bg-emerald-900/50 hover:text-emerald-400 cursor-default transition-colors">
                        PostgreSQL
                      </li>
                      <li className="relative before:content-[''] before:absolute before:-left-4 before:top-3 before:w-4 before:h-px before:bg-emerald-900/50 hover:text-emerald-400 cursor-default transition-colors">
                        Redis
                      </li>
                    </ul>
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-2 before:top-[-10px] before:h-6 before:w-px before:bg-emerald-900/50">
                    <div className="relative before:content-[''] before:absolute before:-left-4 before:top-3 before:w-4 before:h-px before:bg-emerald-900/50 flex items-center gap-2 text-white">
                      <span className="text-emerald-500">▶</span> infrastructure{" "}
                      <span className="text-gray-500 text-xs ml-2">
                        (Docker, K8s, Kafka, AWS)
                      </span>
                    </div>
                  </li>
                </ul>

                {/* JS Stack Easter Egg */}
                <div className="w-full mt-6 h-8 overflow-hidden">
                  <div className="transform translate-y-8 group-hover/deps:translate-y-0 transition-transform duration-300 flex items-center gap-2 text-xs font-mono text-emerald-700">
                    <span className="text-yellow-600">{"/* "}</span>
                    <span
                      className="hover:text-yellow-500 cursor-help transition-colors"
                      title={t.about.depsJS}
                    >
                      npm install express react react-dom
                    </span>
                    <span className="text-yellow-600">{" */"}</span>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                  <Server size={24} className="text-emerald-500" />{" "}
                  {t.about.history}
                </h3>
                <div className="space-y-10">
                  {t.about.exp.map((exp, index) => (
                    <div
                      key={index}
                      className="relative pl-6 border-l border-emerald-900/50 group hover:border-emerald-500 transition-colors reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out"
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className="absolute w-3 h-3 bg-black border-2 border-emerald-900 group-hover:border-emerald-500 rounded-full -left-[7px] top-1.5 transition-colors group-hover:bg-emerald-500 group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.8)] duration-300"></div>
                      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                        <h4 className="text-xl font-medium text-white">
                          {exp.role}
                        </h4>
                        <span className="text-sm font-mono text-emerald-500/70 mt-1 md:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <h5 className="text-md text-emerald-400 mb-4">
                        {exp.company}
                      </h5>
                      <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animierter Übergang: Schwarz zu Weiß */}
        <div className="w-full h-12 md:h-20 bg-white relative z-20 pointer-events-none">
          <div className="absolute inset-0 bg-sawtooth-black animate-sawtooth-right"></div>
        </div>

        {/* Swagger UI Arbeits-Sektion */}
        <section
          id="work"
          className="pt-8 pb-24 md:pt-12 md:pb-32 bg-white text-black relative z-20"
        >
          <div className="px-6 max-w-5xl mx-auto">
            <div className="flex justify-between items-end mb-12 md:mb-16 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
              <div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-2">
                  {t.work.title}
                </h2>
                <div className="group/port inline-block cursor-default">
                  <p className="text-gray-500 font-mono text-sm uppercase tracking-widest group-hover/port:hidden">
                    // {t.work.running}
                  </p>
                  <p className="text-black font-mono text-sm uppercase tracking-widest hidden group-hover/port:block bg-yellow-300 px-2 -ml-2">
                    ▲ npx create-next-app@latest
                  </p>
                </div>
              </div>
            </div>

            {/* Swagger UI Blöcke */}
            <div className="space-y-4 font-mono text-sm">
              <div className="mb-4 text-gray-500 border-b border-gray-300 pb-2 flex items-center justify-between">
                <span>Core Services API v1.0.0</span>
                <span className="bg-emerald-100 text-emerald-800 px-2 rounded-full text-xs font-bold">
                  OAS3
                </span>
              </div>

              {swaggerProjects.map((project, index) => (
                <div
                  key={index}
                  className={`border ${project.color} rounded overflow-hidden reveal-on-scroll opacity-0 translate-y-12 transition-all duration-500 ease-out`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* API Header */}
                  <div
                    className={`p-3 md:p-4 flex flex-col md:flex-row md:items-center cursor-pointer hover:bg-black/5 transition-colors ${expandedProject === index ? "bg-black/5 border-b " + project.color : ""}`}
                    onClick={() => {
                      setExpandedProject(
                        expandedProject === index ? null : index,
                      );
                      setApiResponse(null);
                    }}
                  >
                    <div className="flex items-center gap-3 flex-grow">
                      <span
                        className={`${project.bgSolid} text-white font-bold px-4 py-1.5 rounded-sm w-20 text-center uppercase tracking-widest`}
                      >
                        {project.method}
                      </span>
                      <span
                        className={`font-bold ${expandedProject === index ? "text-black" : "text-gray-700"} text-base break-all`}
                      >
                        {project.path}
                      </span>
                    </div>
                    <span className="text-gray-500 hidden md:block w-1/3 text-right truncate pl-4">
                      {project.title}
                    </span>
                  </div>

                  {/* API Inhalt (Ausgeklappt) */}
                  {expandedProject === index && (
                    <div className="p-4 md:p-6 bg-white relative">
                      <div className="mb-6 flex flex-col md:flex-row gap-6">
                        <div className="flex-grow">
                          <h4 className="font-bold text-gray-800 mb-2 font-sans text-lg">
                            {project.title}
                          </h4>
                          <p className="text-gray-600 font-sans leading-relaxed mb-6">
                            {project.desc}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="border border-gray-300 text-gray-600 px-2 py-1 text-xs rounded-sm bg-gray-50"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Execute Button */}
                        <div className="md:w-48 flex-shrink-0">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              executeApi(index);
                            }}
                            className={`w-full py-3 px-4 flex items-center justify-center gap-2 font-bold text-white transition-all active:scale-95 ${project.bgSolid} hover:opacity-90 shadow-lg`}
                          >
                            <Play size={16} fill="currentColor" />{" "}
                            {t.work.execute}
                          </button>
                        </div>
                      </div>

                      {/* Simulierte API Antwort */}
                      {apiResponse && (
                        <div className="mt-6 border border-gray-200 rounded-sm">
                          <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 font-bold text-gray-700 flex justify-between">
                            <span>{t.work.response}</span>
                            <span className="text-emerald-600">200 OK</span>
                          </div>
                          <div className="bg-[#1e1e1e] p-4 text-emerald-400 overflow-x-auto text-xs whitespace-pre">
                            {JSON.stringify(apiResponse, null, 2)}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center md:hidden">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm border-2 border-black px-8 py-4 font-bold hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-colors"
              >
                [ {t.work.registry} ] <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Animierter Übergang: Weiß zu Schwarz */}
        <div className="w-full h-12 md:h-20 bg-black relative z-20 pointer-events-none">
          <div className="absolute inset-0 bg-sawtooth-white animate-sawtooth-left"></div>
        </div>

        {/* Kontakt Sektion */}
        <section
          id="contact"
          className="pt-16 pb-32 md:pt-24 md:pb-48 px-6 max-w-4xl mx-auto text-center relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl opacity-5 pointer-events-none text-emerald-500">
            <Leaf size="100%" strokeWidth={0.5} />
          </div>
          <div className="relative z-10 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <div className="group/status inline-block cursor-default">
              <p className="font-mono text-emerald-500 mb-6 tracking-widest uppercase text-sm group-hover/status:hidden">
                // 200 OK
              </p>
              <p className="font-mono text-yellow-500 mb-6 tracking-widest text-sm hidden group-hover/status:block">
                res.status(200).json({`{ message: "OK" }`});
              </p>
            </div>

            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase glitch-hover">
              @ExceptionHandler
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.contact.p1}
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-4 bg-emerald-500 text-black px-12 py-6 text-xl font-bold hover:bg-white transition-all hover:scale-105 active:scale-95 group shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              {t.contact.btn}{" "}
              <ArrowUpRight
                size={24}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-900/30 py-8 text-center bg-black relative z-10">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com"
            aria-label="Github Profil"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-emerald-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn Profil"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-emerald-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:hello@example.com"
            aria-label="E-Mail senden"
            className="text-gray-500 hover:text-emerald-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="text-gray-600 text-sm font-mono group cursor-default">
          &copy; {new Date().getFullYear()} John Doe. Powered by React Context.
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-600 ml-2">
            ({t.footer})
          </span>
        </p>
      </footer>
    </div>
  );
};

export default App;
