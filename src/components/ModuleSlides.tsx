import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
// import Fab from '@mui/material/Fab';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

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
      { background_image: '/img1.webp', title: 'Module 1', subtitle: 'Intro to Core Rolling', text: "One of the most essential elements of protecting yourself while helping your patient is learned in this introductory module. Reducing your stress, increasing your efficiency and providing more empowering opportunities for your patients begins right here." },
      { background_image: '/img2.webp', title: 'Module 2', subtitle: 'Supine to Sit', text: "Helping your patient move from lying in bed into a sitting position is one of the greatest risks of injury for nurses. We know we shouldn't lift with our back, but our patients often require specific solutions. Learn how to keep everyone safe, in control and do it without breaking a sweat." },
      { background_image: '/img3.webp', title: 'Module 3', subtitle: 'Basic Scooting in Bed', text: "This is the MOST COMMON transfer a nurse will do in their career, making it one of the greatest risks of workplace injury. What you learn here can save you from acute and chronic workplace injuries. This one is indispensable as a nurse working in Hospital, SNF or LTAC settings." },
      { background_image: '/img4.webp', title: 'Module 4', subtitle: 'Scooting', text: "Positioning your patient perfectly can be a puzzling predicament, but it's crucial for their comfort and safety. They don't always have the strength to help and you don't always have someone else to help you, which is exactly why we teach you how to scoot your complex patients all by yourself!" },
      { background_image: '/img5.webp', title: 'Module 5', subtitle: 'The 3 Transfer Essentials', text: "Modules 1-4 prepare you for every type of situation where bed mobility is the solution. This module teaches you the 3 critical components of every transfer you will ever do. If a transfer feels difficult, it's because you're not doing 1 of these 3 components!" },
      { background_image: '/img6.webp', title: 'Module 6', subtitle: 'Low-Bottom Scoot', text: "Almost everyone knows how important body mechanics can be when transferring patients, but then why do so few healthcare professionals know how to do them correctly? Module 6 reveals the step-by-step strategy for proper body mechanics." },
      { background_image: '/img7.webp', title: 'Module 7', subtitle: 'Seated Transfer - Hemiparesis', text: "Patients who have had a stroke (CVA) have gone through an extremely stressful event; transferring them doesn't have to be the same. The techniques taught in this module will rescue you from improper transfers for patients who have hemiparesis & a variety of post-stroke symptoms." },
      { background_image: '/img8.webp', title: 'Module 8', subtitle: 'Seated Transfer - SCI', text: "Knowing the exact methods for transferring someone who has had a spinal cord injury (SCI) can be extremely tricky. Fortunately, we explore the intricacies of this unique transfer that works regardless of the level of injury and whether you have access to equipment or not; this works!" },
      { background_image: '/img9.webp', title: 'Module 9', subtitle: 'Seated Transfer - Amputation', text: "Any type of lower body amputation changes how a patient moves, senses and their center of gravity. These factors can make transfers much more precarious and challenging. Module 9 guides you through the straightforward procedure to get someone from point A to point B, safely." },
      { background_image: '/img10.webp', title: 'Bonus Modules', subtitle: 'Soft Skills Hub', text: "These are all the skills that focus on your behaviors, habits and interactions with patients, co-workers and even yourself. They are the difference between being an OK nurse and being an exceptional nurse." },
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
            autoplay={{delay: 5000}}
            speed={1500}
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
            modules={[EffectCoverflow, Pagination, Autoplay]}
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
      {/* <div className="interested-fab">
        <Fab 
          variant="extended" 
          sx={{ 
            background: 'white', 
            color: "var(--accent-color)", 
            '&:hover': {
              color: 'white', 
              backgroundColor: 'var(--accent-color)' }}}>
              Interested in Nursify?
        </Fab>
      </div> */}
    </>
  );
};

export default ModuleSlides;
