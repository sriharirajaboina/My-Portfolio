import { useState, useEffect, useRef } from 'react'
import './Skills.css'

function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animateProgress, setAnimateProgress] = useState(false)
  const sectionRef = useRef(null)

  const skills = {
    'Programming Languages': [
      { name: 'JavaScript', level: 80 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'Core Java', level: 75 }
    ],
    'Frameworks & Libraries': [
      { name: 'React/16', level: 60 },
      { name: 'Bootstrap5', level: 75 },
      { name: 'Redux Toolkit', level: 75 },
      { name: 'Axios', level: 80 },
      { name: 'Jest', level: 60 }
    ],
    'Databases & Tools': [
      { name: 'MongoDB', level: 60 },
      { name: 'MySQL', level: 55 },
      { name: 'Git', level: 80 },
      { name: 'JIRA', level: 60 },
      { name: 'REST APIs', level: 85 }
    ]
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setAnimateProgress(true), 500)
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
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="container">
        <div className={`skills-content ${isVisible ? 'visible' : ''}`}>
          <div className="skills-header">
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="title-underline"></div>
            <p className="skills-description">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, categorySkills], index) => (
              <div 
                key={category} 
                className="skill-category"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="category-title">{category}</h3>
                <div className="skills-list">
                  {categorySkills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className="skill-item"
                      style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className={`skill-progress ${animateProgress ? 'animate' : ''}`}
                          style={{ 
                            '--target-width': `${skill.level}%`,
                            animationDelay: `${(index * 0.2) + (skillIndex * 0.1) + 0.5}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills