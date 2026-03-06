import { useState, useEffect } from "react";

export const useActuator = (isBooting) => {
  const [metrics, setMetrics] = useState({ cpu: 2.1, mem: 142, threads: 24 });
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    if(isBooting) return;
    const interval = setInterval(() => {
      setUptime(prev => prev + 1);
      setMetrics({
        cpu: (Math.random() * 8 + 0.5).toFixed(1),
        mem: Math.floor(Math.random() * 40 + 130),
        threads: Math.floor(Math.random() * 10 + 20),
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [isBooting]);

  const formatUptime = seconds => {
    const h = Math.floor(seconds/3600);
    const m = Math.floor((seconds%3600)/60);
    const s = seconds%60;
    return `${h.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`;
  };

  return { metrics, uptime, formatUptime };
};