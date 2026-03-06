import { ArrowUpRight } from "lucide-react";

const MobileRegistryLink = ({ t }) => {
  return (
    <div className="mt-12 text-center md:hidden">
      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 font-mono text-sm border-2 border-black px-8 py-4 font-bold hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-colors"
      >
        [ {t.work.registry} ] <ArrowUpRight size={16} />
      </a>
    </div>
  );
};

export default MobileRegistryLink;