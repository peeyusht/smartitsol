export function Footer() {
  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Smart IT Solutions</h3>
            <p>Your trusted partner for comprehensive network audits, security reviews, and professional system deployment services.</p>
            <p>Building secure, reliable IT infrastructure for the digital age, one client at a time.</p>
          </div>

          <div className="footer-section">
            <h3>Our Services</h3>
            <ul>
              <li><a href="#services">Network Security Audits</a></li>
              <li><a href="#services">Security Reviews & Penetration Testing</a></li>
              <li><a href="#services">Zero-Downtime System Deployment</a></li>
              <li><a href="#fortinet">FortiGate Deployment & Audits</a></li>
              <li><a href="#fortinet">FortiNAC, FortiWiFi & FortiSwitch</a></li>
              <li><a href="#services">Compliance Audits (PCI, HIPAA, SOC 2)</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Get Free Assessment</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📧 <a href="mailto:hello@smartitsol.in" className="footer-link">hello@smartitsol.in</a></p>
            <p>🌐 Available Nationwide</p>
            <p>🕒 24/7 Emergency Support</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Smart IT Solutions. All rights reserved. | Network Audits • Security Reviews • System Deployment</p>
        </div>
      </div>
    </footer>
  )
}
