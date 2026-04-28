import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900/80 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
      title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      {lang === 'es' ? (
        <>
          <span className="text-xl">🇪🇸</span>
          <span className="text-sm text-slate-300 font-medium">ES</span>
        </>
      ) : (
        <>
          <span className="text-xl">🇺🇸</span>
          <span className="text-sm text-slate-300 font-medium">EN</span>
        </>
      )}
    </button>
  );
};

export default LanguageToggle;