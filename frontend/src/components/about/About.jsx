import AboutIntro from "./AboutIntro";
import ApplicationYml from "./ApplicationYml";
import DependencyTree from "./DependencyTree";
import HistoryTimeline from "./HistoryTimeline";

const About = ({ t }) => {
  return (
    <section id="about" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* LEFT */}
        <div>
          <AboutIntro t={t} />
          <ApplicationYml t={t} />
        </div>

        {/* RIGHT */}
        <div>
          <DependencyTree t={t} />
          <HistoryTimeline t={t} />
        </div>

      </div>
    </section>
  );
};

export default About;