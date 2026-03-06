import React, { useState, useEffect, useMemo } from "react";
import BootScreen from "./components/effects/BootScreen";
import BackgroundEffects from "./components/effects/BackgroundEffects";
import ActuatorDashboard from "./components/ActuatorDashboard";
import Terminal from "./components/Terminal";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import About from "./components/about/About";
import WorkSection from "./components/work/WorkSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/layout/Footer";
import { SWAGGER_BASE } from "./constants/swagger";
import de from "./i18n/de";
import en from "./i18n/en";

/**
 * 
 *HOOKs
 */

import { useInteractiveScroll } from "./hooks/useInteractiveScroll";
import { useActuator } from "./hooks/useActuator";
import { useTerminal } from "./hooks/useTerminal";


const TRANSLATIONS = { de, en };

const App = () => {
   const [language, setLanguage] = useState("en");
  const t = TRANSLATIONS[language];

  const [isBooting, setIsBooting] = useState(true);
  const [theme, setTheme] = useState("spring");
  const [actuatorOpen, setActuatorOpen] = useState(true);
  const [expandedProject, setExpandedProject] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  const swaggerProjects = useMemo(() => SWAGGER_BASE.map((base,i)=>({...base, ...t.work.projects[i]})), [t.work.projects]);

  const { scrolled, activeSection, mousePosition } = useInteractiveScroll();
  const { metrics, uptime, formatUptime } = useActuator(isBooting);
  const { terminalOpen, setTerminalOpen, terminalHistory, terminalInput, setTerminalInput, handleTerminalSubmit } = useTerminal(t);

  useEffect(() => {
    const timer = setTimeout(() => setIsBooting(false), 3800);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if(el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  const executeApi = () => {
    setApiResponse(null);
    setTimeout(() => setApiResponse({
      status:200,
      data:{
        message: language==="de"?"Erfolg":"Success",
        timestamp: new Date().toISOString(),
        transactionId:"txn_"+Math.random().toString(36).substr(2,9)
      }
    }), 600);
  };

  

  return (
    <div
      className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500 selection:text-black overflow-hidden relative"
      data-theme={theme !== "spring" ? theme : undefined}
    >
      

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
        <About t={t}/>

        {/* Animierter Übergang: Schwarz zu Weiß */}
        <div className="w-full h-12 md:h-20 bg-white relative z-20 pointer-events-none">
          <div className="absolute inset-0 bg-sawtooth-black animate-sawtooth-right"></div>
        </div>

        {/* Swagger UI Arbeits-Sektion */}
       <WorkSection
        t={t}
        swaggerProjects={swaggerProjects}
        expandedProject={expandedProject}
        setExpandedProject={setExpandedProject}
        apiResponse={apiResponse}
        setApiResponse={setApiResponse}
        executeApi={executeApi}
      />


        {/* Animierter Übergang: Weiß zu Schwarz */}
        <div className="w-full h-12 md:h-20 bg-black relative z-20 pointer-events-none">
          <div className="absolute inset-0 bg-sawtooth-white animate-sawtooth-left"></div>
        </div>

        {/* Kontakt Sektion */}
        <ContactSection t={t}/>
      </main>

      {/* Footer */}
     <Footer t={t}/>
    </div>
  );
};

export default App;
