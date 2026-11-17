import { useId } from 'react'
import { CONTACT_GROUPS } from '../../data/contact'
import ContactDetailsList from './ContactDetailsList'
import './ContactInfoCard.css'

// Figma: "Contact Info" card (479:3427), used in the home contact strip. Shows every group it is given
// (all of CONTACT_GROUPS by default); `titleAs` sets the heading level to fit the section it sits in.
const ContactInfoCard = ({ groups = CONTACT_GROUPS, titleAs = 'h2', children }) => {
  const titleId = useId()
  const Title = titleAs
  // Group titles sit one heading level below the card title
  const GroupTitle = `h${Math.min(6, Number(titleAs.slice(1)) + 1)}`

  return (
    <aside className="v2-contact-info" aria-labelledby={titleId}>
      <Title id={titleId} className="v2-contact-info-title">
        <img src="/images/redesign/icon-contact-card.svg" alt="" />
        Contact Info
      </Title>

      {groups.map((group, groupIndex) => (
        <div key={groupIndex} className="v2-contact-group">
          {group.title && <GroupTitle className="v2-contact-group-title">{group.title}</GroupTitle>}
          <ContactDetailsList group={group} />
        </div>
      ))}

      {children}
    </aside>
  )
}

export default ContactInfoCard
