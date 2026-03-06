import React from 'react';

const BackgroundEffects = ({ mousePosition }) => {
  return (
    <>
      {/* Maus-Spotlight Effekt */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{ 
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16,185,129,0.08), transparent 40%)` 
        }}
      />

      {/* Hintergrund-Rauschen */}
      <div className="fixed inset-0 z-0 pointer-events-none noise-bg mix-blend-overlay"></div>

      {/* Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
        <div 
          className="absolute inset-0 -top-16 animate-grid-move"
          style={{ 
            backgroundImage: 'radial-gradient(rgba(16,185,129,0.3) 1px, transparent 1px)', 
            backgroundSize: '3rem 3rem' 
          }}
        ></div>
      </div>
    </>
  );
};

export default BackgroundEffects;