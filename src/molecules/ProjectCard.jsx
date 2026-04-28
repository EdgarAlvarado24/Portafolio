import React from 'react';
import Button from '../atoms/Button';
import Card from '../atoms/Card';
import { useLanguage } from '../context/LanguageContext';

const projectTitles = {
  es: ['Sistema CRM Web', 'API RESTful Python', 'E-commerce React'],
  en: ['Web CRM System', 'Python RESTful API', 'React E-commerce']
};

const ProjectCard = ({ title, desc, technologies, demoUrl, codeUrl }) => {
  const { lang, t } = useLanguage();
  const index = projectTitles.es.indexOf(title);
  const displayTitle = projectTitles[lang][index] || title;

  return (
    <Card className="group relative overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 opacity-0 group-hover:opacity-100 transition-opacity" />
      <h3 className="text-xl font-bold text-white mb-2 relative z-10 group-hover:text-cyan-400 transition-colors">{displayTitle}</h3>
      <p className="text-slate-400 text-sm mb-4 relative z-10">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-5 relative z-10">
        {technologies.map((t, i) => (
          <span key={i} className="px-3 py-1 bg-slate-800/80 rounded-full text-xs font-mono text-cyan-300 border border-slate-700">{t}</span>
        ))}
      </div>
      <div className="flex gap-3 relative z-10">
        {demoUrl && <Button variant="primary" onClick={() => window.open(demoUrl, '_blank')} className="rounded-lg text-sm px-4 py-2">{t.demo}</Button>}
        {codeUrl && <Button variant="secondary" onClick={() => window.open(codeUrl, '_blank')} className="rounded-lg text-sm px-4 py-2">{t.code}</Button>}
      </div>
    </Card>
  );
};

export default ProjectCard;