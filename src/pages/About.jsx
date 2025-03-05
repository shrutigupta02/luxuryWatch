import React from "react";

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1 className="about-title">About Luxury Watches</h1>
        <p className="about-subtitle">Crafting Timeless Elegance Since 2020</p>
        <br></br>
      </div>
      <div className="about-content">
        <section className="about-section">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, Luxury Watches has been at the forefront of
              premium timepiece retail. What started as a small boutique in New
              York has grown into a nationwide destination for watch enthusiasts
              and collectors alike.
            </p>
            <p>
              We pride ourselves on offering an expertly curated selection of
              the world's finest watches, combining traditional craftsmanship
              with modern innovation.
            </p>
          </div>
          <div className="about-image">
            <img src="/store.jpg" alt="Our Store" />
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Quality</h3>
              <p>
                We ensure every timepiece meets the highest standards of
                excellence.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Trust</h3>
              <p>
                Building lasting relationships through transparency and
                integrity.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">💎</div>
              <h3>Expertise</h3>
              <p>
                Our team of experts brings decades of horological knowledge.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">♾️</div>
              <h3>Innovation</h3>
              <p>
                Embracing the future while honoring traditional craftsmanship.
              </p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="/VM.jpg" alt="Team Member" />
              <h3>Mr.Vipul Mehra</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="KM.jpg" alt="Team Member" />
              <h3>Miss.Kritika Mehra</h3>
              <p>Head of Collections</p>
            </div>
            <div className="team-member">
              <img src="ram.jpg" alt="Team Member" />
              <h3>Mr.Ram</h3>
              <p>Master Watchmaker</p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>Visit Our Store</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Store Hours</h3>
              <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
              <p>Saturday: 10:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>

              <h3>Contact Information</h3>
              <p>📞 (555) 123-4567</p>
              <p>📧 info@luxurywatches.com</p>
              <p>📍 123 Delhi Lane, New Delhi, ND 110015</p>
            </div>
            <div className="store-image">
              <img src="/store-interior.jpg" alt="Store Interior" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
