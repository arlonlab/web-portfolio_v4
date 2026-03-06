const JsStackEasterEgg = ({ t }) => {
  return (
    <div className="w-full mt-6 h-8 overflow-hidden">
      <div className="transform translate-y-8 group-hover/deps:translate-y-0 transition-transform duration-300 flex items-center gap-2 text-xs font-mono text-emerald-700">
        <span className="text-yellow-600">{"/* "}</span>
        <span
          className="hover:text-yellow-500 cursor-help transition-colors"
          title={t.about.depsJS}
        >
          npm install express react react-dom
        </span>
        <span className="text-yellow-600">{" */"}</span>
      </div>
    </div>
  );
};

export default JsStackEasterEgg;
