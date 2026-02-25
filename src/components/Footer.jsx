import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="ambika-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Contact Info</h5>
            <address>
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
            </address>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/truck-brands">Truck Brands</Link></li>
              <li><Link to="/parts-brands">Parts Brands</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Follow Us</h5>
            <div className="footer-social">
              <a href="https://www.facebook.com/61588482878492/" aria-label="Facebook"><i className="fa fa-facebook"></i></a>
              <a href="https://www.instagram.com/ambikamotors_exporter0011/" aria-label="Instagram"><i className="fa fa-instagram"></i></a>
              {/* <a href="#" aria-label="Twitter"><i className="fa fa-twitter"></i></a> */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Ambika Motors. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
