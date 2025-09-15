import React from 'react'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="about" className="py-12 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div
            ref={ref}
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="flex justify-center">
              <div className="relative w-80 h-96">
                <img
                  src="/GirlImage.jpeg"
                  alt="Utkarsha Fole"
                  className="w-full h-full object-cover rounded-2xl border-3 border-glass-border shadow-large transition-all duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 rounded-2xl transition-opacity duration-300 hover:opacity-10" />
              </div>
            </div>
          </div>

          <div
            ref={ref}
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className="flex flex-col gap-6">
              <p className="text-lg text-text-secondary leading-relaxed">
                I am a passionate Web Developer with strong knowledge in both frontend and backend technologies. Currently, I am in my third year of college, where I am learning, creating, and enjoying every part of my journey with technology.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                My primary focus lies in full stack web development, where I love turning ideas into functional, user-friendly, and impactful digital solutions. Over time, I have built projects that reflect not only my technical skills but also my problem-solving mindset and creativity.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">      
                Along with web development, I also have a keen interest in content writing and leadership. Content writing allows me to express ideas clearly and effectively, while leadership gives me the opportunity to guide, collaborate, and grow with a team. These qualities, combined with my technical expertise, make me a well-rounded individual who thrives in both individual and collaborative environments.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">   
                Curiosity is what drives me—I enjoy exploring emerging technologies, tackling challenges head-on, and continuously improving myself to stay ahead in the ever-evolving tech world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
