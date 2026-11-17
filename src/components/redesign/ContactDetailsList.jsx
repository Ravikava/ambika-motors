import { addressLines, telHref } from '../../data/contact'
import BreakableEmail from './BreakableEmail'
import './ContactDetailsList.css'

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

// The phone / email / address rows of one contact group (src/data/contact.js)
const ContactDetailsList = ({ group }) => {
  return (
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
  )
}

export default ContactDetailsList
