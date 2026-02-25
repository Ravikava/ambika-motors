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
      title: 'Timely Shipments',
      text: 'We are committed to on-time delivery. Our logistics and shipping partnerships ensure your orders reach your destination port as per schedule.'
    },
    {
      icon: 'flaticon-medal',
      title: 'International Quality Standards',
      text: 'Stringent quality control and compliance with international export standards ensure every product meets the highest specifications.'
    },
    {
      icon: 'flaticon-tag',
      title: 'Competitive Pricing',
      text: 'We offer competitive quotations with no minimum order requirements. Share your quantity and destination for our best export rates.'
    }
  ]

  const faqs = [
    {
      question: 'What products does Ambika Motors export?',
      answer: 'We specialize in the export of genuine auto spare parts and high-grade automotive oils. Our product range is fully compliant with international quality standards, and we offer customized packaging solutions as per buyer requirements.'
    },
    {
      question: 'Which truck brands do you supply parts for?',
      answer: 'We export genuine parts for all major Indian truck brands including Tata, Ashok Leyland, Mahindra, Eicher, ISUZU, and others. We welcome enquiries for specific brands and product grades.'
    },
    {
      question: 'How can I request a quotation?',
      answer: 'Share your requirements—product grade, quantity, destination port, and packaging preferences—and we will provide our most competitive quotation. We also offer samples and detailed specifications on request.'
    },
    {
      question: 'How do you ensure quality of exports?',
      answer: 'We adhere to stringent quality control processes and international export standards. Our experienced team and strong supplier network across India support consistent quality and complete customer satisfaction.'
    },
    {
      question: 'What shipping and packaging options are available?',
      answer: 'We offer LCL and FCL shipping options, plus air freight for urgent orders. Packaging can be customized as per your requirements for safe international delivery.'
    }
  ]

  return (
    <>
      <PageBanner title="About Us" breadcrumb="About Us" />

      <section className="about-section page-content-section sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">Your Trusted Export Partner from India</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 about-column">
              <div className="about-content">
                <div className="font-16">
                  Ambika Motors is a professionally managed export firm based in India, specializing in the supply of premium-quality auto parts and automotive oils to international markets.
                </div>
                <div className="text">
                  <p>
                    We were established with a commitment to reliable quality, competitive pricing, and timely shipments. Our operations are supported by stringent quality control, compliance with international export standards, an experienced team, and a strong supplier network across India—all aimed at complete customer satisfaction.
                  </p>
                  <p>
                    We welcome the opportunity to collaborate with your organization. Share your requirements—product grade, quantity, destination port, and packaging preferences—and we will offer our most competitive quotation. We look forward to establishing a long-term, mutually beneficial business relationship.
                  </p>
                </div>
                <ul className="list">
                  <li>Genuine auto spare parts for major truck brands</li>
                  <li>High-grade automotive oils meeting international standards</li>
                  <li>Customized packaging solutions as per buyer requirements</li>
                  <li>Samples, detailed specifications, and competitive quotations on request</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 about-column">
              <div className="about-img wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                <figure><img src="/images/about/1.jpg" alt="About Ambika Motors" style={{ width: '100%', height: 'auto', maxWidth: '100%' }} /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CollectionSection />

      <section className="choose-section sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 column">
              <div className="choose-content">
                <div className="sec-title"><h2>Why Choose Us?</h2></div>
                <div className="font-16">
                  We are committed to delivering the best export experience for auto parts and automotive oils—backed by quality, transparency, and timely service.
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
            <div className="col-md-6 col-sm-12 col-xs-12 column">
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
          </div>
        </div>
      </section>

      <FactCounter />
    </>
  )
}

export default AboutUs

