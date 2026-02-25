import { Link } from 'react-router-dom'
import './AboutSection.css'

const AboutSection = () => {
  return (
    <section id="about" className="about-section-home">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">
              <span className="id-color">About</span> Us
            </h2>
            <div className="small-border"></div>
            <p className="about-intro">
              Ambika Motors is a professionally managed export firm from India, specializing in premium-quality auto parts and automotive oils for international markets. We deliver reliable quality, competitive pricing, and timely shipments—backed by stringent quality control and a strong supplier network.
            </p>
            <Link to="/about-us" className="btn-cta">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
