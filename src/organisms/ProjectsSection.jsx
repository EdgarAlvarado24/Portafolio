import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Typography from '../atoms/Typography';
import ProjectCard from '../molecules/ProjectCard';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'Peluqueria - Aplicacion web',
      desc: 'Dashboard full-stack para gestión de clientes con analítica en tiempo real',
      technologies: ['PHP', 'Javascript', 'CSS'],
      demoUrl: '',
      codeUrl: 'https://github.com/EdgarAlvarado24/peluqueria'
    },

    {
      title: 'ChatBot - Reserva de citas atraves de bot de telegram',
      desc: 'Aplicación web + bot de telegram para gestión automatizada de una peluquería(turnos, clientes y recordatorios)',
      technologies: ['PHP'],
      demoUrl:'',
      codeUrl:'https://github.com/EdgarAlvarado24/bot-peluqueria',
    },

{
  title: 'Movie_app — buscador de películas',
    desc: 'App que consume la API publica de peliculas. Filtro de busqueda y sistema de mas buscados. ',
      technologies: ['Javascript', 'CSS', 'HTML'],
        demoUrl: 'https://movie-app-chi-opal-33.vercel.app/',
          codeUrl: 'https://github.com/EdgarAlvarado24/movie_app'
},
{
  title: 'E-commerce',
    desc: 'Tienda online con carrito,pasarela de pagos simulada y administrador de inventario',
      technologies: ['Javascript', 'CSS', 'HTML'],
        demoUrl: '',
          codeUrl: 'https://github.com/EdgarAlvarado24/ecommerce-project'

}
  ];

const projectDescs = {
  es: [
    'Dashboard full-stack para gestión de clientes con analítica en tiempo real',
    'Servicio backend escalable con autenticación JWT y microservicios',
    'Tienda online con carrito, pagos y administrador de inventario'
  ],
  en: [
    'Full-stack dashboard for customer management with real-time analytics',
    'Scalable backend service with JWT authentication and microservices',
    'Online store with cart, payments and inventory management'
  ]
};

const hasRun = useRef(false);
useEffect(() => {
  if (hasRun.current) return;
  hasRun.current = true;

  const cards = document.querySelectorAll('.project-card');
  const title = document.querySelector('.projects-title');
  if (cards.length) {
    gsap.from(cards, { scrollTrigger: { trigger: '.projects-section', start: 'top 85%', toggleActions: 'play none none reverse', stagger: 0.2 }, y: 50, opacity: 0, duration: 0.8, ease: 'power3.out' });
  }
  if (title) {
    gsap.from(title, { scrollTrigger: { trigger: '.projects-section', start: 'top 90%', toggleActions: 'play none none reverse' }, y: 30, opacity: 0, duration: 1, ease: 'power3.out' });
  }
}, []);

const lang = useLanguage().lang;

return (
  <section id="projects-section" className="projects-section py-24 relative">
    <div className="max-w-6xl mx-auto px-4">
      <Typography variant="h2" className="text-center projects-title mb-4">{t.projects}</Typography>
      <p className="text-center text-slate-400 mb-12 max-w-xl mx-auto">{t.projectsSubtitle}</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            desc={projectDescs[lang][i]}
            technologies={p.technologies}
            demoUrl={p.demoUrl}
            codeUrl={p.codeUrl}
            className="project-card"
          />
        ))}
      </div>
    </div>
  </section>
);
};

export default ProjectsSection;