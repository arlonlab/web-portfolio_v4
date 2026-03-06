const AboutIntro = ({ t }) => {
  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
        @COMPONENT
        <br />
        <span className="text-emerald-500">("{t.about.title}")</span>
      </h2>

      <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <p>
          {t.about.p3}{" "}
          <span className="text-white border-b border-emerald-500">
            Enterprise FinTech
          </span>
          .
        </p>
        <p className="text-emerald-100/60 border-l-2 border-emerald-900/50 pl-4 italic text-base mt-8">
          {t.about.p4}
        </p>
      </div>
    </>
  );
};

export default AboutIntro;
