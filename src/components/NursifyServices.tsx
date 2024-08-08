import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import SwiperCore, { EffectFlip } from 'swiper';

// Install the EffectFlip module
SwiperCore.use([EffectFlip]);

const NursifyServices = () => {
  const services = [
    {
      frontText: "Service 1",
      frontImage: "/path/to/frontImage1.jpg",
      backText: "Detailed explanation of Service 1",
    },
    {
      frontText: "Service 2",
      frontImage: "/path/to/frontImage2.jpg",
      backText: "Detailed explanation of Service 2",
    },
    {
      frontText: "Service 3",
      frontImage: "/path/to/frontImage3.jpg",
      backText: "Detailed explanation of Service 3",
    },
  ];

  return (
    <div className="nursify-services-container">
      <Swiper
        effect="flip"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={service.frontImage} alt={service.frontText} />
                  <div className="front-text">{service.frontText}</div>
                </div>
                <div className="flip-card-back">
                  <div className="back-text">{service.backText}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NursifyServices;
