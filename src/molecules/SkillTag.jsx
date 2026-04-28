import React from 'react';

const SkillTag = ({ name, icon, level = 'Intermediate', color = 'from-cyan-500 to-blue-600' }) => (
  <div className={`relative group px-5 py-4 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 overflow-hidden`}>
    <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity`} />
    <div className="relative flex items-center gap-3">
      <span className="text-xl">{icon}</span>
      <div>
        <div className="font-semibold text-white">{name}</div>
        <div className="text-xs text-slate-500">{level}</div>
      </div>
    </div>
  </div>
);

export default SkillTag;