import { Link } from 'react-router-dom'
import './AboutSection.css'

const pillars = [
  {
    icon: 'icon-verified.svg',
    title: 'International Quality Standards',
    text: 'Stringent quality control and compliance with international export standards ensure every product meets the highest specifications.',
  },
  {
    icon: 'icon-package.svg',
    title: 'Timely Shipments',
    text: 'We are committed to on-time delivery. Our logistics and shipping partnerships ensure your orders reach your destination port as per schedule.',
  },
  {
    icon: 'icon-rupee.svg',
    title: 'Competitive Pricing',
    text: 'We offer competitive quotations with no minimum order requirements. Share your quantity and destination for our best export rates.',
  },
]

// variant "page": About Us version B (h1 + why-us cards); "teaser": version A for the home page
const AboutSection = ({ variant = 'page' }) => {
  const isPage = variant === 'page'
  const Title = isPage ? 'h1' : 'h2'

  return (
    <section className={isPage ? 'v2-about' : 'v2-about v2-about--teaser'}>
      <div className="v2-about-inner">
        <p className="v2-about-tag">
          <img src="/images/redesign/icon-company.svg" alt="" />
          Who We Are // Strategic Logistics Partner
        </p>
        <Title className="v2-about-title">About Us</Title>

        <div className="v2-about-stage">
          <span className="v2-about-watermark" aria-hidden="true">Why Us?</span>

          <div className="v2-about-box">
            <span className="v2-about-corner v2-about-corner--tl" aria-hidden="true" />
            <span className="v2-about-corner v2-about-corner--tr" aria-hidden="true" />
            <span className="v2-about-corner v2-about-corner--bl" aria-hidden="true" />
            <span className="v2-about-corner v2-about-corner--br" aria-hidden="true" />

            <p className="v2-about-text">
              Ambika Motors is a professionally managed export firm from India, specializing in
              premium-quality auto parts and automotive oils for international markets. We deliver
              reliable quality, competitive pricing, and timely shipments—backed by stringent quality
              control and a strong supplier network.
            </p>

            {/* On the about page itself this opens the old page, which still holds the stats / FAQ */}
            <Link to={isPage ? '/about-us' : '/demo-about-us'} className="v2-btn v2-about-cta">
              Learn More
              <img className="v2-btn-arrow" src="/images/redesign/icon-arrow-right-sm.svg" alt="" />
            </Link>
          </div>
        </div>

        {isPage && (
          <ul className="v2-about-pillars">
            {pillars.map((pillar) => (
              <li key={pillar.title} className="v2-about-pillar">
                <span className="v2-about-pillar-icon">
                  <img src={`/images/redesign/${pillar.icon}`} alt="" />
                </span>
                <h2 className="v2-about-pillar-title">{pillar.title}</h2>
                <p className="v2-about-pillar-text">{pillar.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default AboutSection
