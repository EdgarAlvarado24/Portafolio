import React from 'react';

const Typography = ({ as: Component = 'p', variant = 'body', className = '', children, ...props }) => {
  const cls = {
    h1: 'text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight',
    h2: 'text-xl md:text-2xl font-light text-slate-300 mb-3',
    h3: 'text-xl md:text-2xl font-semibold text-white mb-2',
    body: 'text-slate-400 text-base leading-relaxed',
    caption: 'text-sm text-slate-500'
  }[variant] || '';
  return React.createElement(Component, { className: `${cls} ${className}`, ...props }, children);
};

export default Typography;