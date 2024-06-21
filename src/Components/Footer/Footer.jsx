import './Footer.css';
import logo from '../../assets/logo-white.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo}/>
            </div>
        </div>
        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li>Main</li>
            <li>Gallery</li>
            <li>Projects</li>
            <li>Certifications</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacts</h4>
          <ul>
            <li>1234 Sample Street Austin Texas 78704</li>
            <li>512.333.2222</li>
            <li>sampleemail@gmail.com</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Social Media</h4>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-pinterest"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2019 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
