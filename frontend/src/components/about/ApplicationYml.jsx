import { TerminalIcon } from "lucide-react";

const ApplicationYml = ({ t }) => {
  return (
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
  );
};

export default ApplicationYml;
