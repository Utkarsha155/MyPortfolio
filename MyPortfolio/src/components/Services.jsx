import React from 'react'
import { useInView } from 'react-intersection-observer'

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const services = [
    {
      icon: '/fullstack.png',
      title: 'Full Stack Web Development',
      description: 'Proficient in developing scalable and interactive web applications, focusing on seamless frontend experiences and efficient backend logic. Skilled in modern frameworks and deployment strategies to build robust solutions.'
    },
    {
      icon: '/content.jpg',
      title: 'Content Writing',
      description: 'Capable of crafting clear, engaging, and impactful content for diverse platforms. Skilled in technical writing, storytelling, and SEO optimization to effectively communicate ideas and enhance user engagement.'
    }
  ]

  return (
    <section id="services" className="py-28">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="section-title">Services</h2>
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`glass-card p-8 text-center transition-all duration-700 hover:-translate-y-2 hover:shadow-large hover:border-primary relative overflow-hidden group ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <img 
                  className="w-20 h-20 rounded-full invert" 
                  src={service.icon} 
                  alt={service.title} 
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-text-primary">
                {service.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
