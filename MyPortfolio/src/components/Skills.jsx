import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [skillBarsAnimated, setSkillBarsAnimated] = useState(false)
  const [skillCirclesAnimated, setSkillCirclesAnimated] = useState(false)

  const technicalSkills = [
    { name: 'HTML', percentage: 100 },
    { name: 'CSS', percentage: 100 },
    { name: 'Javascript', percentage: 100 },
    { name: 'React.js', percentage: 100 },
    { name: 'TailwindCSS', percentage: 100 },
    { name: 'Node.js', percentage: 100 },
    { name: 'Express.js', percentage: 100 },
    { name: 'MongoDB', percentage: 100 },
    { name: 'API', percentage: 90 },
    { name: 'Bootstrap', percentage: 90 },
    { name: 'C++', percentage: 100 },
    { name: 'Data Structures & Algorithm', percentage: 90 }
  ]

  const professionalSkills = [
    { name: 'Communication', percentage: 100 },
    { name: 'Leadership & Management', percentage: 100 },
    { name: 'Project Management', percentage: 100 },
    { name: 'Problem Solving', percentage: 100 },
    { name: 'Creativity', percentage: 100 },
    { name: 'Teamwork', percentage: 100 }
  ]

  useEffect(() => {
    if (inView) {
      setSkillBarsAnimated(true)
      setSkillCirclesAnimated(true)
    }
  }, [inView])

  return (
    <section id="skills" className="py-14 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div 
            ref={ref}
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h3 className="text-3xl font-bold mb-8 text-text-primary text-center">
              Technical Skills
            </h3>
            <div className="flex flex-col gap-6">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="glass-card p-6 transition-all duration-300 hover:translate-x-2 hover:border-primary"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-text-primary">
                      {skill.name}
                    </span>
                    <span className="font-bold text-primary">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: skillBarsAnimated ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            ref={ref}
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h3 className="text-3xl font-bold mb-8 text-text-primary text-center">
              Professional Skills
            </h3>
            <div className="flex justify-center gap-8 flex-wrap">
              {professionalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="relative w-36 h-36"
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  <svg 
                    className="w-full h-full transform -rotate-90" 
                    viewBox="0 0 120 120"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      className="fill-none stroke-bg-tertiary stroke-2"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      className="fill-none stroke-primary stroke-2 stroke-linecap-round"
                      strokeDasharray="314"
                      strokeDashoffset={skillCirclesAnimated ? 314 - (skill.percentage / 100) * 314 : 314}
                      style={{ transition: 'stroke-dashoffset 1s ease' }}
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <span className="block text-2xl font-bold text-primary">
                      {skill.percentage}%
                    </span>
                    <span className="block text-sm text-text-secondary mt-1">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
