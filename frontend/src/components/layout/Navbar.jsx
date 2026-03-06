import React from "react";
import { Leaf } from "lucide-react";

const Navbar = ({
  scrolled,
  activeSection,
  scrollTo,
  t,
  language,
  setLanguage,
  theme,
  setTheme,
}) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-emerald-900/50 py-4 shadow-[0_4px_30px_rgba(16,185,129,0.1)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div
          className="font-bold text-xl tracking-tighter cursor-pointer flex items-center gap-2"
          onClick={() => scrollTo("home")}
        >
          <Leaf size={24} className="text-emerald-500" />
          <span>Labalan.java</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium tracking-wide items-center">
          {t.nav.map((item, i) => {
            const ids = ["about", "work", "contact"];
            return (
              <button
                key={item}
                onClick={() => scrollTo(ids[i])}
                className={`hover:text-gray-300 transition-colors ${
                  activeSection === ids[i]
                    ? "text-emerald-500 underline underline-offset-8"
                    : "text-gray-500"
                }`}
              >
                {item}
              </button>
            );
          })}

          <div className="w-px h-6 bg-emerald-900/50 mx-2"></div>

          {/* Language Switcher */}
          <button
            onClick={() => {
              setLanguage((l) => (l === "de" ? "en" : "de"));
            }}
            className="bg-transparent border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black transition-colors px-2 py-1 text-xs font-bold rounded-sm flex items-center gap-1"
          >
            {language === "de" ? "EN" : "DE"}
          </button>

          {/* Theme Switcher */}
          {/* <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            aria-label="Select Theme"
            className="bg-transparent border border-emerald-900/50 text-gray-400 text-xs px-2 py-1 outline-none hover:border-emerald-500 transition-colors cursor-pointer rounded-sm"
          >
            <option value="spring">{t.navTheme[0]}</option>
            <option value="darcula">{t.navTheme[1]}</option>
            <option value="matrix">{t.navTheme[2]}</option>
          </select> */}
        </div>

        {/* Resume Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#resume"
            className="border border-emerald-500 text-emerald-500 px-5 py-2 text-sm font-medium hover:bg-emerald-500 hover:text-black transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]"
          >
            {t.resume}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
