import { useState, useEffect, useRef } from 'react'
import './Experience.css'

function Experience() {
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

  const experiences = [
    {
      title: "System Analyst",
      company: "SPIL Technologies Ltd",
      location: "Hyderabad, India",
      duration: "June 2024 – Present",
      type: "Full-time",
      responsibilities: [
        "Having 1+ years of Technical experience in Software Development",
        "Have experience in Web Application Development, using JavaScript Frameworks like React/16",
        "Having experience in JavaScript, ES6, Type Script",
        "Having experience in handling application state management using Redux-tool kit",
        "Experience in creating rich user interfaces components using HTML5, CSS3, Tailwind and Bootstrap5"
      ]
    },
    {
      title: "Web Developer",
      company: "Krify Software Solutions",
      location: "Kakinada, India", 
      duration: "April 2023 – July 2023",
      type: "Internship",
      responsibilities: [
        "Develop and maintain web applications using HTML, CSS, JavaScript with a focus on writing clean and modular code",
        "Build responsive user interfaces modern JavaScript (ES 6+), working closely with designers to bring pixel-perfect designs to life",
        "Having experience in making REST API calls using axios library",
        "Experience in using of Promises, Async, Await"
      ]
    }
  ]

  return (
    <section id="experience" className="experience section" ref={sectionRef}>
      <div className="container">
        <div className={`experience-content ${isVisible ? 'visible' : ''}`}>
          <div className="experience-header">
            <h2 className="section-title">Professional Experience</h2>
            <div className="title-underline"></div>
            <p className="experience-description">
              My journey in software development and web technologies
            </p>
          </div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="timeline-item"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="experience-card">
                    <div className="card-header">
                      <h3 className="job-title">{exp.title}</h3>
                      <span className="job-type">{exp.type}</span>
                    </div>
                    
                    <div className="company-info">
                      <h4 className="company-name">{exp.company}</h4>
                      <div className="job-details">
                        <span className="location">{exp.location}</span>
                        <span className="duration">{exp.duration}</span>
                      </div>
                    </div>

                    <ul className="responsibilities">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="responsibility-item">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience