import './SectionHeading.css'

// Centred eyebrow + title + subtitle used at the top of the redesign sections
const SectionHeading = ({ icon, eyebrow, title, subtitle, as = 'h2' }) => {
  const Title = as

  return (
    <div className="v2-heading">
      <p className="v2-heading-eyebrow">
        <img src={`/images/redesign/${icon}`} alt="" />
        {eyebrow}
      </p>
      <Title className="v2-heading-title">{title}</Title>
      {subtitle && <p className="v2-heading-subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
