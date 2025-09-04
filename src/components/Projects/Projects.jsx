import { useState, useEffect, useRef } from 'react'
import workflowImg from "../../assets/work-flow.jpg";
import ecommerceImg from "../../assets/ecommerce.jpg";
import tangarineImg from "../../assets/tangarine-disease.jpg";
import './Projects.css'

function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const sectionRef = useRef(null)

  const projects = [
    {
      title: "Work Flow",
      description: "A comprehensive workflow management system built with React 16+ and modern web technologies.",
      image:  workflowImg,
      technologies: ["React 16+", "JavaScript ES6", "CSS3", "HTML5", "MongoDB"],
      role: "Team Member",
      duration: "Aug 2024 - Present",
      features: [
        "Administering front-end development using React while concurrently developing and integrating APIs",
        "Resolving high-priority bugs through efficient bug-fixing techniques",
        "Participated in sustained engineering analysis to conduct root cause analysis for persistent issues",
        "Assisting new team members with local environment setup and provided guidance on application functionalities"
      ]
    },
    {
      title: "Tangerine Disease Detection",
      description: "Machine learning-based image processing system for detecting and classifying tangerine diseases using Java and OpenCV.",
      image: ecommerceImg,
      technologies: ["Java", "OpenCV", "Machine Learning", "Image Processing", "SVM"],
      role: "Developer",
      duration: "Academic Project",
      features: [
        "Processing fruit images to identify and categorize diseases",
        "Using OpenCV for image preprocessing (noise reduction, resizing, and color correction)",
        "Feature extraction techniques to analyze texture, color, and shape",
        "Machine learning frameworks like DeepLearning4J or Smile implement classification algorithms"
      ]
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI/UX and payment integration.",
      image: tangarineImg,
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Stripe"],
      role: "Full Stack Developer",
      duration: "Personal Project",
      features: [
        "Responsive design with modern JavaScript (ES6+)",
        "User authentication and authorization",
        "Shopping cart and payment processing",
        "Admin dashboard for inventory management"
      ]
    }
  ]

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

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentProject(prev => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, projects.length])

  const nextProject = () => {
    setCurrentProject(prev => (prev + 1) % projects.length)
    setIsAutoPlay(false)
  }

  const prevProject = () => {
    setCurrentProject(prev => prev === 0 ? projects.length - 1 : prev - 1)
    setIsAutoPlay(false)
  }

  const goToProject = (index) => {
    setCurrentProject(index)
    setIsAutoPlay(false)
  }

  return (
    <section id="projects" className="projects section" ref={sectionRef}>
      <div className="container">
        <div className={`projects-content ${isVisible ? 'visible' : ''}`}>
          <div className="projects-header">
            <h2 className="section-title">Featured Projects</h2>
            <div className="title-underline"></div>
            <p className="projects-description">
              A showcase of my recent work and technical achievements
            </p>
          </div>

          <div className="carousel-container">
            <div className="carousel">
              <div 
                className="carousel-track"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="project-slide">
                    <div className="project-card">
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                      </div>
                      
                      <div className="project-info">
                        <div className="project-meta">
                          <span className="project-role">{project.role}</span>
                          <span className="project-duration">{project.duration}</span>
                        </div>
                        
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        
                        <div className="technologies">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                        
                        <div className="features">
                          <h4>Key Features:</h4>
                          <ul>
                            {project.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-controls">
              <button className="carousel-btn prev-btn" onClick={prevProject}>
                &#8249;
              </button>
              <button className="carousel-btn next-btn" onClick={nextProject}>
                &#8250;
              </button>
            </div>

            <div className="carousel-indicators">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentProject ? 'active' : ''}`}
                  onClick={() => goToProject(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects