import SwaggerItem from "./SwaggerItem";

const SwaggerList = ({
  t,
  swaggerProjects,
  expandedProject,
  setExpandedProject,
  apiResponse,
  setApiResponse,
  executeApi,
}) => {
  return (
    <div className="space-y-4 font-mono text-sm">
      <div className="mb-4 text-gray-500 border-b border-gray-300 pb-2 flex items-center justify-between">
        <span>Core Services API v1.0.0</span>
        <span className="bg-emerald-100 text-emerald-800 px-2 rounded-full text-xs font-bold">
          OAS3
        </span>
      </div>

      {swaggerProjects.map((project, index) => (
        <SwaggerItem
          key={index}
          index={index}
          project={project}
          t={t}
          expandedProject={expandedProject}
          setExpandedProject={setExpandedProject}
          apiResponse={apiResponse}
          setApiResponse={setApiResponse}
          executeApi={executeApi}
        />
      ))}
    </div>
  );
};

export default SwaggerList;