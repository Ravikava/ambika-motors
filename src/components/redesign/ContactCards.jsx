import { useId } from 'react'
import { CONTACT_GROUPS } from '../../data/contact'
import ContactDetailsList from './ContactDetailsList'
import './ContactCards.css'

// Contact page: one card per contact group in src/data/contact.js. A single card is as wide as the form
// with its details side by side; two cards sit side by side; three or more share the row (and wrap).
const ContactCards = ({ groups = CONTACT_GROUPS }) => {
  const titleId = useId()

  return (
    <section className="v2-contact-cards" aria-labelledby={titleId}>
      <h2 id={titleId} className="v2-contact-cards-title">
        <img src="/images/redesign/icon-contact-card.svg" alt="" />
        Contact Info
      </h2>

      <ul className="v2-contact-cards-list" data-count={Math.min(groups.length, 3)}>
        {groups.map((group, groupIndex) => (
          <li key={groupIndex} className="v2-contact-card">
            {group.title && (
              <h3 className="v2-contact-card-title">
                <img src="/images/redesign/icon-company.svg" alt="" />
                {group.title}
              </h3>
            )}
            <ContactDetailsList group={group} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ContactCards
