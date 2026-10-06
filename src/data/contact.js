// Business contact details shared by the redesign pages (contact page, home contact strip, footer).
//
// CONTACT_GROUPS – each group is one block of details on the "Contact Info" card.
//  - The contact page shows every group; the home contact strip and the footer show the first (main) one.
//  - Inside a group, `phone`, `email` and `address` are each optional: leave one out and it isn't shown.
//  - `title` is optional and appears above the group's details (handy once there is more than one group).
//  - Address `lines`: one '...' per printed line, inside [ ] (a one-line address is ['...']).
export const CONTACT_GROUPS = [
  {
    title: 'Surat',
    phone: { label: 'Direct Export Hotline', value: '+91-9979847932' },
    email: { label: 'Commercial Desk Email', value: 'ambikamotors932@gmail.com' },
    address: {
      label: 'Registered Office & Hub Address',
      lines: ['Shop No: 1, Ambika compound vedachha patiya, Surat, Gujarat,', 'India-395010'],
    },
  },
  // To add another group: copy the template below, fill in the details and remove the // marks.
  {
    title: 'Ahmedabad',
    phone: { label: 'WhatsApp / Sales', value: '+91-XXXXXXXXXX' },
    email: { label: 'Sales Email', value: 'sales@example.com' },
    address: { label: 'Branch Address', lines: ['Address line 1,', 'City-PIN'] },
  },
]

export const MAIN_CONTACT = CONTACT_GROUPS[0] ?? {}

// Where the website's inquiry form sends messages (EmailJS {{to_email}})
export const INQUIRY_EMAIL = 'ambikamotors932@gmail.com'

// Address lines as a list, even if they were typed as a single '...' string
export const addressLines = (address) => [].concat(address?.lines ?? [])

// '+91-9979847932' -> 'tel:+919979847932'
export const telHref = (number) => `tel:${number.replace(/[^\d+]/g, '')}`

export const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.168696084395!2d72.90570567693321!3d21.185456482374803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04592c8eee293%3A0x26a40c217b5d1276!2sAmbica%20Motors!5e0!3m2!1sen!2sin!4v1772019948858!5m2!1sen!2sin'

export const SOCIAL_LINKS = [
  { name: 'WhatsApp', href: 'https://wa.me/919979847932' },
  { name: 'Facebook', href: 'https://www.facebook.com/61588482878492/' },
  { name: 'Instagram', href: 'https://www.instagram.com/ambikamotors_exporter0011/' },
]
