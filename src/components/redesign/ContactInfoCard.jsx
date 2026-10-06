import { useId } from 'react'
import { CONTACT_GROUPS, addressLines, telHref } from '../../data/contact'
import BreakableEmail from './BreakableEmail'
import './ContactInfoCard.css'

// One group's rows in a fixed order (phone, email, address); fields the group leaves out are skipped
const rowsFor = (group) =>
  [
    group.phone && {
      icon: 'icon-phone.svg',
      label: group.phone.label,
      value: group.phone.value,
      href: telHref(group.phone.value),
      variant: 'phone',
    },
    group.email && {
      icon: 'icon-mail.svg',
      label: group.email.label,
      value: group.email.value,
      href: `mailto:${group.email.value}`,
      variant: 'email',
    },
    group.address && {
      icon: 'icon-pin-small.svg',
      label: group.address.label,
      lines: addressLines(group.address),
      variant: 'address',
    },
  ].filter(Boolean)

// Figma: "Contact Info" card (479:3427). Shows every group it is given (all of CONTACT_GROUPS by default);
// `titleAs` sets the heading level to fit the section it sits in.
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
          <ul className="v2-contact-details">
            {rowsFor(group).map((item) => (
              <li key={item.variant} className="v2-contact-detail">
                <span className="v2-contact-detail-icon">
                  <img src={`/images/redesign/${item.icon}`} alt="" />
                </span>
                <div className="v2-contact-detail-text">
                  <span className="v2-contact-detail-label">{item.label}</span>
                  {item.href ? (
                    <a
                      className={`v2-contact-detail-value v2-contact-detail-value--${item.variant}`}
                      href={item.href}
                    >
                      {item.variant === 'email' ? <BreakableEmail email={item.value} /> : item.value}
                    </a>
                  ) : (
                    <address className={`v2-contact-detail-value v2-contact-detail-value--${item.variant}`}>
                      {item.lines.map((line, lineIndex) => (
                        <span key={line}>
                          {lineIndex > 0 && <br />}
                          {line}
                        </span>
                      ))}
                    </address>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {children}
    </aside>
  )
}

export default ContactInfoCard
