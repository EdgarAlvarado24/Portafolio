import React from 'react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export default Card;