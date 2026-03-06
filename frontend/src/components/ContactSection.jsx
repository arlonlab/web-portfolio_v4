import { Leaf, ArrowUpRight } from "lucide-react";

const ContactSection = ({ t }) => {
  return (
    <section
      id="contact"
      className="pt-16 pb-32 md:pt-24 md:pb-48 px-6 max-w-4xl mx-auto text-center relative overflow-hidden"
    >
      {/* Background Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl opacity-5 pointer-events-none text-emerald-500">
        <Leaf size="100%" strokeWidth={0.5} />
      </div>

      {/* Content */}
      <div className="relative z-10 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
        
        {/* Status Hover */}
        <div className="group/status inline-block cursor-default">
          <p className="font-mono text-emerald-500 mb-6 tracking-widest uppercase text-sm group-hover/status:hidden">
            // 200 OK
          </p>
          <p className="font-mono text-yellow-500 mb-6 tracking-widest text-sm hidden group-hover/status:block">
            res.status(200).json({`{ message: "OK" }`});
          </p>
        </div>

        {/* Title */}
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase glitch-hover">
          @ExceptionHandler
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          {t.contact.p1}
        </p>

        {/* Contact Button */}
        <a
          href="mailto:arlon@arlonlabalan.com"
          className="inline-flex items-center gap-4 bg-emerald-500 text-black px-12 py-6 text-xl font-bold hover:bg-white transition-all hover:scale-105 active:scale-95 group shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        >
          {t.contact.btn}
          <ArrowUpRight
            size={24}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;