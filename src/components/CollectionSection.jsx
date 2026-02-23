import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const CollectionSection = () => {
  const collections = [
    {
      title: 'Engine Parts Collection',
      text: 'Complete range of engine components for all major truck brands. Genuine parts, export quality, competitive prices.'
    },
    {
      title: 'Body Parts Collection',
      text: 'Bumper to bumper body parts including bumpers, fenders, doors, and panels. All export-ready and quality assured.'
    },
    {
      title: 'Transmission Parts',
      text: 'High-quality transmission components including gearboxes, clutches, and drivetrain parts for reliable performance.'
    }
  ]

  return (
    <section className="collection-section centred" style={{ backgroundImage: 'url(/images/home/view-heavy-machinery-used-construction-industry.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12 col-xs-12">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="single-item-carousel owl-nav-none"
            >
              {collections.map((collection, index) => (
                <SwiperSlide key={index}>
                  <div className="single-collection-section">
                    <div className="title">{collection.title}</div>
                    <div className="text">
                      <p>{collection.text}</p>
                    </div>
                    <div className="collection-btn">
                      <a href="/truck-brands" className="btn-one btn-border">Read More</a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollectionSection

