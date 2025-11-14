import React from 'react';
import type { Project } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects: Project[] = [
  {
    image: 'https://picsum.photos/seed/project1/600/400',
    title: 'AI Chat Agent',
    description: 'A sophisticated AI Chat Agent that can book customer food orders and de.',
    tags: ['NLP', 'React', 'Node.js', 'Gemini API'],
  },
  {
    image: '/Images/Zaks-kitchen-home-SS.png',
    title: 'Restaurant Website',
    description: 'A website for a restaurant, with features like online ordering, reservation, and menu.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Python'],
    url: 'https://www.zakskitchenau.com/',
  },
  {
    image: 'https://picsum.photos/seed/project3/600/400',
    title: 'AI Call Agent',
    description: 'A full-stack web development project for a major tech firm, resulting in a 50% increase in user retention.',
    tags: ['Next.js', 'Tailwind CSS', 'Vercel'],
  },
  {
    image: '/Images/MG-Hospital-SS.jpg',
    title: 'Mobile Healthcare App',
    description: 'A secure and user-friendly mobile app for a multi speciality hospital, with features like appointment booking, doctor consultation, and hospital directory.',
    tags: ['Dart', 'Flutter'],
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardContent = (
    <>
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-image w-full h-48 object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {project.url && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <div className="text-center px-4">
              <p className="text-cyan-400 text-lg font-bold mb-2" style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.8)' }}>Click to visit the website</p>
              <div className="w-12 h-0.5 bg-cyan-400 mx-auto" style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)' }}></div>
            </div>
          </div>
        )}
      </div>
      <div className="p-6 transform group-hover:translateZ(10px)">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </>
  );

  if (project.url) {
    return (
      <a 
        href={project.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-card-3d bg-black/60 rounded-lg overflow-hidden group shadow-lg border border-cyan-500/20 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-300 block cursor-pointer"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className="project-card-3d bg-black/60 rounded-lg overflow-hidden group shadow-lg border border-cyan-500/20 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-300">
      {cardContent}
    </div>
  );
};

const Geometric3D: React.FC = () => (
  <div className="absolute top-10 left-10 w-24 h-24 geometric-3d opacity-15 pointer-events-none hidden lg:block">
    <div className="w-full h-full relative">
      {/* Octahedron-like structure with Neon */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-cyan-500/60" style={{ filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.6))' }}></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[20px] border-l-transparent border-r-transparent border-t-cyan-400/60" style={{ filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.6))' }}></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-0 h-0 border-t-[12px] border-b-[12px] border-r-[20px] border-t-transparent border-b-transparent border-r-cyan-500/60" style={{ filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.6))' }}></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0 border-t-[12px] border-b-[12px] border-l-[20px] border-t-transparent border-b-transparent border-l-cyan-400/60" style={{ filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.6))' }}></div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-16 bg-black/40 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Geometric3D />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div ref={headerRef} className={`text-center mb-12 scroll-scale-up ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Work</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">Here are some of the innovative solutions we've delivered to our clients.</p>
        </div>
        <div ref={cardsRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 scroll-stagger ${cardsVisible ? 'visible' : ''}`}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;