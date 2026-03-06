import React from 'react';
import { Activity, X } from 'lucide-react';

const ActuatorDashboard = ({ actuatorOpen, setActuatorOpen, metrics, uptime, t }) => {
  if (!actuatorOpen) return null;

  return (
    <div className="fixed top-24 right-6 z-40 bg-black/80 backdrop-blur-md border border-emerald-900/50 p-4 font-mono text-xs w-64 hidden xl:block shadow-[0_0_15px_rgba(16,185,129,0.1)]">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-3 pb-2 border-b border-emerald-900/50 text-emerald-500">
        <span className="flex items-center gap-2"><Activity size={14} /> /actuator/metrics</span>
        <button 
          aria-label="Close" 
          onClick={() => setActuatorOpen(false)} 
          className="hover:text-white"
        >
          <X size={14} />
        </button>
      </div>

      {/* Metrics */}
      <div className="space-y-2 text-gray-400">
        <div className="flex justify-between">
          <span>{t.actuator.status}:</span>
          <span className="text-emerald-400 font-bold">UP</span>
        </div>
        <div className="flex justify-between">
          <span>{t.actuator.uptime}:</span>
          <span className="text-white">{uptime}</span>
        </div>
        <div className="flex justify-between">
          <span>{t.actuator.cpu}:</span>
          <span className="text-white">{metrics.cpu}%</span>
        </div>
        <div className="flex justify-between">
          <span>{t.actuator.mem}:</span>
          <span className="text-white">{metrics.mem} MB / 512 MB</span>
        </div>
        <div className="flex justify-between">
          <span>{t.actuator.threads}:</span>
          <span className="text-white">{metrics.threads} {t.actuator.active}</span>
        </div>
      </div>
    </div>
  );
};

export default ActuatorDashboard;