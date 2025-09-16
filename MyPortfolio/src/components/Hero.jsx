import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/utkarsha-fole-619105297', icon: '/linkedin.svg', label: 'LinkedIn' },
    { href: 'https://github.com/Utkarsha155', icon: '/github.svg', label: 'GitHub' },
    { href: 'https://www.codechef.com/users/utkarsha15', icon: '/codechef.svg', label: 'Codechef' },
    { href: 'https://leetcode.com/u/OSwu4jY3Lm/', icon: '/leetcode.svg', label: 'Leetcode' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative px-8 py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          <h1 className="text-6xl font-extrabold leading-tight mb-6 text-gradient">
            Hi! I'm <div className="typewriter text-white">Utkarsha Fole</div>
          </h1>
          <p className="text-xl text-text-secondary mb-8 leading-relaxed">
            A Full Stack Web Developer with the mindset of a problem-solver and the precision of a creator. I design, develop, and deploy with purpose — turning ideas into reality.
          </p>
          
          <div className="flex gap-4 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-center w-12 h-12 glass-effect rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-primary hover:shadow-medium"
                aria-label={link.label}
                target='_blank'
              >
                <img 
                  className="w-6 h-6 brightness-0 invert" 
                  src={link.icon} 
                  alt={link.label} 
                />
              </a>
            ))}
          </div>
          
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => scrollToSection('#about')}
              className="btn btn-primary"
            >
              Know More About Me
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn btn-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
          <div className="flex justify-center items-center">
            <div className="relative w-96 h-[500px]">
              <img 
                src="/girlAI.jpg" 
                alt="Utkarsha Fole - Full Stack Developer" 
                className="w-full h-full object-cover rounded-3xl border-4 border-glass-border shadow-large transition-all duration-300 hover:scale-105"
              />
              <div className="absolute -top-5 -left-5 -right-5 -bottom-5 bg-gradient-primary rounded-[2.5rem] opacity-30 blur-xl -z-10 animate-pulse-slow" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-6 border-r-2 border-b-2 border-primary transform rotate-45" />
      </div>
    </section>
  )
}

export default Hero

