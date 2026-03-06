import ApiResponse from "./ApiResponse";
import { Play } from "lucide-react";

const SwaggerItem = ({
  project,
  index,
  t,
  expandedProject,
  setExpandedProject,
  apiResponse,
  setApiResponse,
  executeApi,
}) => {
  const isOpen = expandedProject === index;

  return (
    <div
      key={index}
      className={`border ${project.color} rounded overflow-hidden reveal-on-scroll opacity-0 translate-y-12 transition-all duration-500 ease-out`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* API Header */}
      <div
        className={`p-3 md:p-4 flex flex-col md:flex-row md:items-center cursor-pointer hover:bg-black/5 transition-colors ${expandedProject === index ? "bg-black/5 border-b " + project.color : ""}`}
        onClick={() => {
          setExpandedProject(expandedProject === index ? null : index);
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
                <Play size={16} fill="currentColor" /> {t.work.execute}
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
  );
};

export default SwaggerItem;
