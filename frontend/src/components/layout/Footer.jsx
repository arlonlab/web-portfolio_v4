import { Github, Linkedin, Mail } from "lucide-react";

const Footer = ({ t }) => {
  return (
    <footer className="border-t border-emerald-900/30 py-8 text-center bg-black relative z-10">
      
      {/* Social Links */}
      <div className="flex justify-center space-x-6 mb-6">
        
        <a
          href="https://github.com"
          aria-label="Github Profil"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-emerald-400 transition-colors"
        >
          <Github size={24} />
        </a>

        <a
          href="www.linkedin.com/in/arlon-labalan-a7605b25a"
          aria-label="LinkedIn Profil"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-emerald-400 transition-colors"
        >
          <Linkedin size={24} />
        </a>

        <a
          href="mailto:hello@example.com"
          aria-label="E-Mail senden"
          className="text-gray-500 hover:text-emerald-400 transition-colors"
        >
          <Mail size={24} />
        </a>

      </div>

      {/* Copyright */}
      <p className="text-gray-600 text-sm font-mono group cursor-default">
        &copy; {new Date().getFullYear()} Arlon Labalan. Powered by React Context.
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-600 ml-2">
          ({t.footer})
        </span>
      </p>

      <p className="text-gray-700/50 text-xs font-mono mt-3 flex items-center justify-center gap-1.5 hover:text-emerald-500/50 transition-colors">
          Soli Deo Gloria 
        </p>
    </footer>
  );
};

export default Footer;