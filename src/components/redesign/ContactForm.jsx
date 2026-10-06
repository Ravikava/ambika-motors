import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { INQUIRY_EMAIL } from '../../data/contact'
import './ContactForm.css'

// Patterns are compiled with the regex `v` flag, so ( ) - must stay escaped inside the class
const fields = [
  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Enter your name here', autoComplete: 'name', required: true, pattern: '.*\\S.*', title: 'Please enter your name' },
  { name: 'company', label: 'Company / Importer Name', type: 'text', placeholder: 'company name here', autoComplete: 'organization' },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'xyz@gmail.com', autoComplete: 'email', required: true },
  { name: 'phone', label: 'Phone / WhatsApp Number', type: 'tel', placeholder: 'XXXXXXXXXX', autoComplete: 'tel', required: true, pattern: '[+0-9 \\(\\)\\-]{7,20}', title: 'Digits, spaces, +, ( ) and - only' },
]

const emptyForm = { name: '', company: '', email: '', phone: '', message: '' }

const statusMessages = {
  success: "Message sent successfully! We'll get back to you soon.",
  error: 'Failed to send message. Please try again or contact us directly.',
  'not-configured': 'Email is not configured yet. See EMAILJS_SETUP.txt for setup instructions.',
}

const ContactForm = () => {
  const [formData, setFormData] = useState(emptyForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setSubmitStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // The button stays focusable while sending (aria-disabled), so guard repeat submits here
    if (isSubmitting) return
    setIsSubmitting(true)
    setSubmitStatus(null)

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Missing keys, or the your_... placeholders from EMAILJS_SETUP.txt, mean EmailJS isn't set up yet
    const isPlaceholder = (value) => !value || /^your_/i.test(value)
    if ([serviceID, templateID, publicKey].some(isPlaceholder)) {
      setSubmitStatus('not-configured')
      setIsSubmitting(false)
      return
    }

    // The EmailJS template only renders {{message}}, so company and phone ride along in it
    const message = [
      formData.message.trim(),
      `Company / Importer: ${formData.company.trim() || 'Not provided'}`,
      `Phone / WhatsApp: ${formData.phone.trim()}`,
    ].filter(Boolean).join('\n\n')

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          company: formData.company.trim(),
          phone: formData.phone.trim(),
          message,
          to_email: INQUIRY_EMAIL
        },
        publicKey
      )
      setSubmitStatus('success')
      setFormData(emptyForm)
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form id="v2-inquiry" className="v2-inquiry" onSubmit={handleSubmit} aria-labelledby="v2-inquiry-title">
      <div className="v2-inquiry-header">
        <p className="v2-inquiry-eyebrow">Get In Touch</p>
        <h2 id="v2-inquiry-title" className="v2-inquiry-title">Send Us An Export Inquiry</h2>
      </div>

      <div className="v2-inquiry-grid">
        {fields.map((field) => (
          <div key={field.name} className="v2-inquiry-field">
            <label htmlFor={`v2-inquiry-${field.name}`} className="v2-inquiry-label">
              {field.label}{field.required && ' *'}
            </label>
            <input
              id={`v2-inquiry-${field.name}`}
              className="v2-inquiry-input"
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              pattern={field.pattern}
              title={field.title}
              value={formData[field.name]}
              onChange={handleChange}
              readOnly={isSubmitting}
              required={field.required}
            />
          </div>
        ))}

        <div className="v2-inquiry-field v2-inquiry-field--message">
          <label htmlFor="v2-inquiry-message" className="v2-inquiry-label">Message</label>
          <textarea
            id="v2-inquiry-message"
            className="v2-inquiry-input v2-inquiry-textarea"
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            readOnly={isSubmitting}
          />
        </div>

        <div className="v2-inquiry-actions">
          <p className={`v2-inquiry-status ${submitStatus ? `v2-inquiry-status--${submitStatus}` : ''}`} role="status">
            {submitStatus && statusMessages[submitStatus]}
          </p>
          <button type="submit" className="v2-btn v2-inquiry-submit" aria-disabled={isSubmitting}>
            <img src="/images/redesign/icon-send.svg" alt="" />
            {isSubmitting ? 'Sending...' : 'Send A Message'}
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
