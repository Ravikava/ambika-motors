import { Link } from 'react-router-dom'

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribe form submitted')
  }

  return (
    <>
      {/* main-footer */}
      <footer className="main-footer" style={{ backgroundImage: 'url(/images/home/footer.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12 footer-column">
              <div className="logo-widget footer-widget">
                <div className="footer-logo">
                  <Link to="/">
                    <figure><img src="/images/logo/footer.png" alt="Ambika Motors" style={{ width: '115px', height: 'auto' }} /></figure>
                  </Link>
                </div>
                <div className="text">
                  Ambika Motors is a leading exporter of genuine truck auto parts, providing 
                  high-quality components for major truck brands. We ensure reliable delivery 
                  and competitive prices for our global customers.
                </div>
                <ul className="footer-social in-block">
                  <li><a href="#" aria-label="Facebook"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#" aria-label="Twitter"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#" aria-label="Vimeo"><i className="fa fa-vimeo"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 footer-column">
              <div className="service-widget footer-widget">
                <div className="footer-title">Services Link</div>
                <ul className="list">
                  <li><Link to="/truck-brands">Truck Brands</Link></li>
                  <li><Link to="/parts-brands">Parts Brands</Link></li>
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
                  <li><a href="#">Export Services</a></li>
                  <li><a href="#">Quality Assurance</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 footer-widget">
              <div className="contact-widget footer-widget">
                <div className="footer-title">Contact Us</div>
                <div className="text">
                  Get in touch with us for all your truck parts export needs.
                </div>
                <div className="single-item">
                  <div className="title">Location:</div>
                  <div className="text">
                  Shop No: 1,Ambika compound vedachha patiya, Surat <br />Gujarat, India-395010
                  </div>
                </div>
                <div className="single-item">
                  <div className="title">Phone:</div>
                  <div className="text">+91-9979847932</div>
                </div>
                <div className="single-item">
                  <div className="title">Email:</div>
                  <div className="text">ambikamotors932@gmail.com</div>
                </div>
              </div>
            </div>
            
          </div>
          {/* <div className="subscribe-widget centred">
            <form action="#" method="post" onSubmit={handleSubscribe}>
              <div className="form-group">
                <input type="email" name="email" placeholder="Enter your email" required />
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </div> */}
        </div>
      </footer>

      {/* footer-bottom */}
      <section className="footer-bottom centred">
        <div className="copyright">
          <Link to="/">Ambika Motors</Link> &copy; {new Date().getFullYear()} All Right Reserved
        </div>
      </section>
    </>
  )
}

export default Footer

