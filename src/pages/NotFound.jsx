import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { PAGE_META } from '../seo'
import PageHeader from '../components/redesign/PageHeader'
import { ROUTES } from '../routes'

// Any address that isn't a page on the site
const NotFound = () => {
  return (
    <>
      <PageMeta meta={PAGE_META.notFound} />
      <PageHeader
        crumbs={[{ label: 'Home', to: ROUTES.home }, { label: 'Page Not Found' }]}
        icon="icon-map.svg"
        eyebrow="Error 404"
        title="Page Not Found"
        intro="The page you're looking for doesn't exist or has moved."
      />
      <div className="v2-not-found-actions">
        <Link to={ROUTES.home} className="v2-btn">
          Back to Home
        </Link>
        <Link to={ROUTES.contact} className="v2-btn v2-btn--ghost">
          Contact Us
        </Link>
      </div>
    </>
  )
}

export default NotFound
