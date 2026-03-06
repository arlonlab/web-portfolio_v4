import React from 'react';

const BootScreen = ({ t }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black text-emerald-500 font-mono text-xs sm:text-sm p-4 sm:p-8 flex flex-col justify-end overflow-hidden pb-12 pointer-events-none">
      <div className="space-y-1 mb-4">
        <pre className="text-emerald-500 font-mono text-[8px] sm:text-[10px] leading-tight mb-6 animate-[bootText_0.1s_ease-out_0.2s_forwards] opacity-0">
{`  .   ____          _            __ _ _
 /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\
( ( )\\___ | '_ | '_| | '_ \\/ _\` | \\ \\ \\ \\
 \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v3.2.0)`}
        </pre>
        <div className="animate-[bootText_0.1s_ease-out_0.8s_forwards] opacity-0 text-gray-400">
          INFO 1 --- [main] c.e.p.PortfolioApplication : {t.boot[0]}
        </div>
        <div className="animate-[bootText_0.1s_ease-out_1.2s_forwards] opacity-0 text-gray-400">
          INFO 1 --- [main] c.e.p.PortfolioApplication : {t.boot[1]}
        </div>
        <div className="animate-[bootText_0.1s_ease-out_1.6s_forwards] opacity-0 text-gray-400">
          INFO 1 --- [main] o.s.b.w.embedded.tomcat.TomcatWebServer : {t.boot[2]}
        </div>
        <div className="animate-[bootText_0.1s_ease-out_1.9s_forwards] opacity-0 text-yellow-500">
          WARN 1 --- [main] c.e.p.EcosystemScanner : {t.boot[3]}
        </div>
        <div className="animate-[bootText_0.1s_ease-out_2.2s_forwards] opacity-0 text-gray-400">
          INFO 1 --- [main] o.s.b.a.e.web.EndpointLinksResolver : {t.boot[4]}
        </div>
        <div className="animate-[bootText_0.1s_ease-out_2.8s_forwards] opacity-0 text-emerald-400">
          INFO 1 --- [main] c.e.p.PortfolioApplication : {t.boot[5]}
        </div>
        <div className="animate-[bootText_0.1s_ease-out_3.2s_forwards] opacity-0 text-white font-bold mt-4">
          {t.boot[6]}
        </div>
        <div className="animate-[bootText_0.1s_ease-out_3.4s_forwards] opacity-0 mt-2">
          <span className="w-2.5 h-4 bg-emerald-500 inline-block animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

export default BootScreen;