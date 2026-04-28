import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const base = 'px-8 py-4 rounded-lg font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 relative overflow-hidden';
  const style = variant === 'primary'
    ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-105'
    : 'border border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]';
  return (
    <button onClick={onClick} className={`${base} ${style} ${className}`}>
      {children}
    </button>
  );
};

export default Button;