import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  es: {
    available: 'DISPONIBLE PARA TRABAJAR',
    name: 'Edgar Alvarado',
    title: 'Frontend Developer',
    subtitle: 'Construyo interfaces inmersivas con tecnología moderna y diseño centrado en el usuario',
    cta: 'Comenzar Proyecto',
    portfolio: 'Ver Portafolio',
    tech: ['React', 'TypeScript', 'Node.js'],
    skills: 'Habilidades',
    skillsSubtitle: 'Tecnologías con las que sueñas y soluciones digitales modernas y escalables',
    projects: 'Proyectos',
    projectsSubtitle: 'Proyectos destacados que muestran mi experiencia en desarrollo frontend',
    contact: 'Trabajemos juntos',
    contactSubtitle: '¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte.',
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'Tu correo',
    messagePlaceholder: 'Tu mensaje',
    send: 'Enviar Mensaje',
    messageSent: '¡Mensaje enviado!',
    demo: 'Demo',
    code: 'Código',
  },
  en: {
    available: 'AVAILABLE FOR WORK',
    name: 'Edgar Alvarado',
    title: 'Frontend Developer',
    subtitle: 'I build immersive interfaces with modern technology and user-centered design',
    cta: 'Start Project',
    portfolio: 'View Portfolio',
    tech: ['React', 'TypeScript', 'Node.js'],
    skills: 'Skills',
    skillsSubtitle: 'Technologies you dream of, and modern, scalable digital solutions',
    projects: 'Projects',
    projectsSubtitle: 'Featured projects showcasing my frontend development experience',
    contact: "Let's work together",
    contactSubtitle: 'Have a project in mind? Let\'s talk about how I can help you.',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    messagePlaceholder: 'Your message',
    send: 'Send Message',
    messageSent: 'Message sent!',
    demo: 'Demo',
    code: 'Code',
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('es');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'es' ? 'en' : 'es';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);