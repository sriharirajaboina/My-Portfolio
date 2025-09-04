import { useEffect, useState } from 'react'
import profile from '../../assets/profile-img.jpg';

import './Hero.css'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)

  const roles = [
    'React Developer',
    'Frontend Developer',
    'Web Developer',
    'Software Developer'
  ]

  useEffect(() => {
    setIsVisible(true)
    
    const roleInterval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(roleInterval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
            <h1 className="hero-title">
              <span className="greeting">Hi, I'm</span>
              <span className="name">Sri Hari Rajaboina</span>
            </h1>
            
            <div className="role-container">
              <span className="role-text">I'm a </span>
              <span className="role-animated">
                {roles[currentRole]}
              </span>
            </div>
            
            <p className="hero-description">
              Aspiring React Developer with 1+ years of technical experience, passionate about 
              building innovative web applications and creating exceptional user experiences.
            </p>
            
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-secondary">
                View My Work
              </a>
            </div>
          </div>
          
          <div className={`hero-image ${isVisible ? 'visible' : ''}`}>
            <div className="image-container">
              <img 
                src={profile}
                alt="Sri Hari Rajaboina"
                className="profile-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  )
}

export default Hero