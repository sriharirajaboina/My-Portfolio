import { useState, useEffect, useRef } from 'react'
import './Contact.css'

function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'sriharirajaboina1809@gmail.com',
      link: 'mailto:sriharirajaboina1809@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91-6303132188',
      link: 'tel:+916303132188'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Hyderabad, India',
      link: null
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com/in/sriharirajaboina'
    }
  ]

  return (
    <section id="contact" className="contact section" ref={sectionRef}>
      <div className="container">
        <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
          <div className="contact-header">
            <h2 className="section-title">Get In Touch</h2>
            <div className="title-underline"></div>
            <p className="contact-description">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="contact-list">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className="contact-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="contact-icon">
                      <span>{item.icon}</span>
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">{item.label}</span>
                      {item.link ? (
                        <a href={item.link} className="contact-value">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact-value">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send a Message</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <div className="btn-ripple"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact