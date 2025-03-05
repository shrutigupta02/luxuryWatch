import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Luxury Watches is your premier destination for high-end timepieces.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <br></br> 
            <Link to="/watches">Watches</Link>
            <br></br>
            <Link to="/checkout">Cart</Link>
            <br></br>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@luxurywatches.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <br></br>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <br></br>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <br></br>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-text">&copy; 2025 Luxury Watches. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;