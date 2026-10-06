import { MAP_EMBED_SRC } from '../../data/contact'
import './FindUsCard.css'

// Figma: "Find Us" location card (540:1147), with the live Google map the design note asked for
const FindUsCard = ({ className = '', titleAs = 'h2' }) => {
  const Title = titleAs

  return (
    <div className={`v2-findus ${className}`}>
      <Title className="v2-findus-title">
        <img src="/images/redesign/icon-map.svg" alt="" />
        Find Us // Surat Export Depot
      </Title>
      <div className="v2-findus-map">
        {/* Shown while the map loads, or if the embed is blocked */}
        <div className="v2-findus-placeholder">
          <img src="/images/redesign/icon-pin.svg" alt="" />
          <p className="v2-findus-name">Ambika Motors Depot</p>
          <p className="v2-findus-address">Vedachha Patiya, Surat, Gujarat 395010, India</p>
        </div>
        <iframe
          className="v2-findus-iframe"
          src={MAP_EMBED_SRC}
          title="Ambika Motors location on Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default FindUsCard
