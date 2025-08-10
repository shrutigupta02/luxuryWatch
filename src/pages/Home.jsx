import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Elevate Your Style with Luxury Timepieces</h1>
          <p>
            Discover our exquisite collection of premium watches, where artistry
            meets precision. Each piece tells a unique story of craftsmanship
            and elegance.
          </p>
          <Link to="/watches" className="cta-button">
            Explore Collection
          </Link>
        </div>
      </section>

      <section className="featured-section">
        <h2>Curated Collections</h2>
        <p className="section-subtitle">
          Handpicked selections for the distinguished connoisseur
        </p>
        <div className="featured-grid">
          <div className="featured-item">
            <div className="image-container">
              <img src="/classic.jpg" alt="Classic Collection" />
            </div>
            <div className="content">
              <h3>Classic Collection</h3>
              <p>
                Timeless elegance that transcends generations, featuring
                sophisticated designs and impeccable craftsmanship
              </p>
              <Link
                to="/watches?collection=classic"
                className="collection-link"
              >
                View Collection →
              </Link>
            </div>
          </div>

          <div className="featured-item">
            <div className="image-container">
              <img src="/sports.jpg" alt="Sport Collection" />
            </div>
            <div className="content">
              <h3>Sport Collection</h3>
              <p>
                Performance-driven timepieces engineered for adventure,
                combining durability with sophisticated style
              </p>
              <Link to="/watches?collection=sport" className="collection-link">
                View Collection →
              </Link>
            </div>
          </div>

          <div className="featured-item">
            <div className="image-container">
              <img src="/luxury.jpg" alt="Luxury Collection" />
            </div>
            <div className="content">
              <h3>Luxury Collection</h3>
              <p>
                Exceptional masterpieces that exemplify the pinnacle of
                watchmaking excellence and luxury
              </p>
              <Link to="/watches?collection=luxury" className="collection-link">
                View Collection →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Experience Luxury Like Never Before</h2>
        <p className="section-subtitle">
          Discover the hallmarks of our unrivaled service excellence
        </p>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-crown"></i>
            </div>
            <h3>Guaranteed Authenticity</h3>
            <p>
              Each masterpiece in our collection comes with a certificate of
              authenticity and is sourced exclusively from the world's most
              prestigious watchmakers
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-user-tie"></i>
            </div>
            <h3>Personal Concierge Service</h3>
            <p>
              Our master horologists provide white-glove consultation, helping
              you discover the perfect timepiece that reflects your unique style
              and preferences
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-truck"></i>
            </div>
            <h3>Global White Glove Delivery</h3>
            <p>
              Experience peace of mind with our fully insured, signature
              delivery service, featuring real-time tracking and specialized
              handling worldwide
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Lifetime Support</h3>
            <p>
              Enjoy complimentary maintenance services and expert care
              throughout your timepiece's journey with us
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-sync"></i>
            </div>
            <h3>Trade-In Program</h3>
            <p>
              Upgrade your collection with our exclusive trade-in program,
              offering competitive valuations and seamless transitions to your
              next luxury timepiece
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>Bespoke Services</h3>
            <p>
              Experience the art of customization with our bespoke services,
              where we work closely with manufacturers to create truly unique
              timepieces
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
