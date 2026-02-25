import { Link } from 'react-router-dom'
import './ContactSectionHome.css'

const ContactSectionHome = () => {
  return (
    <section id="contact" className="contact-section-home">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">
              <span className="id-color">Contact</span> Us
            </h2>
            <div className="small-border"></div>
            <p className="contact-intro">
              Have questions about our truck parts export services? We are here to help.
            </p>
            <div className="contact-summary">
              <p>
                <i className="fa fa-phone"></i>
                <a href="tel:+919979847932">+91-9979847932</a>
              </p>
              <p>
                <i className="fa fa-envelope"></i>
                <a href="mailto:ambikamotors932@gmail.com">ambikamotors932@gmail.com</a>
              </p>
              <p>
                <i className="fa fa-map-marker"></i>
                Shop No: 1, Ambika compound vedachha patiya, Surat, Gujarat, India-395010
              </p>
            </div>
            <Link to="/contact-us" className="btn-cta">
              Send a Message
            </Link>
          </div>
        </div>

        <div className="row contact-map-row">
          <div className="col-12">
            <div className="map-container">
              <h3 className="map-title">Find Us</h3>
              <div className="google-map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.168696084395!2d72.90570567693321!3d21.185456482374803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04592c8eee293%3A0x26a40c217b5d1276!2sAmbica%20Motors!5e0!3m2!1sen!2sin!4v1772019948858!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ambika Motors Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSectionHome
