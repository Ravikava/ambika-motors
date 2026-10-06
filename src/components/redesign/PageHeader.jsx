import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import './PageHeader.css'

// Dark header for inner redesign pages (replaces the old photo banner). The last crumb is the current page.
const PageHeader = ({ crumbs, icon, eyebrow, title, intro }) => {
  return (
    <header className="v2-page-header">
      {/* React 19 hoists this into <head> */}
      <title>{`${title} | Ambika Motors`}</title>
      <div className="v2-page-header-glow" aria-hidden="true" />
      <div className="v2-page-header-inner">
        <nav className="v2-breadcrumb" aria-label="Breadcrumb">
          <ol>
            {crumbs.map((crumb) => (
              <li key={crumb.label}>
                {crumb.to ? (
                  <Link to={crumb.to}>{crumb.label}</Link>
                ) : (
                  <span aria-current="page">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <SectionHeading as="h1" icon={icon} eyebrow={eyebrow} title={title} subtitle={intro} />
      </div>
    </header>
  )
}

export default PageHeader
