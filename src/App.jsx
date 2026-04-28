import React from 'react';
import Hero from './organisms/Hero';
import SkillsSection from './organisms/SkillsSection';
import ProjectsSection from './organisms/ProjectsSection';
import ContactSection from './organisms/ContactSection';
import LanguageToggle from './atoms/LanguageToggle';

const App = () => (
  <>
    <div className="page-background" />
    <LanguageToggle />
    <Hero />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </>
);

export default App;