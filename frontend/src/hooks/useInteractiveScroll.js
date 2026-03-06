import { useState, useEffect } from "react";

export const useInteractiveScroll = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x:0, y:0, xNorm:0, yNorm:0 });

  useEffect(() => {
    let rafId;
    const handleMouseMove = e => {
      if(rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
          xNorm: (e.clientX / window.innerWidth - 0.5) * 2,
          yNorm: (e.clientY / window.innerHeight - 0.5) * 2,
        });
      });
    };

    let lastScroll = 0;
    const handleScroll = () => {
      const now = Date.now();
      if(now - lastScroll > 50){
        lastScroll = now;
        setScrolled(window.scrollY > 50);
        const sections = ["home","about","work","contact"];
        const scrollPos = window.scrollY + 100;
        for(const s of sections){
          const el = document.getElementById(s);
          if(el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight){
            setActiveSection(s);
          }
        }
      }
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add("opacity-100","translate-y-0");
            entry.target.classList.remove("opacity-0","translate-y-12");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach(el => observer.observe(el));

    window.addEventListener("mousemove", handleMouseMove, { passive:true });
    window.addEventListener("scroll", handleScroll, { passive:true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      if(rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return { scrolled, activeSection, mousePosition };
};