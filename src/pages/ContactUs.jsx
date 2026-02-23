import { useState } from 'react'
import PageBanner from '../components/PageBanner'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    })
  }

  return (
    <>
      <PageBanner title="Contact" breadcrumb="Contact" />

      <section className="contact-info sp-two centred">
        <div className="container">
          <div className="info-content">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12 info-column">
                <div className="single-item">
                  <div className="icon-box">
                    <i className="flaticon-location"></i>
                  </div>
                  <h3>Location</h3>
                  <div className="text">
                    Your Business Address,<br />
                    City, State, Country - ZIP Code
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 info-column">
                <div className="single-item">
                  <div className="icon-box">
                    <i className="flaticon-technology"></i>
                  </div>
                  <h3>Phone Number</h3>
                  <div className="text">
                    +91-7359550113<br />
                    +91-7359550113
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 info-column">
                <div className="single-item">
                  <div className="icon-box">
                    <i className="flaticon-message"></i>
                  </div>
                  <h3>Email Address</h3>
                  <div className="text">
                    info@ambikamotors.com<br />
                    export@ambikamotors.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section centred">
        <div className="container">
          <div className="sec-title"><h2>Get In Touch</h2></div>
          <div className="text">
            Have questions about our truck parts export services? 
            Send us a message and we'll respond as soon as possible.
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
                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                  <button className="btn-one btn-border" type="submit" name="submit-form">
                    Send Message
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

