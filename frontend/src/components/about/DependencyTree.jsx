import { Settings, Leaf } from "lucide-react";
import JsStackEasterEgg from "./jsStackEasterEgg";

const DependencyTree = ({ t }) => {
  return (
    <>
      <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
        <Settings
          size={24}
          className="text-emerald-500 animate-[spin_6s_linear_infinite]"
        />
        {t.about.deps}
      </h3>

      <div className="bg-black/50 border border-emerald-900/50 p-6 rounded relative group/deps">
        <ul className="font-mono text-sm space-y-3 text-gray-400 relative">
          <li className="text-white flex items-center gap-2">
            <Leaf size={14} className="text-emerald-500" /> com.portfolio.app
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

        <JsStackEasterEgg t={t} />
      </div>
    </>
  );
};

export default DependencyTree;
