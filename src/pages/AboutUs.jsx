import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import FactCounter from '../components/FactCounter'
import CollectionSection from '../components/CollectionSection'

const AboutUs = () => {
  const [activeAccordion, setActiveAccordion] = useState(1)

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const benefits = [
    {
      icon: 'flaticon-transport-1',
      title: 'Quick Delivery',
      text: 'Efficient logistics and shipping partners ensure timely delivery of your orders worldwide.'
    },
    {
      icon: 'flaticon-medal',
      title: 'High Quality Standards',
      text: 'All parts undergo strict quality checks to meet international export standards.'
    },
    {
      icon: 'flaticon-tag',
      title: 'Competitive Export Prices',
      text: 'Best wholesale export prices with no minimum order requirements for bulk purchases.'
    }
  ]

  const faqs = [
    {
      question: 'What truck brands do you export parts for?',
      answer: 'We export genuine parts for all major Indian truck brands including Tata, Ashok Leyland, Mahindra, Eicher, and Force Motors.'
    },
    {
      question: 'Do you offer OEM and aftermarket parts?',
      answer: 'Yes, we provide both genuine OEM parts and high-quality aftermarket alternatives to suit different customer requirements and budgets.'
    },
    {
      question: 'What is your minimum order quantity?',
      answer: 'We have no minimum order requirements. You can order as few or as many parts as needed, and we also support mixed brand orders in a single shipment.'
    },
    {
      question: 'How do you ensure quality of exported parts?',
      answer: 'All parts undergo rigorous quality inspection before packaging. We maintain ISO quality standards and provide proper documentation for all exports.'
    },
    {
      question: 'What shipping methods do you use?',
      answer: 'We offer both LCL (Less than Container Load) and FCL (Full Container Load) shipping options, as well as air freight for urgent orders.'
    }
  ]

  return (
    <>
      <PageBanner title="About Us" breadcrumb="About Us" />

      <section className="about-section sec-pad">
        <div className="page-title about-title">About</div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 about-column">
              <div className="about-content">
                <div className="sec-title">
                  <h2>WELCOME<br />TO TRUCKS AUTOPARTS EXPORT</h2>
                </div>
                <div className="font-16">
                  Ambika Motors is a leading exporter of genuine truck auto parts, 
                  specializing in Indian truck brands with a commitment to quality and reliability.
                </div>
                <div className="text">
                  <p>
                    With over 15 years of experience in the automotive parts export industry, 
                    we have established ourselves as a trusted partner for customers worldwide. 
                    Our extensive inventory includes genuine and aftermarket parts for all major 
                    Indian truck manufacturers, ensuring bumper-to-bumper coverage for your needs.
                  </p>
                </div>
                <ul className="list">
                  <li>Genuine OEM parts and high-quality aftermarket alternatives</li>
                  <li>Export-ready packaging for safe international shipping</li>
                  <li>Competitive wholesale prices with flexible order quantities</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 about-column">
              <div className="about-img wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                <figure><img src="/images/about/4.jpg" alt="About Ambika Motors" style={{ width: '100%', height: 'auto', maxWidth: '100%' }} /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CollectionSection />

      <section className="choose-section sec-pad">
        <div className="page-title choose-title">Why Choose Us?</div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12 column">
              <div className="choose-content">
                <div className="sec-title"><h2>Why Choose Us?</h2></div>
                <div className="font-16">
                  We are committed to providing the best export experience 
                  for truck auto parts.
                </div>
                {benefits.map((benefit, index) => (
                  <div key={index} className="single-item">
                    <div className="icon-box">
                      <i className={benefit.icon}></i>
                    </div>
                    <h3>{benefit.title}</h3>
                    <div className="text">
                      <p>{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 column">
              <div className="accordion-box">
                {faqs.map((faq, index) => (
                  <div key={index} className={`accordion animated out ${activeAccordion === index + 1 ? 'active' : ''}`}>
                    <div 
                      className={`acc-btn ${activeAccordion === index + 1 ? 'active' : ''}`}
                      onClick={() => toggleAccordion(index + 1)}
                    >
                      <div className="title">{faq.question}</div>
                      <div className="toggle-icon">
                        <span className={`plus fa ${activeAccordion === index + 1 ? 'fa-minus' : 'fa-plus'}`}></span>
                        <span className={`minus fa ${activeAccordion === index + 1 ? 'fa-minus' : 'fa-plus'}`}></span>
                      </div>
                    </div>
                    <div className={`acc-content ${activeAccordion === index + 1 ? '' : 'collapsed'}`}>
                      <div className="text">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 column">
              <div className="video-gallery">
                <img src="/images/about/video-gallery.jpg" alt="About Ambika Motors" style={{ width: '100%', height: 'auto', maxWidth: '100%' }} />
                <div className="overlay-gallery">
                  <div className="icon-holder">
                    <div className="icon">
                      <a 
                        className="html5lightbox" 
                        title="Ambika Motors" 
                        href="https://youtu.be/yVb0mfmMV9w"
                      >
                        <i className="fa fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FactCounter />
    </>
  )
}

export default AboutUs

