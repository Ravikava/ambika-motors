import { useState } from 'react'
import emailjs from '@emailjs/browser'
import PageBanner from '../components/PageBanner'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })
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
    setIsSubmitting(true)
    setSubmitStatus(null)

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

    if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      setSubmitStatus('not-configured')
      setIsSubmitting(false)
      return
    }

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`.trim(),
          from_email: formData.email,
          message: formData.message,
          to_email: 'ambikamotors932@gmail.com'
        },
        publicKey
      )
      setSubmitStatus('success')
      setFormData({ firstName: '', lastName: '', email: '', message: '' })
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <PageBanner title="Contact" breadcrumb="Contact" />

      <section className="contact-info sp-two centred contact-page-info">
        <div className="container">
          <div className="info-content">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12 info-column">
                <div className="single-item">
                  <div className="icon-box">
                    <i className="fa fa-phone"></i>
                  </div>
                  <h3>Phone Number</h3>
                  <div className="text">
                    <a href="tel:+919979847932">+91-9979847932</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 info-column">
                <div className="single-item">
                  <div className="icon-box">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <h3>Email Address</h3>
                  <div className="text">
                    <a href="mailto:ambikamotors932@gmail.com">ambikamotors932@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 info-column">
                <div className="single-item">
                  <div className="icon-box">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <h3>Location</h3>
                  <div className="text">
                    Shop No: 1, Ambika compound vedachha patiya <br />Surat, Gujarat, India-395010
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section centred page-content-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title">Send Us a Message</h2>
              <div className="small-border"></div>
              <p className="section-intro">
                Have questions about our truck parts export services? Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
          <div className="contact-form-area">
            <form method="post" onSubmit={handleSubmit} id="contact-form">
              <div className="row">
                <div className="form-group col-md-4 col-sm-6 col-xs-12">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-md-4 col-sm-6 col-xs-12">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-md-4 col-sm-12 col-xs-12">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                  <textarea
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                {submitStatus === 'success' && (
                  <div className="col-12 form-message form-message-success">
                    <i className="fa fa-check-circle"></i> Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="col-12 form-message form-message-error">
                    <i className="fa fa-exclamation-circle"></i> Failed to send message. Please try again or contact us directly.
                  </div>
                )}
                {submitStatus === 'not-configured' && (
                  <div className="col-12 form-message form-message-warning">
                    <i className="fa fa-info-circle"></i> Email is not configured yet. See EMAILJS_SETUP.txt for setup instructions.
                  </div>
                )}
                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                  <button
                    className="btn-cta"
                    type="submit"
                    name="submit-form"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
