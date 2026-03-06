const WorkHeader = ({ t }) => {
  return (
    <div className="flex justify-between items-end mb-12 md:mb-16 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
      <div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-2">
          {t.work.title}
        </h2>

        <div className="group/port inline-block cursor-default">
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest group-hover/port:hidden">
            // {t.work.running}
          </p>
          <p className="text-black font-mono text-sm uppercase tracking-widest hidden group-hover/port:block bg-yellow-300 px-2 -ml-2">
            ▲ npx create-next-app@latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkHeader;