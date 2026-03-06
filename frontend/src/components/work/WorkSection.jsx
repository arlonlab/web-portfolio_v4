import WorkHeader from "./WorkHeader";
import SwaggerList from "./SwaggerList";
import MobileRegistryLink from "./MobileRegistryLink";

const WorkSection = ({
  t,
  swaggerProjects,
  expandedProject,
  setExpandedProject,
  apiResponse,
  setApiResponse,
  executeApi,
}) => {
  return (
    <section
      id="work"
      className="pt-8 pb-24 md:pt-12 md:pb-32 bg-white text-black relative z-20"
    >
      <div className="px-6 max-w-5xl mx-auto">
        <WorkHeader t={t} />

        <SwaggerList
          t={t}
          swaggerProjects={swaggerProjects}
          expandedProject={expandedProject}
          setExpandedProject={setExpandedProject}
          apiResponse={apiResponse}
          setApiResponse={setApiResponse}
          executeApi={executeApi}
        />

        <MobileRegistryLink t={t} />
      </div>
    </section>
  );
};

export default WorkSection;