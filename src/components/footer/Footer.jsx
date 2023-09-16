import logo from "../../assets/insignia.png";
import './footer.css'; // You can create a separate CSS file for styling the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="PVV" />
        </div>
        <div className="footer-links">
          <ul className="footer-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>Contact Us:</p>
          <p>Email: info@yourwebsite.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
