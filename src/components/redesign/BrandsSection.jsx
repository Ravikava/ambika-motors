import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { partsBrands, tractorBrands, truckBrands } from '../../data/brands'
import SectionHeading from './SectionHeading'
import './BrandsSection.css'

// Replaces the three brand carousels of the current home page with one tabbed section
const tabs = [
  {
    id: 'parts',
    label: 'Parts',
    brands: partsBrands,
    intro: 'We export genuine auto parts from leading international brands.',
    linkFor: () => '/demo-parts-brands',
    allLink: '/demo-parts-brands',
    allLabel: 'View All Parts Brands',
  },
  {
    id: 'trucks',
    label: 'Trucks',
    brands: truckBrands,
    intro: 'We export genuine truck auto parts for all major Indian truck brands.',
    linkFor: (brand) => `/demo-truck-brands/${brand.slug}`,
    allLink: '/demo-truck-brands',
    allLabel: 'View All Truck Brands',
  },
  {
    id: 'tractors',
    label: 'Tractors',
    brands: tractorBrands,
    intro: 'We export genuine tractor parts for major tractor brands.',
    linkFor: () => '/demo-tractor-brands',
    allLink: '/demo-tractor-brands',
    allLabel: 'View All Tractor Brands',
  },
]

const BrandsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef([])
  const activeTab = tabs[activeIndex]

  // Arrow keys / Home / End move between tabs (WAI-ARIA tabs pattern, automatic activation)
  const handleKeyDown = (e) => {
    const last = tabs.length - 1
    const next = {
      ArrowRight: activeIndex === last ? 0 : activeIndex + 1,
      ArrowLeft: activeIndex === 0 ? last : activeIndex - 1,
      Home: 0,
      End: last,
    }[e.key]
    if (next === undefined) return
    e.preventDefault()
    setActiveIndex(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section className="v2-brands">
      <div className="v2-brands-inner">
        <SectionHeading
          icon="icon-truck.svg"
          eyebrow="Our Coverage // Brands We Export"
          title="Brands We Cover"
          subtitle="Quality assured and export-ready components for global markets."
        />

        <div className="v2-brands-tabs" role="tablist" aria-label="Brand categories">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(el) => { tabRefs.current[index] = el }}
              id={`v2-brands-tab-${tab.id}`}
              type="button"
              role="tab"
              className="v2-brands-tab"
              aria-selected={index === activeIndex}
              aria-controls={`v2-brands-panel-${tab.id}`}
              tabIndex={index === activeIndex ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={handleKeyDown}
            >
              {tab.label}
              <span className="v2-brands-tab-count">{tab.brands.length}</span>
            </button>
          ))}
        </div>

        <div
          key={activeTab.id}
          id={`v2-brands-panel-${activeTab.id}`}
          className="v2-brands-panel"
          role="tabpanel"
          aria-labelledby={`v2-brands-tab-${activeTab.id}`}
        >
          <p className="v2-brands-intro">{activeTab.intro}</p>

          <ul className="v2-brands-grid">
            {activeTab.brands.map((brand) => (
              <li key={brand.name} className="v2-brands-item">
                <Link to={activeTab.linkFor(brand)} className="v2-brand-tile">
                  <span className="v2-brand-logo">
                    <img src={brand.logo} alt="" loading="lazy" />
                  </span>
                  <span className="v2-brand-name">{brand.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <Link to={activeTab.allLink} className="v2-btn v2-brands-all">
            {activeTab.allLabel}
            <img className="v2-btn-arrow" src="/images/redesign/icon-arrow-right-sm.svg" alt="" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandsSection
