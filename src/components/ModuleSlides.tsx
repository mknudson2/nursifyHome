import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

interface Module {
  background_image: string;
  title: string;
  subtitle: string;
  text: string;
}

const ModuleSlides: React.FC = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const moduleInfo: Module[] = [
      { background_image: '/img1.webp', title: 'Module 1', subtitle: 'Core Rolling', text: 'Learn how to roll your patient with ease!' },
      { background_image: '/img2.webp', title: 'Module 2', subtitle: 'Supine to Sit', text: 'No more back pain? Use these techniques instead!' },
      { background_image: '/img3.webp', title: 'Module 3', subtitle: 'Scoot up in Bed', text: "Don't wait for help, use this technique today!" },
      { background_image: '/img4.webp', title: 'Module 4', subtitle: 'Scoot Forward and Backward', text: 'Move your patient forward and backward with ease.' },
      { background_image: '/img5.webp', title: 'Module 5', subtitle: 'Basic Transfer Principles', text: 'These critical aspects make or break your transfers' },
      { background_image: '/img6.webp', title: 'Module 6', subtitle: 'Low Bottom Scoot', text: 'No more lifting to transfer. Use this transfer now!' },
      { background_image: '/img7.webp', title: 'Module 7', subtitle: 'Paralyzed No Lift Transfer', text: 'Hemiplegia transfers scary? Not with this information.' },
      { background_image: '/img8.webp', title: 'Module 8', subtitle: 'Paralyzed No Lift Transfer', text: 'Paralyzed transfers scary? Not with this information.' },
      { background_image: '/img9.webp', title: 'Module 9', subtitle: 'Amputation No Lift', text: 'No more fear with these tips with amputation here!' },
      { background_image: '/img10.webp', title: 'Bonus Modules', subtitle: 'Soft Skills', text: 'I' },
    ];

    setModules(moduleInfo);
  }, []);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const activeModule = modules[activeIndex] || {};

  return (
    <>
      <div className="gameContainer">
        <h2>Mobility & <span className="section-header-highlight">Transfer</span> Courses</h2>
        {modules.length > 0 && (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="swiper_container"
            onSlideChange={handleSlideChange}
          >
            {modules.map((module, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <h1 className="moduleText">{module.title}</h1>
                <img className="moduleImg" src={module.background_image} alt={module.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div className="gameParagraph">
        <h3>{activeModule.subtitle}</h3>
        <p>{activeModule.text}</p>
      </div>
    </>
  );
};

export default ModuleSlides;
