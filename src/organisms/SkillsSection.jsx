import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Typography from '../atoms/Typography';
import SkillTag from '../molecules/SkillTag';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const { t } = useLanguage();

  React.useEffect(() => {
    const skillEls = document.querySelectorAll('.skill-tag');
    const titleEl = document.querySelector('.skills-title');
    if (skillEls.length) {
      gsap.from(skillEls, { scrollTrigger: { trigger: '.skills-section', start: 'top 80%', toggleActions: 'play none none reverse' }, y: 50, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power2.out' });
    }
    if (titleEl) {
      gsap.from(titleEl, { scrollTrigger: { trigger: '.skills-section', start: 'top 90%', toggleActions: 'play none none reverse' }, y: 30, opacity: 0, duration: 1, ease: 'power3.out' });
    }
  }, []);

  const skills = [
    { name: 'JavaScript', icon: <img src="https://skillicons.dev/icons?i=js"/>, level: 'Experto', color: 'from-yellow-400 to-orange-500' },
    { name: 'PHP', icon: <img src="https://skillicons.dev/icons?i=php"/>, level: 'Experto', color: 'from-purple-500 to-indigo-600' },
    { name: 'Python', icon: <img src="https://skillicons.dev/icons?i=python"/>, level: 'Intermedio-Avanzado', color: 'from-green-400 to-emerald-600' },
    { name: 'React', icon: <img src="https://skillicons.dev/icons?i=react"/>, level: 'Experto', color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', icon: <img src="https://skillicons.dev/icons?i=nodejs"/>, level: 'Intermedio', color: 'from-green-500 to-emerald-700' },
    { name: 'git', icon: <img src="https://skillicons.dev/icons?i=git"/>, level: 'Avanzado', color: 'from-blue-500 to-blue-700' },
    { name: 'Tailwind CSS', icon: <img src="https://skillicons.dev/icons?i=tailwind"/>, level: 'Experto', color: 'from-cyan-400 to-teal-500' },
    { name: 'PostgreSQL', icon: <img src="https://skillicons.dev/icons?i=postgres"/>, level: 'Intermedio', color: 'from-blue-600 to-indigo-800' },
  ];

  const skillLevels = {
    es: { 'Experto': 'Expert', 'Intermedio': 'Intermediate', 'Intermedio-Avanzado': 'Intermediate-Advanced', 'Avanzado': 'Advanced' },
    en: { 'Experto': 'Expert', 'Intermedio': 'Intermediate', 'Intermedio-Avanzado': 'Intermediate-Advanced', 'Avanzado': 'Advanced' }
  };

  const lang = useLanguage().lang;

  return (
    <section className="skills-section py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <Typography variant="h2" className="text-center skills-title mb-4">{t.skills}</Typography>
        <p className="text-center text-slate-400 mb-12 max-w-xl mx-auto">{t.skillsSubtitle}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((s) => (
            <SkillTag key={s.name} name={s.name} icon={s.icon} level={skillLevels[lang][s.level]} color={s.color} className="skill-tag" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;