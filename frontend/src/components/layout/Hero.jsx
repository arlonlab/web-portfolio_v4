import React from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import profilepic from "../../assets/portrait_Arlon_Labalan-min.jpg"

const Hero = ({ mousePosition, t, scrollTo, language }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Floating Annotations */}
      <div
        className="absolute top-1/4 left-4 md:left-10 text-2xl md:text-4xl text-emerald-500/20 font-mono font-bold animate-float pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.xNorm * -30}px, ${mousePosition.yNorm * -30}px)`,
        }}
      >
        @SpringBootApplication
      </div>
      <div
        className="absolute bottom-1/4 right-10 md:right-20 text-xl md:text-3xl text-emerald-500/10 font-mono font-bold animate-float-delayed pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.xNorm * 30}px, ${mousePosition.yNorm * 30}px)`,
        }}
      >
        @RestController
      </div>
      <div
        className="absolute top-1/3 right-1/4 text-2xl md:text-4xl text-emerald-500/20 font-mono font-bold animate-float-slow pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.xNorm * -50}px, ${mousePosition.yNorm * 40}px)`,
        }}
      >
        @Autowired
      </div>

      {/* Floating code snippets */}
      <div
        className="absolute top-1/2 left-1/4 md:left-1/3 text-sm md:text-lg text-emerald-900/30 font-mono font-bold animate-float-slow pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.xNorm * -20}px, ${mousePosition.yNorm * 60}px)`,
        }}
      >
        app.use(express.json())
      </div>
      <div
        className="absolute bottom-1/5 right-1/3 text-sm md:text-lg text-emerald-900/30 font-mono font-bold animate-float pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.xNorm * 50}px, ${mousePosition.yNorm * -20}px)`,
        }}
      >
        "use client"
      </div>

      {/* Marquee background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[200%] -z-10 opacity-[0.03] pointer-events-none flex select-none">
        <div
          className="animate-marquee text-[10vw] font-black tracking-tighter text-transparent"
          style={{ WebkitTextStroke: "2px var(--accent-color, #10b981)" }}
        >
          INFO 1 --- Started Application // npx create-next-app@latest //
          INFO 1 --- Started Application // npm run dev //
        </div>
      </div>

      {/* Hero content */}
      <div className="max-w-6xl mx-auto w-full space-y-8 relative z-10">
        {/* Avatar + Context */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-2">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-emerald-500 group shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <img
              src={profilepic}
              alt="Portrait"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>

          <div className="inline-flex items-center space-x-2 border border-emerald-500/30 bg-emerald-950/50 backdrop-blur-sm rounded-full px-5 py-2 text-xs font-mono uppercase tracking-widest text-emerald-300 w-max shadow-[0_0_10px_rgba(16,185,129,0.1)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>{t.hero.context} // Beans: 142</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase">
          <span className="block glitch-hover cursor-default">Backend</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-emerald-200 to-emerald-600">
            Developer.
          </span>
        </h1>

        {/* Subtitle */}
        <div className="max-w-2xl text-lg md:text-2xl text-gray-400 font-light leading-relaxed border-l-2 border-emerald-500/50 pl-6 h-auto min-h-[72px]">
          <span key={language} className="typing-text block sm:inline-block">
            {t.hero.subtitle1}
          </span>
          <br className="hidden sm:block" />
          {t.hero.subtitle2}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-6 pt-8">
          <button
            onClick={() => scrollTo("work")}
            className="group relative bg-emerald-500 text-black px-8 py-4 font-bold overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-shadow"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.hero.btnWork}{" "}
              <ArrowUpRight
                size={20}
                className="group-hover:rotate-45 transition-transform"
              />
            </span>
            <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform ease-out duration-300"></div>
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="group relative border border-emerald-500 px-8 py-4 font-bold overflow-hidden"
          >
            <span className="relative z-10 text-emerald-500 group-hover:text-black transition-colors duration-300">
              {t.hero.btnContact}
            </span>
            <div className="absolute inset-0 bg-emerald-500 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform ease-out duration-300"></div>
          </button>
        </div>
      </div>

      {/* Scroll down button */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          aria-label="Scroll down"
          onClick={() => scrollTo("about")}
          className="text-emerald-500 hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;