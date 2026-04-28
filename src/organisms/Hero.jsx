import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../atoms/Button';
import Typography from '../atoms/Typography';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { t } = useLanguage();

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title-words', { scrollTrigger: { trigger: '.hero-section', start: 'top 80%', scrub: true }, y: 50, opacity: 0, stagger: 0.2, ease: 'power3.out' });
      gsap.from('.hero-button-group', { scrollTrigger: { trigger: '.hero-section', start: 'top 70%', scrub: true }, y: 30, opacity: 0, stagger: 0.15, ease: 'power2.out' });
    });
    return () => ctx.revert();
  }, []);

  const handleContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero-section min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      <div className="relative z-10 px-4">
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-xs font-mono tracking-wider">{t.available}</span>
        </div>
        
        <Typography variant="h1" className="hero-title-words">
          <span className="block text-white tracking-tight">{t.name}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            {t.title}
          </span>
        </Typography>
        
        <Typography variant="h2" className="hero-title-words mt-6 text-slate-300 max-w-2xl mx-auto font-light">
          {t.subtitle}
        </Typography>
        
        <div className="mt-10 hero-button-group flex flex-wrap gap-4 justify-center">
          <Button variant="primary" onClick={handleContact}>
            <span className="relative z-10">{t.cta}</span>
          </Button>
          <Button variant="secondary" onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}>
            {t.portfolio}
          </Button>
        </div>

        <div className="mt-16 flex justify-center gap-8 text-slate-500 text-sm font-mono">
          {t.tech.map((tech, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-cyan-400">&#9679;</span> {tech}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;