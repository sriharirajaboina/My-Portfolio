import { useState, useEffect, useRef } from 'react'
import './About.css'

function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="container">
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <div className="about-header">
            <h2 className="section-title">About Me</h2>
            <div className="title-underline"></div>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <h3>Career Objective</h3>
              <p>
                Aspiring React Developer seeking a position in a dynamic organization to utilize my knowledge of 
                React, HTML, CSS, and JavaScript, and gain hands-on experience in building real-world web applications. 
                Dedicated to writing clean, efficient code and collaborating with cross-functional teams to create 
                innovative solutions that meet business objectives.
              </p>
              
              <div className="highlights">
                <div className="highlight-item">
                  <span className="highlight-number">1+</span>
                  <span className="highlight-label">Years Experience</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">1+</span>
                  <span className="highlight-label">Projects Completed</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">93%</span>
                  <span className="highlight-label">Client Satisfaction</span>
                </div>
              </div>
            </div>

            <div className="about-info">
              <h3>Personal Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">Sri Hari Rajaboina</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">sriharirajaboina1809@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Phone:</span>
                  <span className="info-value">+91-6303132188</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location:</span>
                  <span className="info-value">Hyderabad, India</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Degree:</span>
                  <span className="info-value">B.Tech CSE</span>
                </div>
                <div className="info-item">
                  <span className="info-label">University:</span>
                  <span className="info-value">Krishna University</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About