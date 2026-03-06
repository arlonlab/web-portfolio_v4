import { Server } from "lucide-react";
import { useEffect } from "react";

const HistoryTimeline = ({ t }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-12");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
        <Server size={24} className="text-emerald-500" /> {t.about.history}
      </h3>
      <div className="space-y-10">
        {t.about.exp.map((exp, index) => (
          <div
            key={index}
            className="relative pl-6 border-l border-emerald-900/50 group hover:border-emerald-500
             transition-all duration-700 ease-out
             opacity-0 translate-y-12 reveal-on-scroll"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div
              className="absolute w-3 h-3 bg-black border-2 border-emerald-900
                  group-hover:border-emerald-500 rounded-full -left-[7px] top-1.5
                  transition-all duration-300 ease-out group-hover:bg-emerald-500
                  group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.8)]"
            ></div>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <h4 className="text-xl font-medium text-white">{exp.role}</h4>
              <span className="text-sm font-mono text-emerald-500/70 mt-1 md:mt-0">
                {exp.period}
              </span>
            </div>
            <h5 className="text-md text-emerald-400 mb-4">{exp.company}</h5>
            <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryTimeline;
