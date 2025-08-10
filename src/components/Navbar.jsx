import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react"; 
function Navbar() {
  const { cart, cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>LuxWatch</h1>
        </Link>
      </div>

      <button className="mobile-menu-btn" onClick={toggleMenu}>
        <span className="menu-icon"></span>
      </button>

      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/watches">Watches</Link>
        <Link to="/About">About</Link>
        <Link to="/checkout" className="cart-link">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
