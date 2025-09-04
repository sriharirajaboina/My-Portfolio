import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', icon: '🔗', url: 'https://github.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { name: 'Email', icon: '📧', url: 'mailto:sriharirajaboina1809@gmail.com' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>Sri Hari Rajaboina</h3>
              <p>React Developer | Frontend Specialist</p>
            </div>

            <div className="footer-links">
              <div className="quick-links">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                </ul>
              </div>

              <div className="contact-links">
                <h4>Contact Info</h4>
                <ul>
                  <li>sriharirajaboina1809@gmail.com</li>
                  <li>+91-6303132188</li>
                  <li>Hyderabad, India</li>
                </ul>
              </div>
            </div>

            <div className="social-section">
              <h4>Connect With Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    className="social-link"
                    title={social.name}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="social-icon">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              <p>&copy; {currentYear} Sri Hari Rajaboina. All rights reserved.</p>
            </div>
            <div className="footer-tech">
              <p>Built with React & ❤️</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer