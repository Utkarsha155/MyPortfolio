import React from 'react'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const projects = [
    {
      image: '/MedicalrecordsSystem.png',
      title: 'Unified Medical Records System',
      description: 'A platform to centralize and manage patients’ medical records, allowing secure sharing with doctors and quick access to medical history.',
      link: 'https://github.com'
    },
    {
      image: '/CodeSearchEngine.png',
      title: 'Code Search Engine',
      description: 'A tool to search, add, and track code snippets efficiently within large codebases.',
      link: 'https://github.com'
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="section-title">Projects</h2>
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-large hover:border-primary group ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-15 h-15 bg-gradient-primary rounded-full transition-all duration-300 hover:scale-110"
                    aria-label={`View ${project.title} Project`}
                  >
                    <img 
                      className="w-6 h-6 brightness-0 invert" 
                      src="/link.svg" 
                      alt="View Project" 
                    />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-text-primary">
                  {project.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
