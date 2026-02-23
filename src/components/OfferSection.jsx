import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const OfferSection = () => {
  return (
    <section className="offer-section gray-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="single-item-carousel"
            >
              <SwiperSlide>
                <div className="img-box">
                  <figure><img src="/images/home/2.jpg" alt="Export Offer" style={{ width: '100%', height: 'auto', maxWidth: '100%' }} /></figure>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img-box">
                  <figure><img src="/images/home/2.jpg" alt="Export Offer" style={{ width: '100%', height: 'auto', maxWidth: '100%' }} /></figure>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img-box">
                  <figure><img src="/images/home/2.jpg" alt="Export Offer" style={{ width: '100%', height: 'auto', maxWidth: '100%' }} /></figure>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="offer-content">
              <div className="title">
                PREMIUM<br />
                <span>25%</span> DISCOUNT!
              </div>
              <div className="text">
                Grab The Yearly Export Offer And Win Unbelievably<br />
                Premium Discount Prices On Your Bulk Orders.
              </div>
              <div className="offer-btn">
                <a href="/contact-us" className="btn-one btn-border">GRAB IT NOW!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfferSection

