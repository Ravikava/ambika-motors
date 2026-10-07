import { Link } from 'react-router-dom'
import './HeroSection.css'

const stats = [
  { value: '50+', label: 'Countries Exported', tone: 'default' },
  { value: '100%', label: 'Genuine Parts', tone: 'brand' },
  { value: '24/7', label: 'Port Dispatch', tone: 'success' },
]

const HeroSection = () => {
  return (
    <section className="v2-hero">
      <div className="v2-hero-glow" aria-hidden="true" />

      <div className="v2-hero-inner">
        <p className="v2-hero-eyebrow">
          <img src="/images/redesign/icon-shield.svg" alt="" />
          Quality Auto Parts. Best Prices. Global Delivery.
        </p>

        <div className="v2-hero-grid">
          <div className="v2-hero-copy">
            <h1 className="v2-hero-title">
              <span className="v2-hero-title-line">Ambika Motors –</span>
              <span className="v2-hero-title-line v2-hero-gradient">Exporting</span>
              <span className="v2-hero-title-line">
                <span className="v2-hero-gradient">Excellence</span> From
              </span>
              <span className="v2-hero-title-line">India.</span>
            </h1>

            <p className="v2-hero-subtitle">
              Premium-quality auto parts and automotive oils for international markets, with
              reliable quality, competitive pricing and timely shipments.
            </p>

            <Link to="/demo-contact-us" className="v2-btn v2-btn--lg v2-hero-cta">
              Contact Us
              <img className="v2-btn-arrow" src="/images/redesign/icon-arrow-right.svg" alt="" />
            </Link>

            <ul className="v2-hero-stats">
              {stats.map((stat) => (
                <li key={stat.label} className="v2-hero-stat">
                  <span className={`v2-hero-stat-value v2-hero-stat-value--${stat.tone}`}>
                    {stat.value}
                  </span>
                  <span className="v2-hero-stat-label">{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="v2-hero-visual">
            <div className="v2-crane" aria-hidden="true">
              <span className="v2-crane-cable" />
              <span className="v2-crane-hook">
                <img src="/images/redesign/icon-hook.svg" alt="" />
              </span>
              <span className="v2-crane-slings">
                <img className="v2-crane-sling-left" src="/images/redesign/sling-left.svg" alt="" />
                <img className="v2-crane-sling-right" src="/images/redesign/sling-right.svg" alt="" />
              </span>
            </div>

            <div className="v2-cargo-box">
              <div className="v2-cargo-identity">
                <span className="v2-cargo-badge">
                  <img src="/images/redesign/icon-ship.svg" alt="" />
                </span>
                <p className="v2-cargo-name">Ambika Motors</p>
                <p className="v2-cargo-division">Global Heavy Export Division</p>
              </div>

              <div className="v2-cargo-specs">
                <div className="v2-cargo-spec">
                  <span className="v2-cargo-spec-label">Net Cargo Capacity</span>
                  <span className="v2-cargo-spec-value">approx. 1,170&nbsp;cu&nbsp;ft</span>
                </div>
                <div className="v2-cargo-spec v2-cargo-spec--end">
                  <span className="v2-cargo-spec-label">Port Route</span>
                  <span className="v2-cargo-spec-value v2-cargo-spec-value--route">
                    IN-IXY → Worldwide
                  </span>
                </div>
              </div>
            </div>

            <span className="v2-hero-floor" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
