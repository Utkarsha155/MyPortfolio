import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="contact" className="py-32 bg-bg-secondary">
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto px-8">
        <h2 className="section-title">Contact Me</h2>
        <div className="flex flex-col items-center justify-center w-1/2 gap-16 lg:flex-row lg:gap-16">
          <div
            ref={ref}
            className={`transition-all duration-700 ${inView ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <h3 className="text-3xl font-bold mb-4 text-text-primary">
              Let's Work Together
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Feel free to reach out for collaborations, project discussions, or any queries.
              I'm always open to new opportunities and exciting ideas. Drop a message, and I'll get back to you soon!
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-4 p-4 glass-effect rounded-xl transition-all duration-300 hover:translate-x-2 hover:border-primary">
                <img
                  className="w-6 h-6 brightness-0 invert"
                  src="/email.svg"
                  alt="Email"
                />
                <span>utkarshafole128@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 p-4 glass-effect rounded-xl transition-all duration-300 hover:translate-x-2 hover:border-primary">
                <img
                  className="w-6 h-6 brightness-0 invert"
                  src="/call.svg"
                  alt="Phone"
                />
                <span>+91 1234567890</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Contact
